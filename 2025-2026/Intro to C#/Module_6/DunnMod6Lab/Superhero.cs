namespace DunnMod6Lab;

class Superhero
{
    public string Name { get; set; }
    public string RealName { get; set; }


    // This runs everytime we say = new Superhero();
    public Superhero()
    {
        Console.Write("Enter the superhero's super name? ");
        this.Name = Console.ReadLine();
        Console.Write("Enter their real name: ");
        RealName = Console.ReadLine();
    }

    public Superhero(string name, string realName)
    {
        Name = name;
        RealName = realName;
    }


    public string GetInfo()
    {
        return $"{Name}'s secret identity is {RealName}.";
    }
}