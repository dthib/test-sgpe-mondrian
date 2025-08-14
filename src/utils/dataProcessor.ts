import { EpciData, LeverPercentages, CalculatedData } from '../types';

// Color scheme for sectors
// TODO : adapt TeT brand colors
export const SECTOR_COLORS: { [key: string]: string } = {
  'Transports': '#c6dbef',
  'Résidentiel': '#fdb462',
  'Tertiaire': '#ffed6f',
  'Industrie': '#fb8072',
  'Agriculture': '#b3de69',
  'Déchets': '#bebada',
  'UTCATF': '#d9d9d9',
  'Cultures': '#F7DC6F'
};

// Default colors for levers
export const LEVER_COLORS = [
  '#FF6B35', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#E17055', '#74B9FF'
];

/**
 * Calculate data according to the 4 SNBC calculation methods
 */
export function calculateSNBCData(
  epciData: EpciData,
  leverPercentages: LeverPercentages
): CalculatedData {
  const result: CalculatedData = { sectors: [] };
  console.log('epciData:', epciData);
  console.log('leverPercentages:', leverPercentages);
  for (const sectorEPCI of epciData.sectors) {
    const sectorCSV = leverPercentages.sectors.find(
      s => s.sector_snbc === sectorEPCI.name
    );

    if (!sectorCSV) {
      console.warn(`Sector "${sectorEPCI.name}" not found in CSV data`);
      continue;
    }

    const levers: { name: string; contribution: number; color?: string }[] = [];
    let total = 0;

    switch (sectorEPCI.calculation_method) {
      case 'difference_repartition':
        total = calculateDifferenceRepartition(sectorEPCI, sectorCSV, epciData.region, levers);
        break;

      case 'transposition_directe':
        total = calculateTranspositionDirecte(sectorEPCI, sectorCSV, epciData.region, levers);
        break;

      case 'sum_transposition':
        total = calculateTranspositionSum(sectorEPCI, sectorCSV, epciData, levers);
        break;

      case 'national_repartition':
        total = calculateNationalRepartition(sectorEPCI, sectorCSV, levers);
        break;

      default:
        console.error(`Unknown calculation method: ${sectorEPCI.calculation_method}`);
    }
    console.log('levers:', levers);
    if (levers.length > 0) {
      result.sectors.push({
        name: sectorEPCI.name,
        total,
        levers
      });
    }
  }

  return result;
}

/**
 * Method 1: difference_repartition
 * Sectors: residential, tertiary, transports, waste, cultures, energy branch
 * @param sectorEPCI 
 * @param sectorCSV 
 * @param region 
 * @param levers 
 * @returns 
 */
function calculateDifferenceRepartition(
  sectorEPCI: EpciData['sectors'][0],
  sectorCSV: LeverPercentages['sectors'][0],
  region: string,
  levers: { name: string; contribution: number; color?: string }[]
): number {
  const reduction = sectorEPCI.value2019 - sectorEPCI.target2030;
  let total = 0;

  for (const lever of sectorCSV.levers) {
    const percentage = lever.regional_percentages[region];
    if (percentage === undefined) {
      console.warn(`Region "${region}" not found for lever "${lever.name}"`);
      continue;
    }

    const contribution = reduction * (percentage / 100);
    levers.push({
      name: lever.name,
      contribution,
      color: lever.color || undefined
    });
    total += contribution;
  }

  return total;
}

/**
 * Method 2: transposition_directe
 * Sectors: Agriculture (all levers), UTCATF (Prairies, Artificial soils)
 * @param sectorEPCI 
 * @param sectorCSV 
 * @param region 
 * @param levers 
 * @returns 
 */
function calculateTranspositionDirecte(
  sectorEPCI: EpciData['sectors'][0],
  sectorCSV: LeverPercentages['sectors'][0],
  region: string,
  levers: { name: string; contribution: number; color?: string }[]
): number {
  let total = 0;

  for (const lever of sectorCSV.levers) {
    const percentage = lever.regional_percentages[region];
    if (percentage === undefined) {
      console.warn(`Region "${region}" not found for lever "${lever.name}"`);
      continue;
    }

    const contribution = sectorEPCI.target2030 * (percentage / 100);
    levers.push({
      name: lever.name,
      contribution,
      color: lever.color || undefined
    });
    total += contribution;
  }

  return total;
}

/**
 * Method 3: transposition_sum
 * Sectors: Industry, UTCATF (Forests + wood products)
 * @param sectorEPCI 
 * @param sectorCSV 
 * @param epciData 
 * @param levers 
 * @returns 
 */
function calculateTranspositionSum(
  sectorEPCI: EpciData['sectors'][0],
  sectorCSV: LeverPercentages['sectors'][0],
  epciData: EpciData,
  levers: { name: string; contribution: number; color?: string }[]
): number {
  if (!sectorEPCI.source_sectors) {
    console.error(`Missing source_sectors for sector "${sectorEPCI.name}"`);
    return 0;
  }

  // Calculate aggregated objective from source sectors
  let aggregatedTarget = 0;
  for (const sourceSector of sectorEPCI.source_sectors) {
    const sourceSectorData = epciData.sectors.find(s => s.name === sourceSector);
    if (sourceSectorData) {
      aggregatedTarget += sourceSectorData.target2030;
    }
  }

  let total = 0;
  for (const lever of sectorCSV.levers) {
    const percentage = lever.regional_percentages[epciData.region];
    if (percentage === undefined) {
      console.warn(`Region "${epciData.region}" not found for lever "${lever.name}"`);
      continue;
    }

    const contribution = aggregatedTarget * (percentage / 100);
    levers.push({
      name: lever.name,
      contribution,
      color: lever.color || undefined
    });
    total += contribution;
  }

  return total;
}

/**
 * Method 4: national_repartition
 * Sectors: UTCATF - Cultures only
 * @param sectorEPCI 
 * @param sectorCSV 
 * @param levers 
 * @returns 
 */
function calculateNationalRepartition(
  sectorEPCI: EpciData['sectors'][0],
  sectorCSV: LeverPercentages['sectors'][0],
  levers: { name: string; contribution: number; color?: string }[]
): number {
  const reduction = sectorEPCI.value2019 - sectorEPCI.target2030;
  let total = 0;

  for (const lever of sectorCSV.levers) {
    // For national_repartition, use the same percentage for all regions
    const percentage = Object.values(lever.regional_percentages)[0];
    if (percentage === undefined) {
      console.warn(`No percentage found for lever "${lever.name}"`);
      continue;
    }

    const contribution = reduction * (percentage / 100);
    levers.push({
      name: lever.name,
      contribution,
      color: lever.color || undefined
    });
    total += contribution;
  }

  return total;
}