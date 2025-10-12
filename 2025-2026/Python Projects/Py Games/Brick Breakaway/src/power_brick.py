import pygame
from enum import Enum
from brick import StandardBrick
from sprite_groups import ball_sprite


class PowerUpType(Enum):
    """Types of power-ups that can spawn from PowerUpBricks."""
    BONUS_POINTS = "bonus_points"
    EXTRA_BALL = "extra_ball"
    BALL_DAMAGE_UP = "ball_damage_up"
    BALL_GROW = "ball_grow"


class PowerUpBrick(StandardBrick):
    """A special brick that triggers a power-up effect when destroyed by the ball."""

    def update_color(self):
        # Override to do nothing (or optionally flash or tint image)
        pass

    def update(self):
        pass

    def __init__(self, surface, x, y, hp, width, height, powerup_type: PowerUpType):
        self.powerup_type = powerup_type

        # Determine HP based on powerup type
        hp_lookup = {
            PowerUpType.BONUS_POINTS: 1,
            PowerUpType.EXTRA_BALL: 1,
            PowerUpType.BALL_DAMAGE_UP: 2,
            PowerUpType.BALL_GROW: 2,
        }
        hp = hp_lookup.get(powerup_type, 1)

        # Store image path before init
        icon_path = f"src/assets/powerups/powerup_{powerup_type.value}.png"

        # Call base constructor
        super().__init__(surface, x, y, hp, width, height)

        from image_utils import load_and_scale_image
        self.image = load_and_scale_image(icon_path, (width, height))
        self.rect = self.image.get_rect(topleft=(x, y))
        self.mask = pygame.mask.from_surface(self.image)

    def brick_hit(self, ball):
        """Called when the ball hits this PowerUpBrick."""
        collision = pygame.sprite.collide_mask(self, ball)
        if collision:
            self.hp -= ball.damage

            import game_settings
            game_settings.score += 100

            if self.hp <= 0:
                print(f"[ACTIVATE] {self.powerup_type} triggered at ({self.rect.center})")

                # === Power-up Effects ===
                if self.powerup_type == PowerUpType.BONUS_POINTS:
                    game_settings.score += 500

                elif self.powerup_type == PowerUpType.EXTRA_BALL:
                    from ball import Ball
                    new_ball = Ball(self.surface)
                    new_ball.rect.center = (self.rect.centerx, self.rect.centery + 10)
                    new_ball.started = True
                    new_ball.velocity = pygame.Vector2(4, -4)
                    ball_sprite.add(new_ball)

                elif self.powerup_type == PowerUpType.BALL_DAMAGE_UP:
                    ball.damage += 1

                elif self.powerup_type == PowerUpType.BALL_GROW:
                    # Save current center so resized ball stays in same position
                    center = ball.rect.center

                    # Grow size but clamp it to a safe max to avoid wall collisions
                    grow_amount = 10
                    max_size = 64
                    new_width = min(ball.rect.width + grow_amount, max_size)
                    new_height = min(ball.rect.height + grow_amount, max_size)

                    ball.rect.width = new_width
                    ball.rect.height = new_height
                    ball.image = pygame.transform.scale(ball.image, (new_width, new_height))

                    # Recreate mask for collision detection
                    ball.mask = pygame.mask.from_surface(ball.image)

                    # Restore center
                    ball.rect.center = center

                    # Update radius for logic that depends on it
                    ball.radius = new_width // 2

                    # Safety: Keep the ball moving
                    if ball.velocity.magnitude() == 0:
                        ball.velocity = pygame.Vector2(1, -1).normalize() * (ball.speed * game_settings.dt)

                # Remove power-up from screen & prevent fallback visuals
                self.kill()
                return  # stop further logic

            else:
                # Optional: tint or flash to show it's damaged
                self.update_color()
                