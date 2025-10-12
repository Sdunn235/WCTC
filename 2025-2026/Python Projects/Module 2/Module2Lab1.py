def get_area(base,height):
    area = base * height
    return area
def calculate_area_from_user():
    number1=float(input("Input a number: "))
    number2=float(input("Input a second number: "))
    print(f"{get_area(number1,number2):.2f}")

calculate_area_from_user()
calculate_area_from_user()
calculate_area_from_user()

