import React from "react";
import Vocabulary from "../../models/Vocabulary";
import SlideBrickSet from "../ui/SlideBrickSet";

interface WordSliderProps {
    words: Vocabulary[];
    brickWordsColor?: string;  // Optional props for colors
    brickTranslationsColor?: string;
}

const WordSlider = ({ 
    words, 
    brickWordsColor = "#defaultColor1", 
    brickTranslationsColor = "#defaultColor2" 
}: WordSliderProps) => {
    return (
        <>
            <div>
                {words.map((vocab) => (
                    <SlideBrickSet 
                        key={`word-${vocab.word}`} 
                        brickSetColor={brickWordsColor} 
                        brickSetText={vocab.word} 
                    />
                ))}
            </div>
            <div>
                {words.map((vocab) => (
                    <SlideBrickSet 
                        key={`translation-${vocab.translation}`} 
                        brickSetColor={brickTranslationsColor} 
                        brickSetText={vocab.translation} 
                    />
                ))}
            </div>
        </>
    );
};

export default WordSlider;