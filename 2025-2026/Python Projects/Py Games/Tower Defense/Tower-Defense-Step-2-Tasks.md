# Step 2 Task List
Choose options to complete. You should at least complete enough options to earn the full 20 points. Extra work will contribute towards the 20 points, but will not contribute to rest of your overall grade. Each item below has a section for student comments--please fill this out for each option you attempted/completed describing how you did so.

---
***Tower Sprite (5 points)***
- Download or create a sprite that will serve as the image for the towers. This only needs to be a singular image, but you could an animation if you would like.

Student Comments: A custom tower sprite was created and scaled to match the grid size of the game. We ensured the image ratio fit properly using load_and_scale_image() from a shared image_utils.py file. Earlier iterations included image ratio issues, which were resolved by enforcing a standard tower sprite size (100x100). The sprite was then used to instantiate towers on mouse clicks, with consistent positioning on the grid.


---
***Projectile Sprite (5 points)***
- Download or create a sprite that will serve as the image for the projectiles. This only needs to be a singular image, but you could an animation if you would like.
- The projectile will need to be rotated upon firing so the projectile appears to be aiming the correct way. Sprites that do not need rotation will not be counted for this option.

Student Comments: The projectile sprite was created as a distinct image, then dynamically rotated in code using rotate_image_to_velocity() to ensure the projectile always faces the direction of movement. Rotation was key for visual clarity and aiming feedback. We encountered alignment issues early on, but corrected those by anchoring the sprite to the projectile’s vector direction.


---

***Balance: Waves (5 points)***
- Add waves of enemies to the game. These waves should increase in difficulty. Spawn rates, wave sizes, and enemy hit points are some ways you can do this.
- i.e. 10 enemies spawn at the start, 20 enemies spawn 5 seconds later after the previous wave, 30 enemies spawn 5 seconds after the previous wave, etc. 
- Work with bounty adjustments so the game is not too easy

Student Comments: We implemented a single wave through level_data.py. The structure allows for scaling up waves, but additional wave logic hasn’t been added yet. Current spawn logic was tested for delay and spawn rate. Future goal is to include scaling HP and increasing enemy count per wave.


---

***Informative Text (5 points)***
- Add text to the game. At a minimum, the text should inform the user how to build towers and and when the game is over (appearing only after the user loses).

Student Comments: Student Comments:
Basic text is displayed to inform the player of lives and tower costs. Game over condition is coded but not yet fully implemented visually (i.e., "Game Over" text not showing on screen). This is a planned enhancement.




---

***Enemy Sprites (10 points)***
- Download or Create sprites for the enemies. 
- Enemies should have at least three sprites in their sprite sheet--moving down (positive y), moving left or right (x != 0), and moving up (negative y). These should be visually different.

Student Comments: Directional enemy sprites were implemented with 4-way movement: up, down, left, right. Each direction has distinct frames pulled from sprite sheets. We debugged animation timing, direction switching, and frame indexing. Sprites are fully animated and reflect movement.




---

***Enemy HP Bar (10 points)***
- Put a health bar above the enemy. This should visually indicate the current hit points of the enemy out of the total hit points of the enemy.
- The health bar should stay with the enemy--you can leverage the enemies position to do this.

Student Comments: A health bar was implemented for each enemy using a separate HealthBar class. The bar updates in real-time as enemies take damage and is anchored above each enemy using their rect position. Scaling and positioning were adjusted for readability.


---

***Player Life (10 points)***
- Keep track of the player life. The player life should go down when a enemy makes it through the maze. The players number of lives should be displayed on the screen. 


Student Comments:


---

***Extra Levels (10 points)***
- Add one or more additional levels to the game. These levels should appear after the user has cleared the level by a predefined metric, i.e. 5 waves completed, 100 enemies defeated, etc.
- Each level should be unique--a new map is required but you could also add different enemies or towers.

Student Comments: Not implemented yet. We only have one level currently using level_one data. The framework is in place to support more, but no additional levels have been defined or triggered through progression.


---

***New Towers (15 points)***
- Include at least one additional tower to the game. Make sure the user is aware how to add this tower, i.e. right click instead of left click.
- The new tower should have different mechanics such as rapid fire or splash damage. Updating the cost and damage alone is not enough and will result in a penalty.
- Inherit the new tower from the Tower class.

Student Comments: Not implemented yet. Only one base tower is used. Codebase is structured with inheritance to allow more tower types in future (e.g., splash or rapid fire), but we have not yet added or differentiated any second tower type.


---