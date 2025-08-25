export interface EpciData {
    region: string;
    sectors: {
        name: string;
        value2019: number;
        target2030: number;
        calculation_method: "difference_repartition" | "transposition_directe" | "sum_transposition" | "national_repartition";
        source_sectors?: string[];
    }[];
}
export interface LeverPercentages {
    sectors: {
        sector_snbc: string;
        levers: {
            name: string;
            regional_percentages: {
                [region: string]: number;
            };
            color?: string;
        }[];
    }[];
}
export interface CalculatedData {
    sectors: {
        name: string;
        total: number;
        levers: {
            name: string;
            contribution: number;
            color?: string;
        }[];
    }[];
}
export interface MondrianProps {
    epciData: EpciData;
    leverPercentages: LeverPercentages;
    selectedSector?: string;
    selectedLever?: string;
    onLeverSelected?: (sector: string, lever: string, contribution: number) => void;
    onSectorSelected?: (sector: string) => void;
    resetZoom?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface TreemapDataItem {
    name: string;
    value: number;
    itemStyle: {
        color: string;
    };
    sector: string;
    contribution: number;
    tooltip: {
        formatter: () => string;
    };
}
