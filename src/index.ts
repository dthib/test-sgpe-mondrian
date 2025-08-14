// Main component export
export { default as MondrianTreemap } from './components/MondrianTreemap';

// Type exports
export type {
  EpciData,
  LeverPercentages,
  CalculatedData,
  MondrianProps,
  TreemapDataItem
} from './types';

// Utility exports
export { calculateSNBCData, SECTOR_COLORS, LEVER_COLORS } from './utils/dataProcessor';
