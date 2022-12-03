# --- Day 3: Rucksack Reorganization [Part One] ---


import string


def halves(item: str) -> tuple[str, str]:
    halfway = int(len(item) / 2)
    return item[:halfway], item[halfway:]


def find_duplicate(halves: tuple[str, str]) -> str:
    for char in halves[0]:
        if char in halves[1]:
            return char


SCORE = {char: i + 1 for i, char in enumerate(string.ascii_letters)}

# Load Data
raw = open("contents.txt").read()
rucksacks = [halves(item) for item in raw.split("\n")]

# Find Duplicates
duplicates = [find_duplicate(rucksack) for rucksack in rucksacks]

# Add Scores
total_score = sum([SCORE[char] for char in duplicates])
print(f"Total Score: {total_score}")
