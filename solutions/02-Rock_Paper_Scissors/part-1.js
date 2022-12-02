// --- Day 2: Rock Paper Scissors [Part One] ---

const fs = require("fs");

const score = {
  AZ: 3, // Loss
  BX: 1, // Loss
  CY: 2, // Loss
  AX: 4, // Draw
  BY: 5, // Draw
  CZ: 6, // Draw
  AY: 8, // Win
  BZ: 9, // Win
  CX: 7, // Win
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds
  .map((round) => score[round])
  .reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
