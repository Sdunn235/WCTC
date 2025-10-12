namespace DunnMod6Lab;

class Rollercoaster
{

    public string Name { get; set; }
    public double Height { get; set; }
    public double Speed { get; set; }

    // if we do not include a constructor, it will make one with no parameter for us
    // -if we have any constructor, it does not to this
    public Rollercoaster(string name, double height, double speed)
    {
        Name = name;
        Height = height;
        Speed = speed;
    }

    // the keyword overide means replace the parent member
    // object (great grand parent of everything) has a method called ToString
    public override string ToString()
    {
        return $"{Name}:\n\tHeight: {Height}ft\n\tSpeed: {Speed}MPH";
    }
}

