import pygame
import game_settings
from image_utils import load_and_scale_image

class UserPlatform(pygame.sprite.Sprite): # Class for the user platform in the game
    WIDTH = 250
    HEIGHT = 25
    def __init__(self,surface): # Initialize the UserPlatform class
        super().__init__() # Call the parent class constructor
        
        self.surface = surface # Store the screen surface for drawing

        # Every sprite needs an image and a rect 
        
        
        self.width = UserPlatform.WIDTH
        self.height = UserPlatform.HEIGHT

        
        self.image = load_and_scale_image("src/assets/Brick-Away-Platform.png", (self.width, self.height))

        
        self.rect = self.image.get_rect() # Get the rectangle of the platform
        # Creating a mask
        self.mask = pygame.mask.from_surface(self.image) # Create a mask from the surface

        # Create vectors
        self.position = pygame.Vector2(surface.get_width() /2, surface.get_height() - 40)   #Set the initial position of the platform
        self.velocity = pygame.Vector2(0, 0)

        # Speed Variables
        self.max_speed = 500 # pixels per second 
        self.base_speed = 100 # Base speed of the platform
        self.speed = 0 # Set the speed of the platform
        self.acceleration = .2 # Acceleration of the platform
        self.friction = .3 # How fast the platform slows down
        self.changing_direction = False # Flag to check if the platform is changing direction

        #Update the rect to be the postion of the platform
        self.rect.center = self.position # Center the rectangle on the position vector

    #Updare methode dires every time the game Loops
    def update(self): # in order to update the platform
        self.update_velocity() # Update the velocity based on user input
        self.update_position() # Update the position based on the velocity
        self.rect.center = self.position # Update the rectangle position to match the platform position

    # Calculate the vector postion of the platform
    def update_position(self):
        self.position += self.velocity
        self

        if self.rect.left <= self.surface.get_rect().left and not(self.velocity.x > 0): # If the platform is at the left edge of the screen
            self.position.x = self.surface.get_rect().left + self.rect.width / 2 # Move the platform to the right edge of the screen
            self.velocity.x = 0 # Stop the platform from moving left
            self.speed = 0 # Reset the speed to 0
        

        elif self.rect.right >= self.surface.get_rect().right and not(self.velocity.x < 0): # If the platform is at the right edge of the screen
            self.position.x = self.surface.get_rect().right - self.rect.width / 2 # Move the platform to the left edge of the screen
            self.velocity.x = 0 # Stop the platform from moving left
            self.speed = 0 # Reset the speed to 0


    # Calclulatting the velocity from user input
    def update_velocity(self):
        key_presses = pygame.key.get_pressed() # Get the current key presses
        key_pressed = False
        left = self.velocity.x < 0 # Check if the platform is moving left
        right = self.velocity.x > 0 # Check if the platform is moving right

        if key_presses[pygame.K_a]: # if a key is pressed
            self.velocity.x -= 1 # Move left
            key_pressed = True 
            if right: # If the platform is moving right
                self.changing_direction = True



        if key_presses[pygame.K_d]: # if d key is pressed
            self.velocity.x += 1 # Move right
            key_pressed = True
            if left: # If the platform is moving left
                self.changing_direction = True

        
        if self.velocity.magnitude() != 0:

            self.velocity = self.velocity.normalize() # Normalize the velocity vector to keep the direction but set the length to 1

            if key_pressed and not (self.changing_direction): # If a key is pressed and the platform is not changing direction
                self.speed += self.base_speed * self.acceleration # Increase the speed based on acceleration
            elif not(key_pressed) or self.changing_direction: # If no key is pressed or the platform is changing direction
                self.speed -= self.base_speed * self.friction # Decrease the speed based on friction

            if self.speed <= 0: # If the speed is less than or equal to 0
                self.changing_direction = False # Reset the changing direction flag
                self.speed = 0 # Stop the platform
            elif self.speed >= self.max_speed: # If the speed is greater than or equal to the maximum speed
                self.speed = self.max_speed # Cap the speed at the maximum speed

            self.velocity.scale_to_length(self.speed * game_settings.dt)
