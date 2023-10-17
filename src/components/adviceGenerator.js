import React from "react";
import './adviceGenerator.css'
import divisor from '../images/pattern-divider-desktop.svg';
import divisorEnding from '../images/icon-dice.svg'

function adviceGenerator() {
    return (
        <div className="divAdviceGenerator">
            <div className="adviceNumber">Advice #117</div>
            <div className="advice">"O rato roeu a roupa do rei de roma."</div>
            <div className="divisors">
                <img src={ divisor } alt="divisor" className="divisor"/>               
                <div className="divisorEnd">
                    <img src={ divisorEnding } alt="divisor"/>
                </div>
            </div>
        </div>
    );
}

export default adviceGenerator;