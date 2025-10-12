namespace DunnMod7Lab;

// Child : ParentClass
// -the child class will inherit everything form the parent (Name, Manufacturer, Min Age)
class Lego : Toy
{
    public int ItemNumber { get; set; }

    public int Pieces { get; set; }

    public Lego()
    {
        ItemNumber = 0;
        Pieces = 0;
    }

    public Lego(string name, int minAge, int itemNumber, int pieces)
    {
        Name = name;
        // The keyword base means parent
        base.Manufacturer = "Lego";
        MinAge = minAge;
        ItemNumber = itemNumber;
        Pieces = pieces;
    }
}