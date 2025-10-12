# Step 2 Task List
Choose options to complete. You should at least complete enough options to earn the full 20 points. Extra work will contribute towards the 20 points, but will not contribute to rest of your overall grade. Each item below has a section for student comments--please fill this out for each option you attempted/completed describing how you did so.

---
***Background Image (5 points)***
- Download or create a tile set. Using a software such as tiled, create a background that is cohesive with the project and add it to your game. 

Student Comments:
A custom background image titled `Brick-Away-Background.png` was created and added to the game. It visually complements the game's neon-retro theme and covers the entire screen using the `load_and_scale_image` utility.

---
***Randomized Ball Start (5 points)***
- Have the ball start in a random downward direction when the user presses spacebar. This should work with the existing structure of the game (i.e. keep track of the angle)

Student Comments:
Implemented random ball direction logic when the player hits spacebar to launch. The ball now launches at a random horizontal angle while preserving a consistent downward trajectory using `random.uniform()` in the Ball class.

---
***Brick Sprites (5 points)***
- Create image sprites for you bricks. Upon being struck, a brick should change its sprite to show signs of damage (i.e. cracks, breaks, etc.). This will replace the functionality of the color dictionary

Student Comments:
Instead of flat colors, damage stages now use separate image sprites based on HP percentages through a dictionary of asset paths. As bricks are damaged, their image updates to reflect cracks, visually indicating hit points remaining.

---
***Informative Text (5 points)***
- Add text to the game. At a minimum, the text should inform the user to hit spacebar to start (leaving after the user hits spacebar) and when the game is over (appearing only after the user loses)

Student Comments:
Added dynamic on-screen text using a `draw_text` function. Instructions to "Press SPACE to Launch Ball" appear at the start, and "GAME OVER" + retry instructions show upon losing. This is accompanied by a glowing animated effect for visual clarity.

---
***Player Life (10 points)***
- Keep track of the player life. The player life should go down when a ball makes it past the user's platform. The players number of lives should be displayed on the screen. 
- After the ball goes of the screen, another one should take its place

Student Comments:
A life counter was implemented and displayed in the top-left corner of the screen. Losing a ball reduces the life count. If lives remain, the game resets the ball only; if not, a "game over" screen is shown. Extra balls from power-ups do not affect life count. Also added in a score counter and timer

---
***Additional Levels (10 points)***
- Add one or more additional levels to the game. These levels should appear after the user has cleared all of the bricks in the current level. 
- Each level should be unique--this could be done with brick layout, brick hit points, etc.

Student Comments:
(⚠️ Not yet implemented — this feature is planned for a future update after power-up refinement and bug fixing.)

---
***Power Up Bricks (15 points)***
- Include at least two different power up bricks. Upon breaking a power up brick, the user should receive some sort of benefit. This benefit could be additional game balls, a longer platform, a damage increase, etc.
- You are responsible for implementing at least two powerups. The brick should have a visual que to inform that it is a power up brick

Student Comments:
Implemented 4 power-up brick types: `EXTRA_BALL`, `BALL_GROW`, `BALL_DAMAGE_UP`, and `BONUS_POINTS`. Each is defined by an Enum and has a matching image sprite. The effects trigger on brick destruction and include adding a ball, enlarging the current ball, increasing ball damage, and awarding bonus points. Only the original ball causes game overs—extra balls don’t count toward lives.

