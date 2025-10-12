import pygame
import game_settings

pygame.init()
screen = pygame.display.set_mode((game_settings.GAME_WIDTH, game_settings.GAME_HEIGHT)) # Set the window size
clock = pygame.time.Clock() # Create a clock object to control the frame rate

running = True

background = pygame.Surface((screen.get_width(), screen.get_height())) # Create a surface for the background
# bacground= pygame.load("assets/background.png") # Load the background image
background.fill("#353535") # Fill the background with a color

# Game loop is always running
while running: # Main game loop
    for event in pygame.event.get(): # Check for events
        if event.type == pygame.QUIT: # If the quit event is triggered, stop the game
            running = False # Exit the game loop
    screen.blit(background, (0, 0)) # Draw the background on the screen in the top left corner

    # Last step of the game loop
    pygame.display.flip() # Update the display