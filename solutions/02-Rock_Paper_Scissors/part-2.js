// --- Day 2: Rock Paper Scissors [Part Two] ---

const fs = require("fs");

const score = {
  BX: 1, // Rock
  AY: 4, // Rock
  CZ: 7, // Rock
  CX: 2, // Paper
  BY: 5, // Paper
  AZ: 8, // Paper
  AX: 3, // Scissors
  CY: 6, // Scissors
  BZ: 9, // Scissors
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds
  .map((round) => score[round])
  .reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
