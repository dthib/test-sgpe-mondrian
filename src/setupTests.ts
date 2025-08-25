// Jest setup file for React testing
import "@testing-library/jest-dom";
import React from "react";

// Mock eCharts to avoid DOM issues in tests
jest.mock("echarts-for-react", () => {
    return function MockReactECharts({ option, onEvents, ...props }: any) {
        return React.createElement("div", {
            "data-testid": "echarts-mock",
            "data-option": JSON.stringify(option),
            onClick: () => {
                if (onEvents?.click) {
                    onEvents.click({
                        data: {
                            name: "Test Sector",
                            sector: "Test Sector",
                            lever: "Test Lever",
                            contribution: 10,
                        },
                    });
                }
            },
            ...props,
        });
    };
});

// Mock CSS imports
jest.mock("./styles/index.css", () => ({}));
jest.mock("./styles/treemap.css", () => ({}));
jest.mock("./styles/breadcrumb.css", () => ({}));
