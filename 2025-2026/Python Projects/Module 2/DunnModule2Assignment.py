# This is a budget calculator
print("=== Budget Calculator ===")

# Gets the user's pay period and income
pay_period = int(input( "How many times do you get paid each month? "))  # asks the user how many times they get paid each month
income = float(input("What is your weekly after taxes? $"))  # asks the user what their monthly income is


# Gets the user's expenses as a function
def get_cost(expense): # function to get the cost of an expense first by chcecking if the user pays for the expense
   pays_expense = input(f"Do you pay for {expense}? (Y/N): ").upper() # asks the user if they pay for the expense
   if pays_expense == "Y":   # if the user pays for the expense
      expense_cost = float(input(f"How much do you pay for {expense} per month? $")) # asks the user how much they pay for the expense per month
   else: # if the user does not pay for the expense
      expense_cost = 0 # sets the expense cost to 0
   return expense_cost # returns the expense cost

# Gets the user's income
def get_monthly_income():
    rent = get_cost("rent") # calls the function to get the cost of rent    
    groceries = get_cost("groceries")  # calls the function to get the cost of groceries
    carpayment = get_cost("car payments") # calls the function to get the cost of car payments

    total_costs = rent + carpayment + groceries  # calculates the total costs by adding the costs of rent, car payments, and groceries
    monthly_income = pay_period * income  # calculates the monthly income by multiplying the pay period by the income

    print(f"Your monthly income is ${monthly_income:.2f}.") # prints the monthly income formatted to two decimal places
    print(f"Your monthly costs are ${total_costs:.2f}.") # prints the monthly costs formatted to two decimal places

    # checks if the monthly income is greater than, less than, or equal to the monthly costs

    if monthly_income > total_costs:  # if the monthly income is greater than the monthly costs
      print(f"You have a surplus of ${monthly_income - total_costs:.2f} each month.")  # prints the surplus
    elif monthly_income < total_costs:  # if the monthly income is less than the monthly costs
      print(f"You have a deficit of ${total_costs - monthly_income:.2f} each month.")  # prints the deficit
    else:  # if the monthly income is equal to the monthly costs
      print(" You are breaking-even each month.")  # prints the break-even message

get_monthly_income()  # calls the function to get the monthly income