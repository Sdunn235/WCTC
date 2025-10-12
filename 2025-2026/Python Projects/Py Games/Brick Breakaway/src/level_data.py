import pygame
import game_settings

# Each string row = a row of bricks
# Each char = a type of brick ('S' = StandardBrick, ' ' = empty, etc.)

default_level_layout = [
    "SSSGGSSS",
    "SP  E PS",
    "SSSGGSSS",
    "S   E  S",
    "SSSDGSSS",
]







#default_level_layout = [
#    "SSSGGSSS",
#    "SP  E PS",
#    "SSSGGSSS",
#    "S   E  S",
#    "SSSDGSSS",
#]


# You can imagine later:
# 'P' = PowerUpBrick
# 'D' = Double HP Brick
# 'E' = Exploding Brick, etc.

# Multidimensional array for future power-up bricks
# Each row can have different power-up types or be empty
# Example: 'P' = PowerUpBrick, 'D' = Double HP Brick, etc.
# This is just a placeholder for future expansion

#default_level_layout_array = [[{isactive: false, powerup_type: "P"}],[],[],[],[]]  # 5 rows, each with a list for columns 


