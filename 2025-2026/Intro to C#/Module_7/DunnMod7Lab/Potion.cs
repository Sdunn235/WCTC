using System.Drawing;

namespace DunnMod7Lab;
class Potion : Product, ISize //is-a
{
    public string Effect { get; set; }

    public string Size { get; set; }
    public Potion()
    {
        Console.Write("What is the effect of the potion: ");
        Effect = Console.ReadLine();
        Console.Write("Whate is the size of the potion: ");
    }
    public Potion(string name, double price, string description, string effect) : base(name, price, description)
    {
        Effect = effect;
        Size = "small";
    }
    public override string ToString()
    {
        return base.ToString() + "\n\tEffect: " + Effect + "\n\t" + GetSize();
    }

    public string GetSize()
    {
        return $"The size is {Size}";
    }
}