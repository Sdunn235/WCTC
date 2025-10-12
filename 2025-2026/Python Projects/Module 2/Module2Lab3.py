# Alpha         2013-2025
# Gen Z         1997-2012
# Millennial    1981-1996
# Gen X         1965-1980
# Baby Boomer   1946-1964
# WOW!          All Else
def get_generation():
    year=(int(input(f"What year were you born? ")))
    if year > 2025:
        return "Wow!"
    if year >= 2013:
        return "Alpha"
    elif year >= 1997:
        return "Gen Z"
    elif year >= 1981:
        return "Millennial"
    elif year >= 1965:
        return "Gen X"
    elif year >= 1946:
        return "Baby Boomer"
    else:
        return "WOW!"


print(f"{get_generation()}")
print(f"{get_generation()}")
print(f"{get_generation()}")
