namespace DunnMod7Lab;

class Lightsaber : Product // is-a relationship
{
    public string BeamColor { get; set; }

    public Lightsaber()
    {
        Console.Write("What is the color of your lightsaber? ");
        BeamColor = Console.ReadLine();
    }

    public Lightsaber(string name, double price, string description, string beamColor) : base(name, price, description)
    {

        BeamColor = beamColor;

    }

    public override string ToString()
    {
        return base.ToString() + "\n\tBeam Color " + BeamColor;
    }
}
