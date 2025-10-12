import random
def print_output(message):
    print(f"Output: {message}")

def input_float(prompt):
    return float(input(f"Input: {prompt}"))

PENNIES_DOLLAR= 100
PENNIES_QUARTER= 25
PENNIES_DIME= 10
PENNIES_NICKEL= 5

pennies = int(input_float("Enter an amount of money: $") * 100)

dollars = pennies // PENNIES_DOLLAR

if dollars > 0:
    print(f"{dollars} dollar bill(s)")
    pennies = pennies % PENNIES_DOLLAR

quarters = pennies // PENNIES_QUARTER
if quarters > 0:
    print(f"{quarters} quarter(s)")
    pennies = pennies % PENNIES_QUARTER
              
dimes = pennies // PENNIES_DIME
if quarters > 0:
    print(f"{dimes} dime(s)")
    pennies = pennies % PENNIES_DIME
              
nickels = pennies // PENNIES_NICKEL
if quarters > 0:
    print(f"{nickels} nickel(s)")
    pennies = pennies % PENNIES_NICKEL

if pennies >= 0:
    print(f"{pennies} penny(s)")
