import {
    calculateSNBCData,
    SECTOR_COLORS,
    LEVER_COLORS,
} from "../../utils/dataProcessor";
import { EpciData, LeverPercentages } from "../../types";

describe("dataProcessor", () => {
    describe("SECTOR_COLORS", () => {
        it("should have colors for all expected sectors", () => {
            const expectedSectors = [
                "Transports",
                "Résidentiel",
                "Tertiaire",
                "Industrie",
                "Agriculture",
                "Déchets",
                "UTCATF",
                "Cultures",
            ];

            expectedSectors.forEach((sector) => {
                expect(SECTOR_COLORS[sector]).toBeDefined();
                expect(typeof SECTOR_COLORS[sector]).toBe("string");
            });
        });
    });

    describe("LEVER_COLORS", () => {
        it("should be an array of color strings", () => {
            expect(Array.isArray(LEVER_COLORS)).toBe(true);
            LEVER_COLORS.forEach((color) => {
                expect(typeof color).toBe("string");
                expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
            });
        });
    });

    describe("calculateSNBCData", () => {
        const mockEpciData: EpciData = {
            region: "Auvergne-Rhône-Alpes",
            sectors: [
                {
                    name: "Transports",
                    value2019: 509.3,
                    target2030: 369.6,
                    calculation_method: "difference_repartition",
                },
                {
                    name: "Résidentiel",
                    value2019: 229.7,
                    target2030: 132,
                    calculation_method: "difference_repartition",
                },
                {
                    name: "Industrie",
                    value2019: 144.1,
                    target2030: 71.6,
                    calculation_method: "sum_transposition",
                    source_sectors: ["Industrie"],
                },
                {
                    name: "Agriculture",
                    value2019: 32.9,
                    target2030: 28.4,
                    calculation_method: "transposition_directe",
                },
                {
                    name: "UTCATF",
                    value2019: -14.7,
                    target2030: -12,
                    calculation_method: "national_repartition",
                },
            ],
        };

        const mockLeverPercentages: LeverPercentages = {
            sectors: [
                {
                    sector_snbc: "Transports",
                    levers: [
                        {
                            name: "Véhicules électriques",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 19,
                            },
                        },
                        {
                            name: "Fret décarboné",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 23,
                            },
                        },
                    ],
                },
                {
                    sector_snbc: "Résidentiel",
                    levers: [
                        {
                            name: "Changement chaudières fioul",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 43,
                            },
                        },
                        {
                            name: "Sobriété bâtiments",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 25,
                            },
                        },
                    ],
                },
                {
                    sector_snbc: "Industrie",
                    levers: [
                        {
                            name: "Production industrielle",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 100,
                            },
                        },
                    ],
                },
                {
                    sector_snbc: "Agriculture",
                    levers: [
                        {
                            name: "Bâtiments & Machines",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 33.3,
                            },
                        },
                        {
                            name: "Élevage durable",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 33.3,
                            },
                        },
                        {
                            name: "Fertilisation azotée",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 33.4,
                            },
                        },
                    ],
                },
                {
                    sector_snbc: "UTCATF",
                    levers: [
                        {
                            name: "Pratiques stockantes",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 34,
                                "Île-de-France": 34,
                            },
                        },
                        {
                            name: "Gestion des haies",
                            regional_percentages: {
                                "Auvergne-Rhône-Alpes": 66,
                                "Île-de-France": 66,
                            },
                        },
                    ],
                },
            ],
        };

        it("should calculate data for all sectors", () => {
            const result = calculateSNBCData(mockEpciData, mockLeverPercentages);

            expect(result.sectors).toHaveLength(5);
            expect(result.sectors.map((s) => s.name)).toEqual([
                "Transports",
                "Résidentiel",
                "Industrie",
                "Agriculture",
                "UTCATF",
            ]);
        });

        it("should handle missing sectors gracefully", () => {
            const epciDataWithMissingSector: EpciData = {
                ...mockEpciData,
                sectors: [
                    ...mockEpciData.sectors,
                    {
                        name: "SecteurInexistant",
                        value2019: 100,
                        target2030: 50,
                        calculation_method: "difference_repartition" as const,
                    },
                ],
            };

            const result = calculateSNBCData(
                epciDataWithMissingSector,
                mockLeverPercentages
            );

            // Should still process valid sectors
            expect(result.sectors).toHaveLength(5);
            expect(
                result.sectors.find((s) => s.name === "SecteurInexistant")
            ).toBeUndefined();
        });

        it("should handle missing regions gracefully", () => {
            const leverPercentagesWithMissingRegion = {
                sectors: [
                    {
                        sector_snbc: "Transports",
                        levers: [
                            {
                                name: "Véhicules électriques",
                                regional_percentages: {
                                    RégionInexistante: 19,
                                },
                            },
                        ],
                    },
                ],
            };

            const result = calculateSNBCData(
                mockEpciData,
                leverPercentagesWithMissingRegion
            );

            // Should skip sectors with missing regions
            expect(result.sectors).toHaveLength(0);
        });

        describe("Method 1: difference_repartition", () => {
            it("should calculate correct contributions for Transports", () => {
                const result = calculateSNBCData(mockEpciData, mockLeverPercentages);
                const transportsSector = result.sectors.find(
                    (s) => s.name === "Transports"
                );

                expect(transportsSector).toBeDefined();
                expect(transportsSector!.levers).toHaveLength(2);

                // Reduction: 509.3 - 369.6 = 139.7
                const expectedReduction = 509.3 - 369.6;

                const vehiculesElectriques = transportsSector!.levers.find(
                    (l) => l.name === "Véhicules électriques"
                );
                expect(vehiculesElectriques!.contribution).toBeCloseTo(
                    expectedReduction * 0.19,
                    1
                );

                const fretDecarbone = transportsSector!.levers.find(
                    (l) => l.name === "Fret décarboné"
                );
                expect(fretDecarbone!.contribution).toBeCloseTo(
                    expectedReduction * 0.23,
                    1
                );

                expect(transportsSector!.total).toBeCloseTo(
                    vehiculesElectriques!.contribution + fretDecarbone!.contribution,
                    1
                );
            });

            it("should calculate correct contributions for Résidentiel", () => {
                const result = calculateSNBCData(mockEpciData, mockLeverPercentages);
                const residentielSector = result.sectors.find(
                    (s) => s.name === "Résidentiel"
                );

                expect(residentielSector).toBeDefined();
                expect(residentielSector!.levers).toHaveLength(2);

                // Reduction: 229.7 - 132 = 97.7
                const expectedReduction = 229.7 - 132;

                const chaudieresFioul = residentielSector!.levers.find(
                    (l) => l.name === "Changement chaudières fioul"
                );
                expect(chaudieresFioul!.contribution).toBeCloseTo(
                    expectedReduction * 0.43,
                    1
                );

                const sobriete = residentielSector!.levers.find(
                    (l) => l.name === "Sobriété bâtiments"
                );
                expect(sobriete!.contribution).toBeCloseTo(expectedReduction * 0.25, 1);
            });
        });

        describe("Method 2: transposition_directe", () => {
            it("should calculate correct contributions for Agriculture", () => {
                const result = calculateSNBCData(mockEpciData, mockLeverPercentages);
                const agricultureSector = result.sectors.find(
                    (s) => s.name === "Agriculture"
                );

                expect(agricultureSector).toBeDefined();
                expect(agricultureSector!.levers).toHaveLength(3);

                // Target: 28.4
                const expectedTarget = 28.4;

                const batiments = agricultureSector!.levers.find(
                    (l) => l.name === "Bâtiments & Machines"
                );
                expect(batiments!.contribution).toBeCloseTo(expectedTarget * 0.333, 1);

                const elevage = agricultureSector!.levers.find(
                    (l) => l.name === "Élevage durable"
                );
                expect(elevage!.contribution).toBeCloseTo(expectedTarget * 0.333, 1);

                const fertilisation = agricultureSector!.levers.find(
                    (l) => l.name === "Fertilisation azotée"
                );
                expect(fertilisation!.contribution).toBeCloseTo(
                    expectedTarget * 0.334,
                    1
                );

                expect(agricultureSector!.total).toBeCloseTo(expectedTarget, 1);
            });
        });

        describe("Method 3: sum_transposition", () => {
            it("should calculate correct contributions for Industrie", () => {
                const result = calculateSNBCData(mockEpciData, mockLeverPercentages);
                const industrieSector = result.sectors.find(
                    (s) => s.name === "Industrie"
                );

                expect(industrieSector).toBeDefined();
                expect(industrieSector!.levers).toHaveLength(1);

                // Aggregated target: 71.6 (from source_sectors)
                const expectedTarget = 71.6;

                const production = industrieSector!.levers.find(
                    (l) => l.name === "Production industrielle"
                );
                expect(production!.contribution).toBeCloseTo(expectedTarget, 1);

                expect(industrieSector!.total).toBeCloseTo(expectedTarget, 1);
            });

            it("should handle missing source_sectors", () => {
                const epciDataWithoutSourceSectors = {
                    ...mockEpciData,
                    sectors: mockEpciData.sectors.map((s) =>
                        s.name === "Industrie" ? { ...s, source_sectors: undefined } : s
                    ),
                };

                const result = calculateSNBCData(
                    epciDataWithoutSourceSectors,
                    mockLeverPercentages
                );
                const industrieSector = result.sectors.find(
                    (s) => s.name === "Industrie"
                );

                // Should skip sectors with missing source_sectors
                expect(industrieSector).toBeUndefined();
            });
        });

        describe("Method 4: national_repartition", () => {
            it("should calculate correct contributions for UTCATF", () => {
                const result = calculateSNBCData(mockEpciData, mockLeverPercentages);
                const utcatfSector = result.sectors.find((s) => s.name === "UTCATF");

                expect(utcatfSector).toBeDefined();
                expect(utcatfSector!.levers).toHaveLength(2);

                // Change: -14.7 - (-12) = -2.7
                const expectedChange = -14.7 - -12;

                const pratiques = utcatfSector!.levers.find(
                    (l) => l.name === "Pratiques stockantes"
                );
                expect(pratiques!.contribution).toBeCloseTo(expectedChange * 0.34, 1);

                const haies = utcatfSector!.levers.find(
                    (l) => l.name === "Gestion des haies"
                );
                expect(haies!.contribution).toBeCloseTo(expectedChange * 0.66, 1);

                expect(utcatfSector!.total).toBeCloseTo(expectedChange, 1);
            });
        });

        describe("Error handling", () => {
            it("should handle unknown calculation method", () => {
                const epciDataWithUnknownMethod = {
                    ...mockEpciData,
                    sectors: mockEpciData.sectors.map((s) =>
                        s.name === "Transports"
                            ? { ...s, calculation_method: "unknown_method" as any }
                            : s
                    ),
                };

                const result = calculateSNBCData(
                    epciDataWithUnknownMethod,
                    mockLeverPercentages
                );

                // Should skip sectors with unknown methods
                expect(
                    result.sectors.find((s) => s.name === "Transports")
                ).toBeUndefined();
            });

            it("should handle empty lever percentages", () => {
                const emptyLeverPercentages: LeverPercentages = {
                    sectors: [],
                };

                const result = calculateSNBCData(mockEpciData, emptyLeverPercentages);

                expect(result.sectors).toHaveLength(0);
            });

            it("should handle empty EPCI data", () => {
                const emptyEpciData: EpciData = {
                    region: "Auvergne-Rhône-Alpes",
                    sectors: [],
                };

                const result = calculateSNBCData(emptyEpciData, mockLeverPercentages);

                expect(result.sectors).toHaveLength(0);
            });
        });
    });
});
