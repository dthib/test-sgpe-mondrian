import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import { MondrianProps } from "../types";
import { calculateSNBCData, SECTOR_COLORS } from "../utils/dataProcessor";
import "../styles/index.css";

const defaultColor = "#74B9FF";

export const MondrianTreemap: React.FC<MondrianProps> = ({
    epciData,
    leverPercentages,
    selectedSector,
    selectedLever,
    onLeverSelected,
    onSectorSelected,
    resetZoom,
    className = "",
    style = {},
}) => {
    const [drillDownData, setDrillDownData] = useState<any[]>([]);
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

    // Build tree data
    const buildTreeMapData = useCallback(() => {
        if (currentView === "sector" && drillDownData.length > 0) {
            return drillDownData;
        }
        return calculatedData.sectors.map((sector) => ({
            name: sector.name,
            value: Math.abs(sector.total),
            realValue: sector.total,
            itemStyle: { color: sectorColors[sector.name] || defaultColor },
            children: sector.levers.map((lever) => ({
                name: lever.name,
                value: Math.abs(lever.contribution),
                realValue: lever.contribution,
                sector: sector.name,
                lever: lever.name,
                contribution: lever.contribution,
                color: lever.color || sectorColors[sector.name] || defaultColor,
                itemStyle: {
                    color: lever.color || sectorColors[sector.name] || defaultColor,
                },
            })),
        }));
    }, [calculatedData, currentView, drillDownData, sectorColors]);

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

    // Click handling
    const handleChartClick = useCallback(
        (params: any) => {
            if (params?.data?.sector && params?.data?.lever) {
                const sector = params.data.sector as string;
                const lever = params.data.lever as string;
                const contribution = params.data.contribution as number;
                const sectorData = calculatedData.sectors.find(
                    (s) => s.name === sector
                );
                if (!sectorData) return;

                setDrillDownData([
                    {
                        name: sector,
                        value: Math.abs(sectorData.total),
                        realValue: sectorData.total,
                        children: sectorData.levers.map((l) => ({
                            name: l.name,
                            value: Math.abs(l.contribution),
                            realValue: l.contribution,
                            sector,
                            lever: l.name,
                            contribution: l.contribution,
                            color: l.color || sectorColors[sector] || defaultColor,
                            selected: l.name === lever,
                        })),
                    },
                ]);
                setCurrentView("sector");
                onLeverSelected?.(sector, lever, contribution);
            } else if (params?.data?.name && !params?.data?.sector) {
                const sector = params.data.name as string;
                const sectorData = calculatedData.sectors.find(
                    (s) => s.name === sector
                );
                setDrillDownData([
                    {
                        name: sector,
                        value: Math.abs(sectorData?.total ?? 0),
                        realValue: sectorData?.total ?? 0,
                        children:
                            sectorData?.levers.map((l) => ({
                                name: l.name,
                                value: Math.abs(l.contribution),
                                realValue: l.contribution,
                                sector,
                                lever: l.name,
                                contribution: l.contribution,
                                color: l.color || sectorColors[sector] || defaultColor,
                            })) ?? [],
                    },
                ]);
                setCurrentView("sector");
                onSectorSelected?.(sector);
            }
        },
        [calculatedData, onLeverSelected, onSectorSelected, sectorColors]
    );

    // Chart options
    const buildChartOptions = useCallback(() => {
        const treeData = buildTreeMapData();

        function applyCustomItemStyle(nodes: any[]): any[] {
            return nodes.map((node) => {
                if (node.children) {
                    return { ...node, children: applyCustomItemStyle(node.children) };
                }
                if (node.selected) {
                    return {
                        ...node,
                        itemStyle: {
                            ...node.itemStyle,
                            borderColor: "#90caf9",
                            borderWidth: 1,
                            shadowColor: "#90caf9",
                            shadowBlur: 12,
                        },
                        opacity: 1,
                    };
                }
                return { ...node, opacity: 0.5 };
            });
        }

        let styledTreeData = treeData;
        if (
            treeData.length === 1 &&
            treeData[0].children &&
            treeData[0].children.some((c: any) => c.selected)
        ) {
            styledTreeData = [
                {
                    ...treeData[0],
                    children: applyCustomItemStyle(treeData[0].children),
                },
            ];
        }

        return {
            tooltip: {
                formatter: function (info: any) {
                    const data = info.data;
                    let html = "";
                    if (data.sector && data.lever) {
                        html += `<strong>${data.sector}</strong><br/>`;
                        html += `<strong>${data.lever}</strong><br/>`;
                        const target =
                            data.realValue !== undefined
                                ? data.realValue
                                : data.contribution;
                        if (target !== undefined && data.realValue !== 0) {
                            html += `Target: ${target.toFixed(1)} ktCO₂e`;
                        }
                    } else {
                        html += `<strong>${data.name}</strong><br/>`;
                        if (data.realValue !== undefined) {
                            html += `Total: ${data.realValue.toFixed(1)} ktCO₂e`;
                        }
                    }
                    return html;
                },
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "#ccc",
                borderWidth: 1,
                textStyle: { color: "#333" },
            },
            series: [
                {
                    type: "treemap",
                    data: styledTreeData,
                    roam: false,
                    nodeClick: "drillDown",
                    label: {
                        show: true,
                        formatter: function (params: any) {
                            const data = params.data;
                            if (data.sector && data.lever) {
                                const val = (
                                    data.realValue !== undefined
                                        ? data.realValue
                                        : data.contribution
                                ) as number;
                                return `${data.lever}\n\n${val.toFixed(1)} ktCO₂e`;
                            }
                            const val = (
                                data.realValue !== undefined
                                    ? data.realValue
                                    : data.value
                            ) as number;
                            return `${data.name}\n\n${val.toFixed(1)} ktCO₂e`;
                        },
                        fontSize: 12,
                        color: "#111",
                    },
                    breadcrumb: {
                        show: false, // hide breadcrumb by default temporary, to be implemented in the future
                    },
                    itemStyle: { borderColor: "#fff", borderWidth: 2 },
                    levels: [
                        {
                            itemStyle: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                gapWidth: 2,
                            },
                        },
                        {
                            itemStyle: {
                                borderColor: "#fff",
                                borderWidth: 1,
                                gapWidth: 1,
                            },
                        },
                    ],
                },
            ],
        } as any;
    }, [buildTreeMapData]);

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

            <ReactECharts
                option={buildChartOptions()}
                className={`mondrian-treemap-chart ${currentView !== "overview" ? "with-breadcrumb" : ""}`}
                style={{ height: "100%", width: "100%" }}
                onEvents={{
                    click: handleChartClick,
                }}
            />
        </div>
    );
};

export default MondrianTreemap;
