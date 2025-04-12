import React from "react";
import Conjugations from "../../models/Conjugations";
import { SlideBrickSet } from "../ui/SlideBrickSet";

interface VerbSliderProps {
    conjugations: Conjugations;
}

const VerbSlider = ({ conjugations }: VerbSliderProps) => {
    const brickPronouns: string[] = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
    const brickConjugations: string[] = [];
    const pronounBricksColor = '';
    const conjugationsBricksColor = '';

    return (
        <>
            <div>
                { brickPronouns.map( (pronoun) => <SlideBrickSet key={`brickSet-${pronoun}`} brickSetColor={pronounBricksColor} brickSetText={pronoun} /> ) }
            </div>
            <div>
                { brickConjugations.map( (conjugation) => <SlideBrickSet key={`brickSet-${conjugation}`} brickSetColor={conjugationsBricksColor} brickSetText={conjugation} /> ) }
            </div>
        </>
    )
};

export default VerbSlider;