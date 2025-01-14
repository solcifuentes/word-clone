import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guesses[num]}
          answer={answer}
          listOfGuesses={guesses}
        />
      ))}

      {/* {guesses.map((guess, index) => (
        <Guess key={index} value={guess} />
      ))} */}
    </div>
  );
}

export default GuessResult;
