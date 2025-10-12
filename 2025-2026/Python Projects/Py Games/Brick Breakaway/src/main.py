import random
import pygame
import game_settings
import level_data
# Import the Ball class from ball.py
from ball import Ball 
# Import the UserPlatform class from user_platform.py
from user_platform import UserPlatform 
# Import the Brick classes from brick.py
from brick import Brick 
# Import the sprite groups
from sprite_groups import user_sprite, ball_sprite, brick_sprite 
from sprite_groups import powerup_sprite
from powerup import PowerUp
from power_brick import PowerUpBrick, PowerUpType

pygame.init()
# Set the window size
screen = pygame.display.set_mode((game_settings.GAME_WIDTH, game_settings.GAME_HEIGHT))
# Create a clock object to control the frame rate 
clock = pygame.time.Clock() 

game_state = "start"  # Game state can be "start", "playing", or "game_over"

has_started_once = False # Variable to track if the game has started at least once

dt=game_settings.dt

# Set the title of the window
pygame.display.set_caption("Brick Breakaway")



running = True

# Create a background surface
from image_utils import load_and_scale_image
background = load_and_scale_image("src/assets/Brick-Away-Background.png", (game_settings.GAME_WIDTH, game_settings.GAME_HEIGHT))

# Create an instance of UserPlatform and add it to the sprite group
user_sprite.add(UserPlatform(screen)) 
# Create an instance of Ball and add it to the ball sprite group
ball = Ball(screen)
ball_sprite.add(ball)

def draw_text(text, center, size=36, color=(255, 255, 255), glow_color=(255, 100, 200), glow_radius=2,alpha=255):
    font = pygame.font.Font(None, size)
    
    # Render glow layer (blur effect using multiple offsets)
    glow_surface = font.render(text, True, glow_color)
    glow_surface.set_alpha(100)  # Make it a soft background
    for dx in range(-glow_radius, glow_radius + 1):
        for dy in range(-glow_radius, glow_radius + 1):
            if dx != 0 or dy != 0:
                offset_rect = glow_surface.get_rect(center=(center[0] + dx, center[1] + dy))
                screen.blit(glow_surface, offset_rect)
    
    # Render main text on top
    main_surface = font.render(text, True, color)
    main_rect = main_surface.get_rect(center=center)
    screen.blit(main_surface, main_rect)

# Keep this to use when a level actually restarts (e.g., game over or level complete)
def reset_brick_full():
    brick_sprite.empty()  # Clear the sprite group
    add_bricks(level_data.default_level_layout)  # Call the function to add bricks to the game

# This one does nothing — preserves existing bricks — just used on life loss
def preserve_bricks():
    pass

def reset_game(full_reset=False):
    ball.started = False
    ball.position = pygame.Vector2(-999, -999)
    ball.velocity = pygame.Vector2(0, 0)
    ball.rect.center = ball.position

    if full_reset:
        reset_brick_full()  # Reset the bricks if it's a full reset
        # Reset round data (only if we're starting from "game over")
        game_settings.player_lives = 3
        game_settings.score = 0
        game_settings.round_timer = 0
    else:
        preserve_bricks() # Preserve existing bricks if it's just a life loss

from brick import StandardBrick
# Function to add bricks to the game
def add_bricks(level_layout):
    brick_width = 100
    brick_height = 40
    gutter = 4

    start_x = screen.get_rect().left
    start_y = screen.get_rect().top + 60

    for row_index, row in enumerate(level_layout): # Loop through each row in the level layout
        for col_index, symbol in enumerate(row): # Loop through each column in the row
            x = start_x + col_index * brick_width # Add gutter to the left
            y = start_y + row_index * brick_height #

            if symbol == "S": # Standard Brick
                brick_sprite.add(StandardBrick(screen,
                                                x + gutter // 2, 
                                                  y + gutter // 2,                                            
                                               4, # This is the HP
                                               brick_width - gutter, 
                                               brick_height - gutter
                                               )
                                               )
            elif symbol == "P":
                brick_sprite.add(PowerUpBrick(screen, x + gutter // 2, y + gutter // 2,
                                              1, brick_width - gutter, brick_height - gutter,
                                              PowerUpType.BONUS_POINTS))

            elif symbol == "E":
                brick_sprite.add(PowerUpBrick(screen, x + gutter // 2, y + gutter // 2,
                                              1, brick_width - gutter, brick_height - gutter,
                                              PowerUpType.EXTRA_BALL))

            elif symbol == "D":
                brick_sprite.add(PowerUpBrick(screen, x + gutter // 2, y + gutter // 2,
                                              2, brick_width - gutter, brick_height - gutter,
                                              PowerUpType.BALL_DAMAGE_UP))

            elif symbol == "G":
                brick_sprite.add(PowerUpBrick(screen, x + gutter // 2, y + gutter // 2,
                                              2, brick_width - gutter, brick_height - gutter,
                                              PowerUpType.BALL_GROW))

add_bricks(level_data.default_level_layout)


# Function to handle collision between platform and ball
def platform_bounce(platform, ball):
    collision = pygame.sprite.collide_rect(platform, ball) # Check for collision between platform and ball 
    if collision: # If there is a collision
        ball.platform_hit(platform ) # call the platform_hit method on the ball
        return True # Return True to indicate a collision
    return False # Return False if there is no collision

