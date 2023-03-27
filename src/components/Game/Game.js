import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [gameStatus, setGameStatus] = useState('running')
    const [results, setResults] = useState([])

    const handleAddGuess = (guess) => {
        const nextResults = [...results, guess]
        setResults(nextResults);
        if (guess === answer) {
            setGameStatus('won');
        } else if(nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost')
        }
    }

    return (
        <>
            <GuessResults results={results} answer={answer}/>
            <GuessForm gameStatus={gameStatus} handleAddGuess={handleAddGuess}/>
            {gameStatus === 'won' && <HappyBanner numOfGuesses={results.length} />}
            {gameStatus === 'lost' && <SadBanner answer={answer} />}
        </>

    );
}

export default Game;
