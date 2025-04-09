import React, { FC } from 'react';
import Conjugations from '../../models/Conjugations'

interface IVerbCardProps {
    infinitive: string;
    translation: string;
    pronunciation: string;
    tense: string;
    conjugations: Conjugations;
}

const VerbCard = (
    (props: IVerbCardProps) => {
        const {
            infinitive, 
            translation, 
            pronunciation, 
            tense,
            conjugations 
        } = props;
    
        return (
            <>
                <section>
                    <h3>{ infinitive }</h3>
                    <div>{ translation }</div>
                    <div>{ pronunciation }</div>
                </section>
                <section>
                    <h3>{ tense } tense</h3>
                    <dl>
                        <dt>Yo: </dt>
                        <dd>{ conjugations.getYo() }</dd>
                        <dt>Tu: </dt>
                        <dd>{ conjugations.getTu() }</dd>
                        <dt>El/Ella/Usted: </dt>
                        <dd>{ conjugations.getEl() }</dd>
                        <dt>Nosotros: </dt>
                        <dd>{ conjugations.getNosotros() }</dd>
                        <dt>Vosotros: </dt>
                        <dd>{ conjugations.getVosotros() }</dd>
                        <dt>Ellos/Ellas/Ustedes: </dt>
                        <dd>{ conjugations.getEllos() }</dd>
                    </dl>
                </section>
            </>
        )
    }
)

export default VerbCard;