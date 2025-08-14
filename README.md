# Mondrian Treemap

A standalone React component for visualizing SNBC (Stratégie Nationale Bas-Carbone) trajectory data using interactive treemaps.

## Features

- **Interactive Treemap Visualization**: Hierarchical display of sectors and levers with proportional sizing
- **4 Calculation Methods**: Implements all SNBC calculation methodologies
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Features**: Click events, tooltips, and external selection support
- **Custom Breadcrumb Navigation**: Proper navigation with selected lever display
- **TypeScript Support**: Full type safety with comprehensive interfaces
- **Standalone Package**: Can be installed as an NPM package
- **CSS Modularity**: Separated styles for easy customization

## Installation

```bash
npm install mondrian-treemap
```

## Quick Start

```tsx
import React from 'react';
import { MondrianTreemap, EpciData, LeverPercentages } from 'mondrian-treemap';

const App = () => {
  const epciData: EpciData = {
    region: "Auvergne-Rhône-Alpes",
    sectors: [
      {
        name: "Transports",
        value2019: 509.3,
        target2030: 369.6,
        calculation_method: "difference_repartition"
      }
      // ... more sectors
    ]
  };

  const leverPercentages: LeverPercentages = {
    sectors: [
      {
        sector_snbc: "Transports",
        levers: [
          {
            name: "Véhicules électriques",
            regional_percentages: {
              "Auvergne-Rhône-Alpes": 19
            }
          }
          // ... more levers
        ]
      }
    ]
  };

  const handleLeverSelected = (sector: string, lever: string, contribution: number) => {
    console.log(`Selected: ${sector} - ${lever} (${contribution} ktCO₂e)`);
  };

  return (
    <MondrianTreemap
      epciData={epciData}
      leverPercentages={leverPercentages}
      onLeverSelected={handleLeverSelected}
      style={{ height: '600px' }}
    />
  );
};
```

## Data Structure

### EPCI Data (`EpciData`)

```typescript
interface EpciData {
  region: string;
  sectors: {
    name: string;
    value2019: number;
    target2030: number;
    calculation_method: 'difference_repartition' | 'transposition_directe' | 'sum_transposition' | 'national_repartition';
    source_sectors?: string[];
  }[];
}
```

### Lever Percentages (`LeverPercentages`)

```typescript
interface LeverPercentages {
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
```

## Calculation Methods

### 1. difference_repartition
- **Sectors**: Transports, Résidentiel, Tertiaire, Déchets, Cultures, Branche énergie
- **Formula**: `reduction_secteur = valeur2019 - objectif2030`
- **Lever Contribution**: `contribution_levier = reduction_secteur × (pourcentage_regional / 100)`

### 2. transposition_directe
- **Sectors**: Agriculture (all levers), UTCATF (Prairies, Sols artificiels)
- **Formula**: `contribution_levier = objectif2030 × (pourcentage_regional / 100)`

### 3. sum_transposition
- **Sectors**: Industrie, UTCATF (Forêts + produits bois)
- **Formula**: 
  - `objectif_agrege = somme(objectifs_2030_secteurs_source)`
  - `contribution_levier = objectif_agrege × (pourcentage_regional / 100)`

### 4. national_repartition
- **Sectors**: UTCATF - Cultures only
- **Formula**: `contribution_levier = reduction_cultures × (pourcentage_regional / 100)`

## Component Props

```typescript
interface MondrianProps {
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
```

## API Reference

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `epciData` | `EpciData` | Yes | EPCI data with sectors and objectives |
| `leverPercentages` | `LeverPercentages` | Yes | Lever percentages by region |
| `selectedSector` | `string` | No | Externally selected sector |
| `selectedLever` | `string` | No | Externally selected lever |
| `onLeverSelected` | `function` | No | Callback when lever is clicked |
| `onSectorSelected` | `function` | No | Callback when sector is selected |
| `resetZoom` | `function` | No | Callback to reset zoom level |
| `className` | `string` | No | Additional CSS classes |
| `style` | `CSSProperties` | No | Additional inline styles |

### Events

- **Click on Lever**: Triggers `onLeverSelected` with sector, lever name, and contribution value
- **Click on Sector**: Triggers `onSectorSelected` with sector name
- **Hover**: Shows tooltip with sector, lever, and objective information
- **Breadcrumb Navigation**: Custom navigation for zoom levels with proper lever display

## Demo

To run the demo:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Development

### Project Structure

```
src/
├── components/
│   └── MondrianTreemap.tsx      # Main component
├── types/
│   └── index.ts                 # TypeScript interfaces
├── utils/
│   └── dataProcessor.ts         # Data calculation logic
├── styles/
│   ├── index.css               # Main styles
│   ├── breadcrumb.css          # Breadcrumb styles
│   └── treemap.css             # Treemap styles
├── demo/
│   ├── App.tsx                 # Demo application
│   ├── index.tsx               # Demo entry point
│   └── demo.css                # Demo styles
└── index.ts                    # Main exports
```

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## Styling

The component uses modular CSS with the following classes:

### Main Component
- `.mondrian-treemap` - Main container
- `.mondrian-treemap-container` - Component wrapper
- `.mondrian-treemap-chart` - Chart container

### Breadcrumb
- `.mondrian-breadcrumb` - Breadcrumb container
- `.mondrian-breadcrumb-item` - Breadcrumb item
- `.mondrian-breadcrumb-item.clickable` - Clickable breadcrumb item
- `.mondrian-breadcrumb-separator` - Separator between items

### Error States
- `.mondrian-error` - Error container
- `.mondrian-error-hint` - Error hint text

## Dependencies

- **React**: ^18.0.0 || ^19.0.0
- **eCharts**: ^5.6.0
- **TypeScript**: ^5.9.2


## License



## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For issues and questions, please open an issue on the Gitlab repository.

