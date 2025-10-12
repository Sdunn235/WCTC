namespace DunnMod7Lab;

abstract class Product
{
    public string? Name { get; set; }
    public double Price { get; set; }
    public string? Description { get; set; }

    public Product()
    {
        Console.WriteLine("What product are you adding? ");
        Name = Console.ReadLine();

        Console.WriteLine($"How much is {Name}: $");
        Price = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine($"Write a short description {Name}: $");
        Description = Console.ReadLine();

    }

    public Product(string name, double price, string description)
    {
        Name = name;
        Price = price;
        Description = description;
    }

    public override string ToString()
    {
        return $"{Name}:\n\tPrice: {Price:C}\n\tDescription: {Description}";
    }
}