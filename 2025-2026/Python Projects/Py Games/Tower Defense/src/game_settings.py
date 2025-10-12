# game_settings.py
# Tower Defense Game - Game Settings Module
NUM_OF_COLS =18 # Number of columns in the game grid
NUM_OF_ROWS = 18 # Number of rows in the game grid
COL_SIZE = 32 # Size of each cell in the grid
ROW_SIZE = 32 # Size of each cell in the grid
GAME_HEIGHT = NUM_OF_ROWS * ROW_SIZE # Height of the game grid
GAME_WIDTH = NUM_OF_COLS * COL_SIZE # Width of the game grid


fps = 60    # Frames per second
dt = 0 # Delta time (time since last frame)

tick_of_last_enemy_spawn = 0 # Time of the last enemy spawn
enemy_spawn_interval = 500 # Interval between enemy spawns in milliseconds
enemy_wave_size = 10 # Number of enemies in each wave

player_money = 100 # Starting money for the player

hp_color = {}
hp_color[100] = "#44ce1b"  # Green for 100% HP
hp_color[90] = "#bbdb44"   # Light green for 90% HP
hp_color[80] = "#dbd144"   # Yellow for 80% HP
hp_color[70] = "#f7e379"   # Dark yellow for 70% HP
hp_color[60] = "#f7e379"   # Orange for 60% HP
hp_color[50] = "#f7e379"   # Red for 50% HP 
hp_color[40] = "#f7e379"   # Dark red for 40% HP
hp_color[30] = "#f2a134"   # Darker red for 30% HP
hp_color[20] = "#f2a134"   # Very dark red for 20% HP
hp_color[10] = "#e51f1f"   # Almost black for 10%
hp_color[0] = "#e51f1f"    # Black for 0% HP

# To do images for hp variations
# hp_images = {}    
# hp_images = {
#    100: "Tower Defense/src/images/hp/100.png",
#    90: "Tower Defense/src/images/hp/90.png",
#    80: "Tower Defense/src/images/hp/80.png",
#    70: "Tower Defense/src/images/hp/70.png",
#    60: "Tower Defense/src/images/hp/60.png",
#    50: "Tower Defense/src/images/hp/50.png",
#    40: "Tower Defense/src/images/hp/40.png",
#    30: "Tower Defense/src/images/hp/30.png",
#    20: "Tower Defense/src/images/hp/20.png",
#    10: "Tower Defense/src/images/hp/10.png",
#    0: "Tower Defense/src/images/hp/0.png"
#}


# Enemy configuration by type
ENEMY_STATS = {
    "GoblinSpearman": {
        "hp": 40,
        "damage": 10,
        "speed": 60,
        "bounty": 5,
        "attacks": 1,
        "range": 36,
        "cooldown": 0,
        "ranged": False,
        "behavior": "melee"
    },
    "GoblinAxeman": {
        "hp": 60,
        "damage": 20,
        "speed": 40,
        "bounty": 8,
        "attacks": 1,
        "range": 36,
        "cooldown": 0,
        "ranged": False,
        "behavior": "melee"
    },
    "GoblinArcher": {
        "hp": 35,
        "damage": 8,
        "speed": 70,
        "bounty": 6,
        "attacks": 1,
        "range": 120,
        "cooldown": 1,
        "ranged": True,
        "behavior": "ranged",
        "projectile_type": "arrow"
    },
    "GoblinMage": {
        "hp": 50,
        "damage": 15,
        "speed": 50,
        "bounty": 10,
        "attacks": 1,
        "range": 100,
        "cooldown": 3,
        "aoe_radius": 80,
        "effects": {
            "slow": {
                "amount": 2.0,  # Slow effect amount
                "duration": 5
            }
        },
        "ranged": True,
        "behavior": "aoe",
        "projectile_type": "magic"
    },
    "GoblinKing": {
        "hp": 100,
        "damage": 25,
        "speed": 45,
        "bounty": 25,
        "attacks": 2,
        "range": 36,
        "cooldown": 1,
        "ranged": False,
        "buff_stats": {
            "buff_radius": 100,
            "hp_buff": 20,
            "damage_buff": 1.5,
            "speed_buff": 1.2,
            "cooldown_buff": 0.8,
            "range_buff": 1.3,
            "projectile_type": "king_buff",
        },

        "behavior": "boss"
    }
}