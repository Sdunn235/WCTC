# main.py
# Tower Defense Game - Main Module
import pygame
import game_settings
import random
from level_data import level_one
from enemy import Enemy
from enemy_type import GoblinSpearman, GoblinArcher, GoblinAxeman, GoblinMage, GoblinKing
from level import Level
from tower import Tower
from sprite_groups import enemies, towers, projectiles
from image_utils import load_and_scale_image, rotate_image_to_velocity, load_directional_frames 
from tower_type import GateTower, PitTile, BasicTower
from placement_manager import attempt_placement

pygame.init()
screen = pygame.display.set_mode((game_settings.GAME_WIDTH, game_settings.GAME_HEIGHT))
clock = pygame.time.Clock()

# Mouse Cursors
mouse_cursor_inactive = pygame.image.load("Tower Defense/src/images/cursor/inactive_cursor.png")
mouse_cursor_active = pygame.image.load("Tower Defense/src/images/cursor/active_cursor.png")

# --- Projectile Collision Checks ---
def enemy_hit(projectile, enemy):
    if not hasattr(enemy, "is_enemy") or not enemy.is_enemy:
        return

    enemy.hp -= projectile.damage
    projectile.kill()

    if enemy.hp <= 0:
        game_settings.player_money += enemy.bounty
        for enemy in enemies:
            if getattr(enemy, "behavior", None) == "boss":
                enemy.remove_king_buff()
        enemy.kill()

def tower_hit(projectile, tower):
    tower.take_damage(projectile.damage)
    if hasattr(projectile, "effects") and "slow" in projectile.effects:
        slow_data = projectile.effects["slow"]
        print(f"[DEBUG] Applying slow effect: {slow_data} to tower at {pygame.time.get_ticks()}ms")
        tower.apply_effect("slow", slow_data["amount"], slow_data["duration"])
    if not hasattr(tower, "is_tower") or not tower.is_tower:
        return

    projectile.kill()
    if tower.hp <= 0:
        tower.kill()

# Game Loop
running = True
background = pygame.Surface((screen.get_width(), screen.get_height()))
background.fill("#353535")

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # --- Key + mouse placement logic ---
        if event.type == pygame.KEYDOWN:
            mouse_position = pygame.mouse.get_pos()
            col = mouse_position[0] // game_settings.COL_SIZE
            row = mouse_position[1] // game_settings.ROW_SIZE

            if 0 <= row < game_settings.NUM_OF_ROWS and 0 <= col < game_settings.NUM_OF_COLS:
                cell = (col, row)

                if event.key == pygame.K_g:
                    attempt_placement(GateTower, cell)
                elif event.key == pygame.K_p:
                    attempt_placement(PitTile, cell)
                elif event.key == pygame.K_t:
                    attempt_placement(BasicTower, cell)

    screen.blit(level_one.background, (0, 0))

    # --- Mouse position and placement logic ---
    mouse_position = pygame.mouse.get_pos()
    col = mouse_position[0] // game_settings.COL_SIZE
    row = mouse_position[1] // game_settings.ROW_SIZE
    mouse_position_in_bounds = (
        0 <= row < game_settings.NUM_OF_ROWS and
        0 <= col < game_settings.NUM_OF_COLS
    )

    if mouse_pressed := pygame.mouse.get_pressed(3)[0]:
        if mouse_position_in_bounds:
            cell = (col, row)
            attempt_placement(BasicTower, cell)

    # --- Spawn enemies periodically ---
    enemy_class = random.choice([GoblinSpearman, GoblinArcher, GoblinAxeman, GoblinMage, GoblinKing])
    if len(enemies) < game_settings.enemy_wave_size and pygame.time.get_ticks() - game_settings.tick_of_last_enemy_spawn > game_settings.enemy_spawn_interval:
        enemies.add(enemy_class(level_one))

    # --- Update and Draw ---
    enemies.update()
    towers.update()
    projectiles.update()

    enemies.draw(screen)
    for enemy in enemies:
        enemy.draw_health_bar(screen)
        enemy.draw_with_overlay(screen)

    towers.draw(screen)
    for tower in towers:
        tower.draw_health_bar(screen)

    projectiles.draw(screen)

    if mouse_position_in_bounds:
        mouse_cursor_position = pygame.Rect((col * game_settings.COL_SIZE, row * game_settings.ROW_SIZE),
                                            (game_settings.COL_SIZE, game_settings.ROW_SIZE))
        if level_one.blocked_tiles[row][col]:
            screen.blit(mouse_cursor_inactive, mouse_cursor_position)
        else:
            screen.blit(mouse_cursor_active, mouse_cursor_position)

    # --- Display UI ---
    font = pygame.font.Font(pygame.font.get_default_font(), 24)
    text = font.render(f"${game_settings.player_money}", True, (255, 255, 255))
    screen.blit(text, (40, game_settings.GAME_HEIGHT - 60))

    pygame.display.flip()
    game_settings.dt = clock.tick(game_settings.fps) / 1000.0
