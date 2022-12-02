// --- Day 2: Rock Paper Scissors [Part One] ---

const fs = require("fs");

const shape = {
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const outcome = {
  AZ: 0, // Loss
  BX: 0, // Loss
  CY: 0, // Loss
  AX: 3, // Draw
  BY: 3, // Draw
  CZ: 3, // Draw
  AY: 6, // Win
  BZ: 6, // Win
  CX: 6, // Win
};

const getRoundScore = (round) => {
  const outcomeScore = outcome[round];
  const shapeScore = shape[round[1]];
  return outcomeScore + shapeScore;
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds
  .map((round) => getRoundScore(round))
  .reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
