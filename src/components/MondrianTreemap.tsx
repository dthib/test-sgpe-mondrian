import React, { useEffect, useMemo, useState } from "react";
import { MondrianProps } from "../types";
import { calculateSNBCData, SECTOR_COLORS } from "../utils/dataProcessor";
import "../styles/index.css";

const defaultColor = "#74B9FF";

export const MondrianTreemap: React.FC<MondrianProps> = ({
    epciData,
    leverPercentages,
    selectedSector,
    selectedLever,
    resetZoom,
    className = "",
    style = {},
}) => {
    const [_, setDrillDownData] = useState<any[]>([]);
    const [currentView, setCurrentView] = useState<"overview" | "sector" | "lever">(
        "overview"
    );
    const [error, setError] = useState<string | null>(null);

    const sectorColors = SECTOR_COLORS;

    // Process data
    const calculatedData = useMemo(() => {
        try {
            setError(null);
            return calculateSNBCData(epciData, leverPercentages);
        } catch (err: any) {
            setError(err?.message ?? "Unknown error");
            console.error("Error processing Mondrian data:", err);
            return { sectors: [] };
        }
    }, [epciData, leverPercentages]);

    // External selection sync
    useEffect(() => {
        if (!selectedSector) {
            setCurrentView("overview");
            setDrillDownData([]);
            return;
        }
        const sectorData = calculatedData.sectors.find(
            (s) => s.name === selectedSector
        );
        if (!sectorData) return;

        if (selectedLever) {
            setDrillDownData([
                {
                    name: selectedSector,
                    value: Math.abs(sectorData.total),
                    realValue: sectorData.total,
                    children: sectorData.levers.map((l) => ({
                        name: l.name,
                        value: Math.abs(l.contribution),
                        realValue: l.contribution,
                        sector: selectedSector,
                        lever: l.name,
                        contribution: l.contribution,
                        color: l.color || sectorColors[selectedSector] || defaultColor,
                        selected: l.name === selectedLever,
                    })),
                },
            ]);
            setCurrentView("sector");
        } else {
            setDrillDownData([
                {
                    name: selectedSector,
                    value: Math.abs(sectorData.total),
                    realValue: sectorData.total,
                    children: sectorData.levers.map((l) => ({
                        name: l.name,
                        value: Math.abs(l.contribution),
                        realValue: l.contribution,
                        sector: selectedSector,
                        lever: l.name,
                        contribution: l.contribution,
                        color: l.color || sectorColors[selectedSector] || defaultColor,
                    })),
                },
            ]);
            setCurrentView("sector");
        }
    }, [selectedSector, selectedLever, calculatedData, sectorColors]);


    if (error) {
        return (
            <div className="mondrian-error">
                <h4>Data processing error</h4>
                <p>{error}</p>
                <p className="mondrian-error-hint">
                    Please verify the mapping between EPCI sectors and lever
                    percentages.
                </p>
            </div>
        );
    }

    return (
        <div
            className={`mondrian-treemap mondrian-treemap-container ${className}`}
            style={style}
        >
            {/* Custom Breadcrumb */}
            {(currentView === "sector" || selectedSector) && (
                <div className="mondrian-breadcrumb">
                    <span
                        className="mondrian-breadcrumb-item clickable"
                        onClick={() => {
                            setCurrentView("overview");
                            setDrillDownData([]);
                            resetZoom?.();
                        }}
                    >
                        Overview
                    </span>
                    <span className="mondrian-breadcrumb-separator">›</span>
                    <span className="mondrian-breadcrumb-item">{selectedSector}</span>
                    {selectedLever && (
                        <>
                            <span className="mondrian-breadcrumb-separator">›</span>
                            <span className="mondrian-breadcrumb-item">
                                {selectedLever}
                            </span>
                        </>
                    )}
                </div>
            )}

            <div>Mondrian Treemap</div>
        </div>
    );
};

export default MondrianTreemap;
