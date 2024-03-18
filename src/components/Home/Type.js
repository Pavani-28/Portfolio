import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Final year student",
          "I love to solve problems using data structures",
          "MERN Stack Development enthusiast",
          "& I strive to learn!!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
