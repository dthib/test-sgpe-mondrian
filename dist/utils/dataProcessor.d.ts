import { EpciData, LeverPercentages, CalculatedData } from '../types';
export declare const SECTOR_COLORS: {
    [key: string]: string;
};
export declare const LEVER_COLORS: string[];
/**
 * Calculate data according to the 4 SNBC calculation methods
 */
export declare function calculateSNBCData(epciData: EpciData, leverPercentages: LeverPercentages): CalculatedData;
