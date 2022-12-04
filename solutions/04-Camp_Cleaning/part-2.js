// --- Day 4: Camp Cleaning [Part Two] ---

const fs = require("fs");

function extractRange(assignment) {
  return assignment
    .split(",")
    .map((section) => section.split("-").map((value) => parseInt(value)));
}

function isWithin(value, range) {
  return value >= range[0] && value <= range[1];
}

function isContainedBy(range1, range2) {
  return range1[0] <= range2[0] && range1[1] >= range2[1];
}

function checkOverlaps(ranges) {
  const [values, range] = ranges;
  return (
    isWithin(values[0], range) ||
    isWithin(values[1], range) ||
    isContainedBy(values, range)
  );
}

// Load Data
const raw = fs.readFileSync("sections.txt", "utf8");
const assignments = raw.split("\n");

// Extract Ranges
const sectionRanges = assignments.map((assignment) => extractRange(assignment));

// Find Overlapped Ranges
const contained = sectionRanges.map((ranges) => checkOverlaps(ranges));

// Count Score
totalScore = contained.filter(Boolean).length;
console.log(`Total Score: ${totalScore}`);
