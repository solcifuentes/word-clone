import React from "react";

function GuessResult({ guesses }) {
  console.log(guesses);
  return (
    <>
      <div className="guess-results">
        {guesses.map(({ value, id }) => (
          <p key={id} className="guess">
            {value}
          </p>
        ))}
      </div>
      <div className="guess-results">
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
        <p className="guess">
          <span className="cell">F</span>
          <span className="cell">I</span>
          <span className="cell">R</span>
          <span className="cell">S</span>
          <span className="cell">T</span>
        </p>
      </div>
    </>
  );
}

export default GuessResult;
