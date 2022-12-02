// --- Day 2: Rock Paper Scissors [Part One] ---

const fs = require("fs");

const score = {
  AZ: 3,
  BX: 1,
  CY: 2,
  AX: 4,
  BY: 5,
  CZ: 6,
  AY: 8,
  BZ: 9,
  CX: 7,
};

const strategyGuide = fs.readFileSync("strategy_guide.txt", "utf8");

const rounds = strategyGuide.replaceAll(" ", "").split("\n");

const totalScore = rounds.map((round) => score[round]).reduce((a, b) => a + b);

console.log("Total Score: ", totalScore);
