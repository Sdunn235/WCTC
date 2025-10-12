
const int TOTAL_SERVINGS = 2; // Do variables in C# always have to told if they are strings, int, doubles, ect?
const int CALORIES = 110;
const int SUGAR = 27;
const int CAFFEINE = 80;

Console.Write("How many cans of Monster did you drink today?: ");
int cansOfMonster = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("You consumed: ");
Console.WriteLine($"\t{cansOfMonster * TOTAL_SERVINGS * CALORIES} calories.");
Console.WriteLine($"\t{cansOfMonster * TOTAL_SERVINGS * SUGAR}g of sugar.");
Console.WriteLine($"\t{cansOfMonster * TOTAL_SERVINGS * CAFFEINE}mg of caffeine");




 