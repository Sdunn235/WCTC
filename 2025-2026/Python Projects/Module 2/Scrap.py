import random
def print_output(message):
        print(f"Output: {message}")

def input_input(prompt):
    return input(f"Input: {prompt}")

SECONDS_MINUTE= 60
SECONDS_HOUR= SECONDS_MINUTE * 60
SECONDS_DAY= SECONDS_HOURS * 24

seconds = input_int("How many seconds?")
days = seconds / SECONDS_DAY
if days > 0:
    print(f"{days} Hours")
    seconds = seconds % SECONDS_DAY
hours = seconds // SECONDS_HOURS
if days > 0:
    print(f"{hours} Minutes")
    seconds = seconds % SECONDS_DAY
hours = seconds // SECONDS_MINTUTE
if days > 0:
    print(f"{seconds} Seconds")
    seconds = seconds % SECONDS_DAY
hours = seconds // SECONDS_SECONDS
