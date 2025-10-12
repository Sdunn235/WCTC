import pygame
import game_settings
from image_utils import load_and_scale_image

# === Base Brick Class ===
class Brick(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()

# === Standard Brick Class ===
# This class represents a standard brick with hit points and color based on health
class StandardBrick(Brick):
    def __init__(self, surface, x, y, hp, width, height):
        super().__init__()  # Call the parent class constructor
        self.surface = surface  # The surface the brick is drawn on
        
        # Every sprite needs an image and a rect
        self.image = pygame.Surface((width, height))
        self.rect = self.image.get_rect() # Get the rectangle of the brick
        self.mask = pygame.mask.from_surface(self.image)  # Create a mask from the surface

        # Hit Points
        self.hp = hp # Hit points of the brick
        self.max_hp = hp # Maximum hit points of the brick

        self.rect.topleft = (x, y)  # Set the position of the brick

        # Update the color based on the health percentage
        self.update_color()    

    def update_color(self):
        percent = int(round((self.hp / self.max_hp),1) * 100) # Calculate the percentage of health left
        
        
        self.image = load_and_scale_image(game_settings.hp_colors[percent], self.rect.size)


    def update(self):
        pass

    # If the ball hits the brick, reduce its hit points
    def brick_hit(self, ball):
        collision = pygame.sprite.collide_mask(self, ball)  
        if collision:  # If there is a collision
            self.hp -= ball.damage  # Reduce the hit points of the brick by the damage of the ball
            game_settings.score += 100  # ✅ Add score every hit
            if self.hp <= 0:  # If the hit points are less than or equal to 0
                # Future: Trigger power-up drop chance here
                # if random.random() < 0.2:
                #     spawn_powerup(self.rect.center)
                self.kill()  # Remove the brick from the sprite group
            else:
                self.update_color()  # Update the color of the brick based on the new hit points
    
        
    
        
        