namespace DunnMod6Lab;

class Ingredient
{
    public string Name { get; set; }

    public double Quantity { get; set; }

    public string Measurement { get; set; }


    public Ingredient()
    {
        Console.Write("What is the name of the ingredient?: ");
        Name = Console.ReadLine();

        Console.Write($"What unit of measurement does {Name} need?: ");
        Measurement = Console.ReadLine();

        Console.Write($"How many {Measurement}s of {Name} is needed?: ");
        Quantity = Convert.ToInt32(Console.ReadLine());
    }

    public override string ToString()
    {
        return $"{Quantity} {Measurement}(s) {Name}";
    }
}