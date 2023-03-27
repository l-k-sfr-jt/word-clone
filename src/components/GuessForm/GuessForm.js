import React, {useState} from "react";

function GuessForm({gameStatus, handleAddGuess}) {
    const [guessValue, setGuessValue] = useState('');
    const onChangeInput = (inputValue) => {
        setGuessValue(inputValue.toUpperCase())
    }
    const onSubmit = (event) => {
        event.preventDefault();
        handleAddGuess(guessValue);
        setGuessValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" value={guessValue}
                   pattern="[A-Z]{5}"
                   disabled={gameStatus !== 'running'}
                   onChange={(event) => onChangeInput(event.target.value)}
                   title="5 letter word"
            />
        </form>
    );
}

export default GuessForm;
