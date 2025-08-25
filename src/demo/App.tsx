import React, { useState } from "react";
import { MondrianTreemap, EpciData, LeverPercentages } from "../index";
import { calculateSNBCData } from "../utils/dataProcessor";
import "./demo.css";

// Example EPCI data for Auvergne-Rhône-Alpes region
const exampleEpciData: EpciData = {
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
            name: "Tertiaire",
            value2019: 138.1,
            target2030: 61.8,
            calculation_method: "difference_repartition",
        },
        {
            name: "Agriculture",
            value2019: 32.9,
            target2030: 28.4,
            calculation_method: "transposition_directe",
        },
        {
            name: "Déchets",
            value2019: 6.92,
            target2030: 5.05,
            calculation_method: "difference_repartition",
        },
        {
            name: "UTCATF",
            value2019: -14.7,
            target2030: -12,
            calculation_method: "difference_repartition",
        },
    ],
};

// Example lever percentages data
const exampleLeverPercentages: LeverPercentages = {
    sectors: [
        {
            sector_snbc: "Transports",
            levers: [
                {
                    name: "Réduction des déplacements",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 5,
                    },
                },
                {
                    name: "Covoiturage",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 5,
                    },
                },
                {
                    name: "Vélo et transport en commun",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 8,
                    },
                },
                {
                    name: "Véhicules électriques",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 19,
                    },
                },
                {
                    name: "Efficacité véhicules privés",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 10,
                    },
                },
                {
                    name: "Bus et cars décarbonés",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 1,
                    },
                },
                {
                    name: "Fret décarboné",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 23,
                    },
                },
                {
                    name: "Efficacité logistique",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 28,
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
                    name: "Changement chaudières gaz",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 32,
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
            sector_snbc: "Tertiaire",
            levers: [
                {
                    name: "Changement chaudière fioul",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 37,
                    },
                },
                {
                    name: "Changement chaudière gaz",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 17,
                    },
                },
                {
                    name: "Sobriété et isolation",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 45,
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
                    name: "Bâtiments & Machines agricoles",
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
                    name: "Changements fertilisation",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 33.3,
                    },
                },
            ],
        },
        {
            sector_snbc: "Déchets",
            levers: [
                {
                    name: "Captage méthane ISDND",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 59,
                    },
                },
                {
                    name: "Prévention déchets",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 7,
                    },
                },
                {
                    name: "Valorisation matière",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 35,
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
                    },
                },
                {
                    name: "Gestion des haies",
                    regional_percentages: {
                        "Auvergne-Rhône-Alpes": 66,
                    },
                },
            ],
        },
    ],
};

const App: React.FC = () => {
    const [selectedSecteur, setSelectedSecteur] = useState<string>("");
    const [selectedLevier, setSelectedLevier] = useState<string>("");

    // Get calculated data for dropdowns
    const calculatedData = React.useMemo(() => {
        try {
            return calculateSNBCData(exampleEpciData, exampleLeverPercentages);
        } catch (err) {
            console.error("Error calculating SNBC data:", err);
            return { sectors: [] };
        }
    }, [exampleEpciData, exampleLeverPercentages]);

    console.log("calculatedData:", calculatedData);
    // External controls state
    const [externalSecteur, setExternalSecteur] = useState("");
    const [externalLevier, setExternalLevier] = useState("");

    // Sync external controls with MondrianTreemap
    React.useEffect(() => {
        setSelectedSecteur(externalSecteur);
        setSelectedLevier(externalLevier);
    }, [externalSecteur, externalLevier]);

    // Sync MondrianTreemap selection with external controls
    const handleleverselected = (secteur: string, levier: string) => {
        setSelectedSecteur(secteur);
        setSelectedLevier(levier);
        setExternalSecteur(secteur);
        setExternalLevier(levier);
    };
    const handleSecteurSelected = (secteur: string) => {
        setSelectedSecteur(secteur);
        setSelectedLevier("");
        setExternalSecteur(secteur);
        setExternalLevier("");
    };
    const resetZoom = () => {
        setSelectedSecteur("");
        setSelectedLevier("");
        setExternalSecteur("");
        setExternalLevier("");
    };

    return (
        <div className="demo-container">
            <div className="demo-content">
                <h1 className="demo-title">Mondrian Treemap Demo</h1>
                <p className="demo-subtitle">
                    {" "}
                    Visualisation de la trajectoire SNBC des collectivités - région
                    Auvergne-Rhône-Alpes
                </p>

                {/* External Controls */}
                <div className="demo-controls">
                    <h4>Contrôles externes</h4>
                    <div className="demo-controls-row">
                        <div className="demo-control-group">
                            <label>Secteur :</label>
                            <select
                                value={externalSecteur}
                                onChange={(e) => {
                                    setExternalSecteur(e.target.value);
                                    setExternalLevier("");
                                }}
                                className="demo-control-group select"
                            >
                                <option value="">Tous les secteurs</option>
                                {calculatedData.sectors.map((secteur: any) => (
                                    <option key={secteur.name} value={secteur.name}>
                                        {secteur.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="demo-control-group">
                            <label>Levier :</label>
                            <select
                                value={externalLevier}
                                onChange={(e) => setExternalLevier(e.target.value)}
                                className="demo-control-group select"
                                disabled={false}
                            >
                                <option value="">Tous les levers</option>
                                {externalSecteur === ""
                                    ? calculatedData.sectors.flatMap((secteur: any) =>
                                          secteur.levers.map((levier: any) => (
                                              <option
                                                  key={secteur.name + "-" + levier.name}
                                                  value={levier.name}
                                              >
                                                  {levier.name} ({secteur.name})
                                              </option>
                                          ))
                                      )
                                    : (() => {
                                          const secteur = calculatedData.sectors.find(
                                              (s: any) => s.name === externalSecteur
                                          );
                                          if (!secteur) return null;
                                          return secteur.levers.map((levier: any) => (
                                              <option
                                                  key={levier.name}
                                                  value={levier.name}
                                              >
                                                  {levier.name}
                                              </option>
                                          ));
                                      })()}
                            </select>
                        </div>
                    </div>
                    <button onClick={resetZoom} className="demo-reset-button">
                        Réinitialiser
                    </button>
                </div>

                {/* Status Display */}
                <div className="demo-status">
                    <span className="demo-status-label">État actuel :</span>
                    {externalSecteur || externalLevier ? (
                        <>
                            {externalSecteur && (
                                <span className="demo-status-value">
                                    Secteur: <strong>{externalSecteur}</strong>
                                </span>
                            )}
                            {externalLevier && (
                                <span className="demo-status-value">
                                    Levier: <strong>{externalLevier}</strong>
                                </span>
                            )}
                        </>
                    ) : (
                        <span className="demo-status-empty">Aucune sélection</span>
                    )}
                </div>

                {/* Main Mondrian Component */}
                <div className="demo-treemap-container">
                    <MondrianTreemap
                        epciData={exampleEpciData}
                        leverPercentages={exampleLeverPercentages}
                        selectedSector={selectedSecteur}
                        selectedLever={selectedLevier}
                        onLeverSelected={handleleverselected}
                        onSectorSelected={handleSecteurSelected}
                        resetZoom={resetZoom}
                        style={{ height: "700px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
