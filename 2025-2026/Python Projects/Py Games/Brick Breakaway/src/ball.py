import pygame
import game_settings
from random import randint, uniform
from image_utils import load_and_scale_image

class Ball(pygame.sprite.Sprite):
    
    def __init__(self, surface):
        
        super().__init__()  # Call the parent class constructor
        self.started = False  # Don't show or move the ball until space is pressed
        

        self.surface = surface # The surface the ball is drawn on
        self.radius = 20 # Radius of the ball

        
        
        self.image = load_and_scale_image("src/assets/Brick-Away-Ball-Normal.png", (self.radius * 2, self.radius * 2))
       
        self.rect = self.image.get_rect()

        # Creating a mask
        self.mask = pygame.mask.from_surface(self.image) # Create a mask from the surface

        # Create vectors
        self.position = pygame.Vector2(-999, -999)  # Invisible until randomized
        self.velocity = pygame.Vector2(0, 0) # Initial velocity of the ball

        # Speed Attributes
        self.max_speed = 800 # Maximum speed of the ball
        self.min_speed = 200 # Minimum speed of the ball
        self.speed = 300 # Current speed of the ball
        self.angle = 0 # Angle of the ball in radians

        # Damage the ball does to bricks
        self.damage = 1 # Damage the ball does to bricks
        self.grow_revert_time = None
        self.original_size = (self.radius * 2, self.radius * 2)

       

    # This runs on every frame
    def update(self):
        if not self.started:
            return

        self.update_velocity()
        self.update_position()
        self.rect.center = self.position

    def update_velocity(self):
        if self.velocity.magnitude() < 0.01:
            # Give it a small nudge if it gets stuck
            self.velocity = pygame.Vector2(1, -1).normalize() * self.speed * game_settings.dt
        else:
            self.velocity = self.velocity.normalize()
            self.velocity.scale_to_length(self.speed * game_settings.dt)

    def update_position(self):
        bounds = self.surface.get_rect()

        if self.rect.left <= bounds.left or self.rect.right >= bounds.right:
            self.velocity.x *= -1
            if self.rect.left <= bounds.left:
                self.position.x = bounds.left + self.radius + 1
            elif self.rect.right >= bounds.right:
                self.position.x = bounds.right - self.radius - 1

        if self.rect.top <= bounds.top:
            self.velocity.y *= -1
            self.position.y = bounds.top + self.radius + 1

        if self.rect.top >= bounds.bottom:
            self.started = False
            return

        self.position += self.velocity

    def launch(self):
        print("Ball launched!")
        self.randomize_start()
        self.started = True
        self.rect.center = self.position

    def randomize_start(self):

        screen_rect = self.surface.get_rect()
        brick_height = 40
        bricks_stack = int((screen_rect.height / 3) // brick_height)

        safe_zone_top = screen_rect.top + 60 + brick_height * bricks_stack
        safe_zone_bottom = screen_rect.bottom - 60

        self.position.x = randint(screen_rect.left + self.radius, screen_rect.right - self.radius)
        spawn_range_top = safe_zone_top + (safe_zone_bottom - safe_zone_top) * 0.25
        spawn_range_bottom = safe_zone_top + (safe_zone_bottom - safe_zone_top) * 0.5
        self.position.y = randint(int(spawn_range_top), int(spawn_range_bottom))

        dt = game_settings.dt 

        angle_deg = uniform(105, 165)
        direction = pygame.math.Vector2(1, 0).rotate(angle_deg)
        self.velocity = direction.normalize() * self.speed*dt  
        self.angle = angle_deg
        print(f"Spawned ball at {self.position} with velocity {self.velocity}")



    def platform_hit(self, platform):# This method is called when the ball hits the platform
        # More accurate check for collision
        collision = pygame.sprite.collide_mask(self, platform) # Check for collision using the mask
        if collision: # If there is a collision
            self.velocity.reflect_ip((0, self.velocity.y * -1)) # Reflect the velocity on the y-axis
            # Saftey to make sure the ball does not go through the platform
            if self.rect.centery - self.radius <= platform.rect.top:
                self.rect.centery = platform.rect.top - self.radius - 1
                self.position.y = platform.rect.top - self.radius - 1

             # Goning to fake some physics here
             # - if the platform and ball are moving in the same direction
             #        -angle th ball down
             #        -speed the ball up
             # -if the platform and the ball are moving the opposite direction
             #        -angle the ball up
             #        -slow the ball down

            if platform.velocity.x != 0:
                previous_angle = self.angle 
                new_angle = self.angle 

                MAX_ANGLE_CHANGE = 10
                # Maximum angle to change the ball's angle

                MAX_SPEED_CHANGE = 25 
                # Maximum speed to change the ball's speed

                HIGHEST_ANGLE = 85 
                # Highest angle the ball can reach

                LOWEST_ANGLE = 30 
                # Lowest angle the ball can reach

                platform_speed = platform.speed / platform.max_speed

                bounce_angle = int(platform_speed * MAX_ANGLE_CHANGE) # Calculate the bounce angle based on the platform speed
                speed_change = int(platform_speed * MAX_SPEED_CHANGE) # Calculate the speed change based on the platform speed

                # If the platform is moving in the same direction as the ball
                if (platform.velocity.x > 0 and self.velocity.x > 0) or (platform.velocity.x < 0 and self.velocity.x < 0):

                    if HIGHEST_ANGLE >= self.angle - bounce_angle >= LOWEST_ANGLE:
                        new_angle -= bounce_angle
                    elif self.angle - bounce_angle < LOWEST_ANGLE:
                        angle_to_lowest = LOWEST_ANGLE - (self.angle - bounce_angle)
                        new_angle -= bounce_angle - angle_to_lowest
                    
                    if self.speed + speed_change <= self.max_speed:
                        self.speed += speed_change
                    else:
                        self.speed = self.max_speed

                # If the platform is moving in the opposite direction as the ball
                if (platform.velocity.x > 0 and self.velocity.x < 0) or (platform.velocity.x < 0 and self.velocity.x > 0):
                    if HIGHEST_ANGLE >= self.angle + bounce_angle >= LOWEST_ANGLE:
                        new_angle += bounce_angle
                    elif self.angle + bounce_angle > HIGHEST_ANGLE:
                        angle_to_highest = (self.angle + bounce_angle) - HIGHEST_ANGLE
                        new_angle += bounce_angle - angle_to_highest

                    if self.speed - speed_change >= self.min_speed:
                        self.speed -= speed_change  
                    else:
                        self.speed = self.min_speed

                # Update the angle of the ball
                self.angle = new_angle # Update the angle of the ball
                rotation = previous_angle - new_angle # Calculate the rotation of the ball
                if self.velocity.x < 0:
                    rotation *= -1
                    

                self.velocity.rotate_ip(rotation) # Rotate the velocity vector by the rotation angle

    # Handle collision with bricks
    def brick_hit(self, brick):
        collision = pygame.sprite.collide_mask(self, brick)
        if collision:  # If there is a collision
            delta_x =  0
            delta_y = 0
            
            # Calculate the delta x and y based on the direction of the velocity
            if self.velocity.x > 0:
                delta_x = self.rect.right - brick.rect.left
            elif self.velocity.x < 0:
                delta_x = brick.rect.right - self.rect.left
            if self.velocity.y > 0:
                delta_y = self.rect.bottom - brick.rect.top
            elif self.velocity.y < 0:
                delta_y = brick.rect.bottom - self.rect.top
            
            # Corner Hit
            if abs(delta_x - delta_y) < 4:
                self.velocity.reflect_ip((self.velocity.x * -1, self.velocity.y * -1))  # Reflect the velocity on both axes
            
            # Left or Right Hit
            elif delta_x > delta_y: 
                self.velocity.reflect_ip((0, self.velocity.y * -1))  # Reflect the velocity on the y-axis

            # Top or Bottom Hit
            elif delta_x < delta_y:
                self.velocity.reflect_ip((self.velocity.x * -1, 0)) # Reflect the velocity on the x-axis
        
