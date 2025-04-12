import React from "react";
import Conjugations from "../../models/Conjugations";
import SlideBrickSet from "../ui/SlideBrickSet";

interface VerbSliderProps {
    conjugations: Conjugations;
    pronounBricksColor?: string;
    conjugationsBricksColor?: string;
}

const PRONOUNS = ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'] as const;

const VerbSlider = ({ 
    conjugations, 
    pronounBricksColor = "#defaultColor",  // Default green for pronouns
    conjugationsBricksColor = "#defaultColor"  // Default blue for conjugations
}: VerbSliderProps) => {
    return (
        <div className="verb-slider-container">
            {/* Pronouns Row */}
            <div className="pronouns-row">
                {PRONOUNS.map((pronoun) => (
                    <SlideBrickSet 
                        key={`pronoun-${pronoun}`} 
                        brickSetColor={pronounBricksColor} 
                        brickSetText={pronoun} 
                    />
                ))}
            </div>

            {/* Conjugations Row */}
            <div className="conjugations-row">
                {Object.values(conjugations).map((conjugation, index) => (
                    <SlideBrickSet 
                        key={`conjugation-${PRONOUNS[index]}`} 
                        brickSetColor={conjugationsBricksColor} 
                        brickSetText={conjugation} 
                    />
                ))}
            </div>
        </div>
    );
};

export default VerbSlider;