import React from "react";
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Cell({letter, status}) {
    return (
        <span className={`cell ${status ?? ''}`}>{letter ?? undefined}</span>
    )
}

function Guess({children, answer}) {
    const result = checkGuess(children, answer);
    return (
        <p className="guess">
            {range(5).map((num) => <Cell key={num} letter={result?.[num].letter} status={result?.[num].status}/>)}
        </p>
    );
}

export default Guess;
