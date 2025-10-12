import pygame
import game_settings
from enum import Enum
from brick import Brick


class PowerUpType(Enum):
    BONUS_POINTS = "bonus_points"
    EXTRA_BALL = "extra_ball"
    BALL_DAMAGE_UP = "ball_damage_up"
    BALL_GROW = "ball_grow"

class PowerUpBrick(Brick):
    def __init__(self, surface, x, y, hp, width, height, powerup_type: PowerUpType):
        super().__init__(surface, x, y, hp, width, height)
        self.powerup_type = powerup_type

        # Replace color with an image (future: animate or color-code per power type)
        try:
            self.image = pygame.image.load(f"src/assets/powerups/powerup_{powerup_type.value}.png").convert_alpha()
        except:
            self.image = pygame.Surface((width, height), pygame.SRCALPHA)
            pygame.draw.rect(self.image, (255, 215, 0), (0, 0, width, height))  # Gold fallback
        self.rect = self.image.get_rect(topleft=(x, y))
        self.mask = pygame.mask.from_surface(self.image)

    def brick_hit(self, ball):
        collision = pygame.sprite.collide_mask(self, ball)
        if collision:
            self.hp -= ball.damage
            game_settings.score += 100

            if self.hp <= 0:
                # 🎁 Future: spawn the power-up object
                print(f"[DROP] {self.powerup_type} triggered at ({self.rect.center})")
                self.kill()
            else:
                self.update_color()