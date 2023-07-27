import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";
import styles from "./Guess.module.css";
// import { answer } from "../Game/Game.js";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value, answer }) {
  const check = checkGuess(value, answer);
  console.log(answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={check ? check[num].letter : undefined}
          status={check ? check[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
