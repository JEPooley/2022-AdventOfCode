# --- Day 5: Supply Stacks [Part One] ---

from collections import defaultdict
import re


class Supplies:
    def __init__(self, stacks: list):
        self.stacks = {i: stacks[i] for i in sorted(stacks)}
        
    @property
    def tops(self):
        return [stack[-1] for stack in self.stacks.values()]

    @classmethod
    def from_diagram(cls, crates_diagram: str):
        stacks = defaultdict(list)
        for row in crates_diagram.split("\n")[:-1]:
            col = 0
            for i in range(0, len(row), 4):
                value = row[i + 1 : i + 2]
                if value != " ":
                    stacks[col].append(value)
                col += 1
        stacks = {i: list(reversed(stacks)) for i, stacks in stacks.items()}
        return Supplies(stacks)

    def move(self, quantity: int, index: int, target: int):
        values = [self.stacks[index].pop() for _ in range(quantity)]
        self.stacks[target].extend(values)


def parse_instructions(instructions: str):
    for instruction in instructions.split("\n"):
        yield tuple([int(s) for s in re.findall(r"\b\d+\b", instruction)])


# Load Data
raw = open("instructions.txt").read()
crates_diagram, raw_instructions = raw.split("\n\n")

# Extract Information
supplies = Supplies.from_diagram(crates_diagram)
instructions = parse_instructions(raw_instructions)

# Execute Moves
for quantity, index, target in instructions:
    supplies.move(quantity, index - 1, target - 1)

# Find Output
print(f"Top of Stacks: {''.join(supplies.tops)}")
