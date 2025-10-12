import pygame

def load_and_scale_image(path, target_size):
    """
    Loads an image from the given path and scales it to target_size.
    Handles errors gracefully and applies smooth scaling.
    """
    try:
        image = pygame.image.load(path).convert_alpha()
        scaled_image = pygame.transform.smoothscale(image, target_size)
        return scaled_image
    except pygame.error as e:
        print(f"Error loading image: {path} — {e}")
        fallback = pygame.Surface(target_size, pygame.SRCALPHA)
        fallback.fill((255, 0, 255))  # Magenta fallback
        return fallback
