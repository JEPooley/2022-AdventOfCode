// --- Day 2: Rock Paper Scissors [Part Two] ---

const fs = require("fs");

const outcome = {
  X: 0, // Lose
  Y: 3, // Draw
  Z: 6, // Win
};

const shape = {
  BX: 1, // Rock
  AY: 1, // Rock
  CZ: 1, // Rock
  CX: 2, // Paper
  BY: 2, // Paper
  AZ: 2, // Paper
  AX: 3, // Scissors
  CY: 3, // Scissors
  BZ: 3, // Scissors
};

const getOutcome = (round) => {
  const shapeScore = shape[round];
  const outcomeScore = outcome[round[1]];
  return outcomeScore + shapeScore;
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds
  .map((round) => getOutcome(round))
  .reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
