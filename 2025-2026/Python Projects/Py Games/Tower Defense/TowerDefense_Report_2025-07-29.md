# 🧠 Tower Defense Project Development Report  
**Dates Covered:** July 22–29, 2025  
**Student:** Shawn James Dunn  
**Project:** Python Tower Defense Game  
**Instructor Report Summary**

---

## 🛠️ Development Focus
> This week was not about adding flashy content, but about **stabilizing and restoring the core systems** after a major modularization initiative. The work reflects **mature software design practices**.

### ✅ Primary Goals:
1. **Restore core gameplay functionality** after a heavy codebase modularization.
2. Refactor and **centralize projectile logic and configuration**.
3. **Reinstate tower projectile attacks** and visual effects.
4. Implement special rules for **GateTower** and **PitTile** behavior.
5. Lay the groundwork for a new **enemy-Gate interaction system**.

---

## 🔁 Refactoring & Restoration

### 1. Projectile System Overhaul
- **Before:** Logic for projectiles was hard-coded and mixed within tower or enemy classes.
- **Now:** We split this into three files:
  - `projectile.py`: core logic and rendering
  - `projectile_config.py`: stats, effects, image paths
  - `projectile_type.py`: placeholder logic for future dynamic handling
- 🧪 **Challenge:** Effects like "burn" and "slow" weren’t applying correctly after the split.
- ✅ **Solution:** Re-centered all logic through the `effects` field in `PROJECTILE_STATS`, removed unreliable `projectile_variant` code, and ensured consistent logic flow from towers to projectile launch.

### 2. Tower Logic Reintegration
- **Restored** `BasicTower`, `GateTower`, and `PitTile` behavior using the modular files:
  - `tower.py`, `tower_type.py`, `tower_config.py`
- ✅ Towers now:
  - Track cooldowns
  - Launch projectiles
  - Show effects visually (like overlays for slow)

---

## 🧱 Special Tile Logic & Placement Rules

### 3. GateTower Special Rules
- Must be placed **centered on a path tile**, with adjacent left/right or up/down path clearance.
- **Rotates** automatically based on path direction.
- 🧪 **Challenge:** Ensuring only valid placements based on direction and tile availability.
- ✅ **Solution:** Custom placement logic added, with visual rotation adjustments tied to path data.

### 4. PitTile Rules
- Can be placed on the path but:
  - Cannot be damaged
  - Cannot be targeted
  - Does not interfere with other towers
- ✅ Adjusted `can_be_destroyed = False` and made enemies **ignore PitTiles** in targeting logic.

---

## ⚔️ Gate Combat System Foundation (In Progress)

### 5. Hybrid Gate Combat Concept (Phase 1 begun)
- Designed a system to:
  - Allow a **limited number of enemies to attack the Gate**
  - Stagger overflow enemies into a **holding or bouncing pattern**
  - Plan for **ranged enemies to attack from behind**
- ✅ Phase 1 started: Created engagement cap logic and prep for stagger/queue system

---

## 🔍 Debugging & Design Iterations

- Revisited **old working versions** of code (projectile and tower logic) to compare against broken modular versions
- **Rebuilt** from the ground up rather than patching
- Spent considerable time **troubleshooting regressions** caused by modularization
- Tested placement, damage, visuals, and tower firing logic to ensure proper integration

---

## 📦 Summary of Deliverables This Week

| System | Status | Notes |
|--------|--------|-------|
| Modular projectile system | ✅ Restored | Using centralized `projectile_config.py` |
| Tower projectile logic | ✅ Restored | Functional with cooldown, image, effects |
| GateTower behavior | ✅ Working | Placement, rotation, engagement cap started |
| PitTile behavior | ✅ Working | Ignores damage and targeting |
| Enemy-Gate interaction system | ⚙️ In progress | Staggering logic and overflow queue |
| Code structure | 🧱 Modular | Easier future expansion and clarity |

---

## 📌 Conclusion
While there was **minimal surface-level content added**, this week was pivotal. You focused on **system integrity**, cleaned up past issues, and established a **reliable modular foundation**. This was a *high-effort but low-visible-yield* phase—exactly the kind of invisible architecture that enables real growth and scalability later.

You did real engineering here, not just game tinkering.

---

## 🧪 Feature Development Timeline: July 22–29, 2025

### 📅 Tuesday Night, July 22, 2025 – Project State:
At this point, the Tower Defense game had several feature concepts **present in code** but not functioning correctly due to fragmented logic from previous partial refactors. Notable elements included:

- 🧙‍♂️ **MageTower** existed and launched projectiles but used legacy logic and hardcoded values.
- ❄️ **Status Effects** like `slow` and `poison` were implemented using `projectile_variant` flags but lacked reliability.
- 👑 **King’s Aura** concept existed (providing buffs to nearby towers), but functionality was placeholder-only, lacking full radius or stat boost integration.
- 🎯 **Projectile logic** was spread out and tied deeply into individual tower or enemy scripts, leading to maintenance headaches.
- 🧱 **GateTower and PitTile** had unique logic requests, but implementation had not begun.

---

### 🗓️ Progress from Wednesday to Tuesday Night (7/23–7/29)

### 🔧 Modularization and Restoration
- **Centralized all projectile data** into `projectile_config.py`, defining:
  - `fire_arrow`: deals burn damage over time
  - `ice_arrow`: slows enemies by a % for a duration
- Replaced messy `projectile_variant` logic with clean `effects` arrays handled dynamically per projectile
- Laid foundation for `projectile_type.py` to allow future unique projectile classes or behaviors
- Reconnected **MageTower** to this new system and ensured proper image, damage, and effect logic flows through it

### 🌀 Status Effects Overhaul
- **Refactored how effects apply to enemies**:
  - Created structured hooks for applying status conditions
  - Visual overlays for effects like `slow` were restored and functional
- Planned future extensibility for:
  - Stackable or refreshable effects
  - Damage-over-time ticks (e.g., burn)
  - Icon or UI representation of current enemy status

### 👑 King's Aura Planning
- Designed the logic for:
  - AoE detection of nearby towers
  - Stat modifications to firing rate, damage, or range
- Added config-level placeholder for aura effects
- Outlined optional future visuals (e.g., aura ring or highlight)
- ✨ Work here is in **design phase**, pending implementation priority

### 🧱 GateTower & PitTile Overhaul
- Implemented **custom placement rules**:
  - Gate must be centered on a path with adjacent clearance
  - PitTile must sit on a path, be untargetable, undamageable, and not block towers
- GateTower now rotates visually based on horizontal/vertical orientation
- Initial work started on enemy-gate **engagement cap logic**

### 🛠️ Testing, Cleanup, and Infrastructure
- **Referenced legacy code** to repair logic breakages from modular split
- Rebuilt firing and cooldown handling in `tower.py` for all towers
- Restored compatibility between `tower_type.py`, `tower_config.py`, and live sprite behavior
- Setup the game for **scalable future tower effects and projectile variants** without bloating core logic

---

## 🌟 Impact Summary
The project advanced from a fragile post-refactor state to a **functional and scalable architecture**.  
You not only brought back missing gameplay functionality —  did so in a way that **prepares the entire system for future feature growth**:

- 🔁 Tower effects are now modular
- 🎯 Projectiles and visual effects are consistent
- 📐 Unique towers like Mage and King are now structurally supported
- ⚙️ New enemy logic (Gate overflow, stagger) is being prepared intelligently

This wasn’t just fixing code — it was setting up a long-term design vision.

