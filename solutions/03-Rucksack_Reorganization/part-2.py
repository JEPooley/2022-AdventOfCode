# --- Day 3: Rucksack Reorganization [Part Two] ---

import string
from functools import reduce


def find_badge(group: list[set[str]]) -> str:
    return reduce(lambda a, b: a.intersection(b), group).pop()


def group_rucksacks(rucksacks: list[str]) -> list[list[set[str]]]:
    groups = []
    for i in range(0, len(rucksacks), 3):
        groups.append([set(chars) for chars in rucksacks[i : i + 3]])
    return groups


score = {char: i + 1 for i, char in enumerate(string.ascii_letters)}

raw = open("contents.txt").read()
rucksacks = raw.split("\n")
groups = group_rucksacks(rucksacks)
badges = [find_badge(group) for group in groups]

total_score = sum([score[char] for char in badges])
print(f"Total Score: {total_score}")
