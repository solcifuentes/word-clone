import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";
import styles from "./Guess.module.css";
import Banner from "../Banner/Banner.js";
// import { answer } from "../Game/Game.js";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value, answer, listOfGuesses }) {
  const check = checkGuess(value, answer);
  console.log(check);
  return (
    <div>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={check ? check[num].letter : undefined}
            status={check ? check[num].status : undefined}
          />
        ))}
      </p>
      <Banner check={check} listOfGuesses={listOfGuesses} answer={answer} />
    </div>
  );
}

export default Guess;
