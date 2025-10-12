namespace DunnMod7Lab;




class Program
{
    static void Main(string[] args)
    {
        // Toy toyExampleOne = new Toy("Temple City", "Lego", 14);

        // toyExampleOne.Name = "Temple City";
        // toyExampleOne.Manufacturer = "Lego";
        // toyExampleOne.MinAge = 14;


        // Lego legoExampleOne = new Lego("HP Castle", 14, 71023, 6020);
        // legoExampleOne.Name = "HP Castle";
        // legoExampleOne.Manufacturer = "Lego";
        // legoExampleOne.Name = "14";
        // legoExampleOne.ItemNumber = 71023;
        // // legoExampleOne.Pieces = 6020;

        // Bicycle quinnsBike = new Bicycle("Fluid 7.1HT", "Norco", 13, 12, false);



        // List<Toy> myToys = new List<Toy>();
        // myToys.Add(legoExampleOne);
        // myToys.Add(quinnsBike);


        // for (int i = 0; i < myToys.Count; i++)
        // {
        //     Console.WriteLine($"{i + 1}: {myToys[i].Name}");
        // }


        List<Product> products = new List<Product>();
        products.Add(new Lightsaber());
        products.Add(new Lightsaber("Anakins", 200, "Anakins Blue Lightsabers","Green"));
        products.Add(new Potion("Dragons Breath", 900, "Breath Fire Outward", "Fire"));
        for(int i = 0; i < products.Count; i++)
        {
            Console.WriteLine(products[i]);
        }

        // products.Add(new Product());
        // products.Add(new Product("OLED TV", 599.99, "This is a neat TV!"));

    }
}
