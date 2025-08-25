# Test Structure

This directory contains the test suite for the Mondrian Treemap component.

## Directory Structure

```
  src/
  ├── tests/
  │   ├── unit/
  │   │   ├── dataProcessor.test.ts
  │   │   └── MondrianTreemap.test.tsx
  │   ├── README.md
  ├── jest.config.js

```

## Test Types

### Unit Tests (`tests/unit/`)

- **Purpose**: Test individual functions and components in isolation
- **Coverage**:
    - Data processing functions (4 calculation methods)
    - Component props and rendering
    - Error handling
    - Color schemes and utilities

## Running Tests

### All Tests

```bash
npm test
```

### Specific Test Types

```bash
# Unit tests only
npm run test:unit

```

### Additional Options

```bash
# With coverage report
npm run test:coverage

# Watch mode for development
npm run test:watch
```

## Test Data

### Unit Tests

- Use mock data with minimal, controlled inputs
- Focus on edge cases and error conditions
- Mock external dependencies

## Adding New Tests

### Unit Tests

1. Create test file in `tests/unit/`
2. Follow naming convention: `[component/function].test.ts`
3. Mock external dependencies
4. Test individual functions/methods

## Test Utilities

### Mock Data

- `mockEpciData`: Sample EPCI data for testing
- `mockLeverPercentages`: Sample lever percentages for testing
- `mockCalculatedData`: Expected output from data processing

### Test Helpers

- `setupTests.ts`: Jest setup with eCharts mocking
- `jest.config.js`: Test configuration
- Color scheme validation utilities
