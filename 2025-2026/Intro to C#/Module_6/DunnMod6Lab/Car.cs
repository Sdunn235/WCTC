namespace DunnMod6Lab;


// A class is a blueprint for an object
class Car
{
    // property - a variable stored inside of a class (object)
    //  0. (optional) our access modifier
    //  1. datatype
    //  2. VariableName (UpperCamelCase)
    //  3. Getters and Setters
    //      -getter (accessor) - the ability to read data
    //      -setter (mutator)  - the ability to update data



    public string VIN { get; set; }
    public int Year { get; set; }

    public string Make { get; set; }

    public string Model { get; set; }

    public string Color { get; set; }

    // Constructor Method
    //  -A method that says how to build an object
    //  - A special method
    //      1. it has no return type (it returns itself)
    //      2. it shares its name with the class (it must do this)

    public Car()
    {
        Console.Write("What is the make of the car? ");
        Make = Console.ReadLine();

        Console.Write($"What model {Make} do you have? ");
        Model = Console.ReadLine();

        Console.Write($"What year is you {Make} {Model}: ");
        Year = Convert.ToInt32(Console.ReadLine());
        Console.Write($"What is the VIN of your {Year} {Make} {Model}: ");
        VIN = Console.ReadLine();

        Console.Write($"What is the color of your {Year} {Make} {Model}: ");
        Color = Console.ReadLine();
    }


    // Overloading a method
    // - Having multiple methods with the same name but a different signature
    //      - a signature is the name and number and type of paramaters

    public Car(string vin, string make, string model, int year, string color)
    {
        VIN = vin;
        Make = make;
        Model = model;
        Year = year;
        Color = color;
    }


}