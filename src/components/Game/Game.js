import React, { useEffect, useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
