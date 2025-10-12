namespace DunnMod7Lab;

class Bicycle : Toy
{
    public int Speeds { get; set; }
    public bool HasTrainingWheels { get; set; }

    public Bicycle(string name, string manufacturer, int minAge, int speeds, bool hasTrainingWheels)
    {
        Name = name;
        Manufacturer = manufacturer;
        MinAge = minAge;
        Speeds = speeds;
        HasTrainingWheels = hasTrainingWheels;
    }
}