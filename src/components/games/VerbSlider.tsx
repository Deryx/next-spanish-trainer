import React from "react";
import Conjugations from "../../models/Conjugations";
import { SlideBrickSet } from "../ui/SlideBrickSet";

interface VerbSliderProps {
    conjugations: Conjugations;
}

const VerbSlider = ({ conjugations }: VerbSliderProps) => {
    const pronouns = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
    const pronounBricksColor = '';
    const conjugationsBricksColor = '';

    return (
        <>
            <div>
                { pronouns.map( (pronoun) => <SlideBrickSet key={`brickset-${pronoun}`} brickSetColor={pronounBricksColor} brickSetText={pronoun} /> ) }
            </div>
            <div>

            </div>
        </>
    )
};

export default VerbSlider;