# Function to handle collision between brick and ball
def brick_hit(brick, ball):
    collision = pygame.sprite.collide_rect(brick, ball) # Check for collision between brick and ball
    if collision: # If there is a collision
        brick.brick_hit(ball)
        ball.brick_hit(brick)
        return True # Return True to indicate a collision
    return False # Return False if there is no collision

def powerup_hit(powerup, ball):
    collision = pygame.sprite.collide_mask(powerup, ball)
    if collision:
        powerup.activate()
        return True
    return False

# Game loop is always running
while running: # Main game loop
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        elif event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            if game_state == "start" or game_state == "life_lost":
                ball.launch()
                game_state = "playing"
                has_started_once = True

            elif game_state == "game_over":
                reset_game()
                game_state = "start"# <---- Wait for the user to press space to start the game again

    
    pulse_alpha = 255
    pulse_direction = -5

    pulse_alpha += pulse_direction
    if pulse_alpha <= 100 or pulse_alpha >= 255:
        pulse_direction *= -1


    def reset_ball_position():
        ball.started = False
        ball.position = pygame.Vector2(screen.get_width() // 2, screen.get_height() - 60)
        ball.velocity = pygame.Vector2(0, 0)
        ball.rect.center = ball.position



    # Clear the screen
    screen.blit(background, (0, 0)) # Draw the background on the screen in the top left corner

    # Update and draw all sprites
    user_sprite.update() # Update the user sprite
    ball_sprite.update() # Update the ball sprite
    powerup_sprite.update() 
    if game_state == "playing" and ball.rect.top > screen.get_height():        
        if has_started_once:
            game_settings.player_lives -= 1
            if game_settings.player_lives <= 0:
                game_state = "game_over"
                reset_game(full_reset=True)  # 👈 Full reset
            else:
                game_state = "life_lost"  # NEW STATE
                reset_game(full_reset=False)  # 👈 Just reset ball
        else:
            reset_game(full_reset=False) # 👈 Just reset ball
    brick_sprite.update() # Update the brick sprite

    # Handle collisions
    pygame.sprite.groupcollide(user_sprite, ball_sprite, False, False, platform_bounce)
    pygame.sprite.groupcollide(brick_sprite, ball_sprite, False, False, brick_hit)
    pygame.sprite.groupcollide(powerup_sprite, ball_sprite, False, False, powerup_hit) 
  
    user_sprite.draw(screen) # Draw the user sprite on the screen
    brick_sprite.draw(screen) # Draw the brick sprite on the screen
    powerup_sprite.draw(screen)
    for b in ball_sprite:
        if b.started:
            screen.blit(b.image, b.rect) # Draw the ball sprite on the screen

    if game_state == "playing":
        game_settings.round_timer += game_settings.dt
        # === Draw HUD Elements ===
    if game_state == "playing":
        # Draw Lives (Top-left)
        draw_text(
            f"Lives: {game_settings.player_lives}",
            center=(80, 20),
            size=24,
            color=(255, 100, 100)  # Soft red
        )

        # Draw Score (Top-center)
        draw_text(
            f"Score: {game_settings.score}",
            center=(screen.get_width() // 2, 20),
            size=24,
            color=(255, 255, 100)  # Yellow tint
        )

        # Draw Timer (Top-right)
        draw_text(
            f"Time: {int(game_settings.round_timer)}s",
            center=(screen.get_width() - 80, 20),
            size=24,
            color=(150, 200, 255)  # Soft blue
        )

        
    # === Draw Prompts Based on Game State ===
    if game_state == "start":
        draw_text(
        "Press SPACE to Launch Ball",
        center=(screen.get_width() // 2, screen.get_height() - 100),
        color=(100, 200, 255),           # Foreground text color
        glow_color=(150, 250, 255),      # Glow aura color
        glow_radius=2,                 # How big the glow spreads
        alpha= 255,            # Pulse effect for the glow
    ) 

    elif game_state == "game_over":
        draw_text("GAME OVER", center=(screen.get_width() // 2, screen.get_height() // 2 - 20),
                    color =(240,75,75),
                    size=48, 
                    alpha=255,
                    glow_color=(255, 100, 100),      # Glow aura color
                    glow_radius=2                    # How big the glow spreads
        )
        draw_text("Press SPACE to Try Again", center=(screen.get_width() // 2, screen.get_height() // 2 + 20),
                    color=(255, 100,0), 
                    size=28, 
                    alpha=255,
                    glow_color=(255, 150, 30),      # Glow aura color
                    glow_radius=2                    # How big the glow spreads
        )
    elif game_state == "life_lost":
        draw_text(
            "You Lost a Life!",
            center=(screen.get_width() // 2, screen.get_height() // 2 - 20),
            color=(255, 100, 100),
            glow_color=(255, 180, 180),
            glow_radius=2,
            size=36
        )
        draw_text(
            "Press SPACE to Launch Next Ball",
            center=(screen.get_width() // 2, screen.get_height() // 2 + 20),
            color=(200, 200, 255),
            glow_color=(150, 150, 255),
            glow_radius=2,
            size=28
        )


    # Last step of the game loop
    pygame.display.flip() # Update the display
    game_settings.dt = clock.tick(game_settings.fps) / 1000 # Control the frame rate in milliseconds