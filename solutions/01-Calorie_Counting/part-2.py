# --- Day 1: Calorie Counting [Part Two] ---

raw = open("calories.txt").read()
calorie_groups = raw.split("\n\n")


def total_calories(calorie_group: str) -> int:
    return sum([int(number) for number in calorie_group.split("\n")])


calorie_totals = [total_calories(group) for group in calorie_groups]

highest_totals = sorted(calorie_totals, reverse=True)[:3]

print(f"Calories of Top Three Elves: {sum(highest_totals)}")
