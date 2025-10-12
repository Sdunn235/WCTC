namespace DunnMod7Lab;


// A bade class or parent class is used to create other class (child)
abstract class Toy
{
    public string Name { get; set; }

    public string Manufacturer { get; set; }
    public int MinAge { get; set; }

    public Toy(string name, string manufacturer, int minAge)
    {
        Name = name;
        Manufacturer = manufacturer;

        MinAge = minAge;


    }


    // This is referred as:
    //  -default constuctor
    //  -no arg constructor
    //  -no 
    public Toy()
    {        
        Name = "";
        Manufacturer = "";
        MinAge = 0;
    }
}