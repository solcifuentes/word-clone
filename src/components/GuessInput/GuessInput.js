import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(word);
    console.log({ word });
    setWord("");
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={word}
        onChange={(event) => setWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
