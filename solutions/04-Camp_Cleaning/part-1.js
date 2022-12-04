// --- Day 4: Camp Cleaning [Part One] ---

const fs = require("fs");

function extractRange(assignment) {
  return assignment
    .split(",")
    .map((section) => section.split("-").map((value) => parseInt(value)));
}

function isWithin(range1, range2) {
  return range1[0] >= range2[0] && range1[1] <= range2[1];
}

function checkContains(ranges) {
  const [range1, range2] = ranges;
  return isWithin(range1, range2) || isWithin(range2, range1);
}

// Load Data
const raw = fs.readFileSync("sections.txt", "utf8");
const assignments = raw.split("\n");

// Extract Ranges
const sectionRanges = assignments.map((assignment) => extractRange(assignment));

// Find Totally Overlapped Ranges
const contained = sectionRanges.map((ranges) => checkContains(ranges));

// Count Score
totalScore = contained.filter(Boolean).length;
console.log(`Total Score: ${totalScore}`);
