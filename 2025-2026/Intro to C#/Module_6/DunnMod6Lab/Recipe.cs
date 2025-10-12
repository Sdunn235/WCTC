namespace DunnMod6Lab;

class Recipe
{
    public string Name { get; set; }

    public List<Ingredient> Ingredients { get; set; }

    public Recipe()
    {
        Console.Write("What recipe do you want to make: ");
        Console.ReadLine();

        Ingredients = new List<Ingredient>();
        while (true)
        {
            Console.WriteLine();
            Ingredients.Add(new Ingredient());
            Console.Write("Do you want to add another ingredient y/n: ");

            if (Console.ReadLine() == "n")
            {
                break;
            }
        }
    }

    public override string ToString()
    {
        string output = $"====Recipe for {Name}====";

        for (int i = 0; i < Ingredients.Count; i++)
        {
            output += $"\n\t{Ingredients[i]}";
        }

        return output;
    }
}