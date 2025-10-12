import pygame
import game_settings

user_sprite =pygame.sprite.GroupSingle() # Create a single sprite group for the user platform
ball_sprite = pygame.sprite.Group() # Create a sprite group for the balls
brick_sprite = pygame.sprite.Group() # Create a sprite group for the bricks
powerup_sprite = pygame.sprite.Group() #Create ao sprite group for powerups