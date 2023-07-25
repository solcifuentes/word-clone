import React from "react";
import { range } from "../../utils.js";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value.value[num] : undefined}
        </span>
      ))}
      {/* {value &&
        value.split("").map((letter, index) => (
          <span key={index} className="cell">
            {letter}
          </span>
        ))} */}
    </p>
  );
}

export default Guess;
