class Entity:
    def __init__(self, name):
        self.name = name
        print(f"[Entity] {self.name} created.")

    def update(self):
        print(f"[Entity] Updating {self.name}.")


class Character(Entity):
    def __init__(self, name, health):
        super().__init__(name)
        self.health = health
        print(f"[Character] {self.name} has {self.health} HP.")

    def update(self):
        super().update()
        print(f"[Character] {self.name}'s health: {self.health}")


class Wizard(Character):
    def __init__(self, name, health, mana):
        super().__init__(name, health)
        self.mana = mana
        print(f"[Wizard] {self.name} has {self.mana} mana.")

    def update(self):
        super().update()
        print(f"[Wizard] {self.name}'s mana: {self.mana}")


class BattleWizard(Wizard):
    def __init__(self, name, health, mana, level):
        super().__init__(name, health, mana)
        self.level = level
        print(f"[BattleWizard] {self.name} is level {self.level}.")

    def update(self):
        super().update()
        print(f"[BattleWizard] {self.name} calculates tactics.")
