namespace DunnMod6Lab;

class Program
{
    static void Main(string[] args)
    {
        Console.Clear();

        CookBook();
    }

    static void CookBook()
    {
        Recipe userRecipe = new Recipe();
        Console.WriteLine(userRecipe);
    }

    static void TopThreeRollerCoasters()
    {
        List<Rollercoaster> rollercoasters = new List<Rollercoaster>();
        Rollercoaster cheetah = new Rollercoaster("Cheetah Hunt", 102, 60);
        rollercoasters.Add(cheetah);
        rollercoasters.Add(new Rollercoaster("Raging Bull", 202, 703));
        rollercoasters.Add(new Rollercoaster("Zingo", 86, 50));

        for (int i = 0; i < rollercoasters.Count; i++)
        {
            Console.WriteLine(rollercoasters[i]);
        }
    }

    static void SuperheroTracker()
    {
        List<Superhero> superheroes = new List<Superhero>();

        Superhero ourFavoriteSuperHero = new Superhero("Batman", "Bruce");
        superheroes.Add(ourFavoriteSuperHero);

        superheroes.Add(new Superhero("Ironman", "Tony Stark"));
        superheroes.Add(new Superhero());

        for (int i = 0; i < superheroes.Count; i++)
        {
            Console.WriteLine(superheroes[i].GetInfo());
        }
    }

    static void PracticeOne()
    {
        // Whenever you create a class, that class is a datatype
        //  -new means we are creating an instance of a class (object)
        //  -after new we give it a constructor method which is the class followed my ()

        Car patricksCar = new Car();

        // To use a properties setter method we do the objectName.PropertyName = value;
        // patricksCar.VIN = "ABC123";
        // patricksCar.Make = "Honda";
        // patricksCar.Model = "Odyssey";
        // patricksCar.Year = 2010;
        // patricksCar.Color = "Gold";

        Car quinnsCar = new Car("BCD234", "Nissian", "Sentra", 2015, "Aspen White");
        // quinnsCar.VIN = "BCD234";
        // quinnsCar.Make = "Nissan";
        // quinnsCar.Model = "Sentra";
        // quinnsCar.Year = 2015;
        // quinnsCar.Color = "Aspen White";

        Console.Clear();
        Console.WriteLine($"Patrick's car is a {patricksCar.Year} {patricksCar.Make} {patricksCar.Model}.");
        Console.WriteLine($"Quinn's car is a {quinnsCar.Year} {quinnsCar.Make} {quinnsCar.Model}.");



        Pokemon ourFavorite = new Pokemon();
        ourFavorite.Name = "Magikarp";
        ourFavorite.Type = "Water";
        ourFavorite.Moves = new List<string>();
        ourFavorite.Moves.Add("Splash");
        ourFavorite.Moves.Add("Jump");

        Console.WriteLine($"{ourFavorite} has the following moves: ");
        for (int i = 0; i < ourFavorite.Moves.Count; i++)
        {
            Console.WriteLine(ourFavorite.Moves[i]);
        }
    }

    
}
