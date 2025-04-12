import React from "react";
import Vocabulary from "../../models/Vocabulary";
import { SlideBrickSet } from "../ui/SlideBrickSet";

interface WordSliderProps {
    words: Vocabulary[];
}

const WordSlider = ({ words }: WordSliderProps) => {
    const brickWords: string[] = [];
    const brickTranslations: string[] = [];
    const brickWordsColor: string = '';
    const brickTranslationsColor: string = '';

    return (
        <>
            <div>
                { 
                    brickWords.map((word) => <SlideBrickSet key={`brickSet-${word}`} brickSetColor={brickWordsColor} brickSetText={word} />)
                }
            </div>
            <div>
                { 
                    brickTranslations.map((translation) => <SlideBrickSet key={`brickSet-${translation}`} brickSetColor={brickTranslationsColor} brickSetText={translation} />) 
                }
            </div>
        </>
    )
};

export default WordSlider;
