using DunnModule5Lab.Helpers;
namespace DunnModule5Lab;

class Program
{
    static void Main(string[] args)
    {
        Console.Clear();
        // ArrayPractice();
        // UFOSightings();
        // ListPractice();
        RockCollection(); 
        
    }

    static void RockCollection()
    {
        List<string> ourRocks = new List<string>();

        int menuChoice = RockCollectionMenu();
        while (menuChoice != 4)
        {
            if (menuChoice == 1)
            {
                Console.Write("\tEnter the name of your rock: ");
                ourRocks.Add(Console.ReadLine());
            }
            else if (menuChoice == 2)
            {
                Console.WriteLine("\nChoose a rock to delete: ");
                for (int i = 0; i < ourRocks.Count; i++)
                {
                    Console.WriteLine($"{i + 1}:{ourRocks[i]}");
                }
                int indexToRemove = Input.GetInt("Which one: ");
                ourRocks.RemoveAt(indexToRemove - 1);
            }
            else if (menuChoice == 3)
            {
                for (int i = 0; i < ourRocks.Count; i++)
                {
                    Console.WriteLine(ourRocks[i]);
                }
            }


            Console.WriteLine();
            menuChoice = RockCollectionMenu();
        
        }
    }

    static int RockCollectionMenu()
        {

            return Input.GetInt("----Rock Collector Menu----\n\t1. Add a rock1\n\t2. Remove a rock\n\t3. List Rocks\n\t4. End Program\n\tChoice: ");


        }

    static void ListPractice()
    {
        // T stands for datatype (int, string, double)
        // Creation of a list:
        // 1. List Keyword followed by a datatype in < >
        // 2. Variable name
        // 3. Assignment operator (=)
        // 4. new Keywords says we are making a list object
        //      -an object is an instance of a class
        // 5. Constructor Method
        //      -a method that says how to build
        //      -Typically it is the datatype followed by()


        List<string> colors = new List<string>();


        //List objects come with lots of method
        // the add method will add something to the end of our list
        //  -add creates a new spot in memory, then puts the argument there
        colors.Add("purple-love");
        colors.Add("Sparkling Clean Green");
        colors.Add("Marshmellow");

        // you can index a list just like an array
        Console.WriteLine(colors[0]);

        for (int i = 0; i < colors.Count; i++)
        {
            Console.WriteLine(colors[i]);
        }

        List<string> buggies = new List<string>();

        Console.Write("What is a cool bug? (to end type DONE) ");
        string bugName = Console.ReadLine();
        while (bugName != "DONE")
        {
            buggies.Add(bugName);
            Console.Write("Enter another bug or type DONE to end: ");
            bugName = Console.ReadLine();
        }

        for (int i = 0; i < buggies.Count; i++)
        {
            Console.WriteLine(buggies[i]);
        }

    }

    static void UFOSightings()
    {
        string[] dayOfWeek = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };
        int[] sightings = new int[dayOfWeek.Length];

        // When looping through arrays, for loops generally work best
        for (int i = 0; i < dayOfWeek.Length; i++)
        {
            // Console.WriteLine($"Enter the amount of sightings on {dayOfWeek[i]}: ");
            // sightings[i] = Convert.ToInt32(Console.ReadLine());
            sightings[i] = Input.GetInt($"Enter sightings on {dayOfWeek[i]}: ");

        }

        // Array.Sort(dayOfWeek);
        // Array.Sort(sightings);
        Array.Sort(sightings, dayOfWeek);
        Array.Reverse(sightings);
        Array.Reverse(dayOfWeek);

        for (int i = 0; i < dayOfWeek.Length; i++)
        {
            Console.WriteLine($"{dayOfWeek[i]}:  \t{sightings[i]}");
        }

    }

    static void ArrayPractice()
    {
        // Arrays
        // -collection (multiple values inside of one variable)
        // -every value shares the same data type 
        // -*typically* when we see []'s that means an array (or some other collection)
        // - arrays cannot change size once they have values in them

        // Creation of an Array
        // 1. datatype followed by []
        // 2. variable name
        // 3. Assignment operator
        // 4. Keyword new -- create a new instance of a class (object)
        // 5. what type of object doe we want --> datatype[n] where n is the number of items in the array
        string[] magicCards = new string[3];

        // indexing arrays--looking at a spot number in the array
        // -the first spot in an array is spot number 0
        // -variableName[n] where n is the spot you want to look at
        magicCards[0] = "Black Lotus";
        magicCards[1] = "Jumbo Cactaur";
        magicCards[2] = "Pot of Greed";
        // We cant fo out of the bounds of the array
        // magicCards[3] = "Pickachu";

        Console.WriteLine(magicCards[0]);
        Console.WriteLine(magicCards[1]);
        Console.WriteLine(magicCards[2]);
        Console.WriteLine(magicCards);


        // variables store values
        // functions store code
        // property is a variable inside of a class(object)
        // method is a function inside of a class (object)

        // an instance of a class is an object
        for (int i = 0; i < magicCards.Length; i++)
        {
            Console.WriteLine(magicCards[i]);
        }


        int numOfCDs = Input.GetInt("How many CD's do you want to collect?: ");
        string[] myCDs = new string[numOfCDs];

        // Length is a property that is part of every array
        // -its not static which means each array has its own length

        for (int i = 0; i < myCDs.Length; i++)
        {
            Console.WriteLine($"Enter the name of the CD {i + 1}");
            myCDs[i] = Console.ReadLine();
        }

        for (int i = 0; i < myCDs.Length; i++)
        {
            Console.WriteLine(myCDs[i]);
        }




        // if (numOfCDs >= 1)
        // {
        //     Console.Write("Enter the name of the CD 1: ");
        //     myCDs[0] = Console.ReadLine();
        // }
    }
}
