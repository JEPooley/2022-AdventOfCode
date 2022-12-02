// --- Day 2: Rock Paper Scissors [Part Two] ---

const fs = require("fs");

const score = {
  BX: 1,
  AY: 4,
  CZ: 7,
  CX: 2,
  BY: 5,
  AZ: 8,
  AX: 3,
  CY: 6,
  BZ: 9,
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds.map((round) => score[round]).reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
