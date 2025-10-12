# src/powerup.py

import pygame
from enum import Enum
from image_utils import load_and_scale_image

class PowerUpType(Enum):
    BONUS_POINTS = "bonus_points"
    EXTRA_BALL = "extra_ball"
    BALL_DAMAGE_UP = "ball_damage_up"
    BALL_GROW = "ball_grow"

class PowerUp(pygame.sprite.Sprite):
    def __init__(self, surface, position, powerup_type: PowerUpType):
        super().__init__()
        self.surface = surface
        self.type = powerup_type
        self.image = load_and_scale_image(f"src/assets/powerups/powerup_{powerup_type.value}.png", (40, 40))
        self.rect = self.image.get_rect(center=position)
        self.mask = pygame.mask.from_surface(self.image)

    def activate(self):
        print(f"Power-up activated: {self.type}")
        # Placeholder: Add effects here
        if self.type == PowerUpType.BONUS_POINTS:
            import game_settings
            game_settings.score += 500  # Example effect
        self.kill()
