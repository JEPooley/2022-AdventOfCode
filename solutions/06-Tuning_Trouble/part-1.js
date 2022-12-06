// --- Day 6: Tuning Trouble [Part One] ---

const fs = require("fs");

function findMarker(signal, markerLength) {
  for (let index = 0; index < signal.length - markerLength; index++) {
    const elements = new Set(signal.slice(index, index + markerLength));
    if (elements.size == markerLength) {
      return index + markerLength;
    }
  }
}

// Load Data
const signal = fs.readFileSync("signal.txt", "utf8");

// Find Marker Position
const markerIndex = findMarker(signal, 4);
console.log(`Marker at Position: ${markerIndex}`);
