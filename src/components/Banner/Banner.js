import React from "react";

function Banner({ check, listOfGuesses, answer }) {
  if (check) {
    const allCorrect = check.every((char) => char.status === "correct");
    const amountOfGuesses = listOfGuesses.length;

    if (allCorrect) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {amountOfGuesses} guesses</strong>.
          </p>
        </div>
      );
    } else {
      if (amountOfGuesses === 6) {
        return (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        );
      }
    }
  }
}

export default Banner;
