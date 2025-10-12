import pygame

GAME_HEIGHT = 600 # Height of the game window
GAME_WIDTH = 800 # Width and height of the game window
fps = 60    # Frames per second
dt = 0 # Delta time (time since last frame)3

player_lives = 3
score = 0
start_time = 0
elapsed_time = 0
round_timer = 0





hp_colors = {}
hp_colors[100] = "src/assets/Brick-Away-Brick100hp.png" # Green for 100% health
hp_colors[90] = "src/assets/Brick-Away-Brick90hp.png" # Yellow for 90% health
hp_colors[80] = "src/assets/Brick-Away-Brick80hp.png" # Yellow for 80% health
hp_colors[70] = "src/assets/Brick-Away-Brick70hp.png" # Light yellow for 70% health
hp_colors[60] = "src/assets/Brick-Away-Brick60hp.png" # Light yellow for 70% health
hp_colors[50] = "src/assets/Brick-Away-Brick50hp.png" # Light yellow for 70% health
hp_colors[40] = "src/assets/Brick-Away-Brick40hp.png" # Light yellow for 70% health
hp_colors[30] = "src/assets/Brick-Away-Brick30hp.png" # Orange for 30% health
hp_colors[20] = "src/assets/Brick-Away-Brick20hp.png" # Orange for 20% health
hp_colors[10] = "src/assets/Brick-Away-Brick10hp.png" # Red for 10% health
hp_colors[0] = "src/assets/Brick-Away-Brick10hp.png" # Red for 0% health
#Example of how to use image instead of color
# hp_colors[100] = pygame.image.load("assets/Brick-Away_Brick100hp.png")

