using DunnModule5Assignment.Helpers;
namespace DunnMod5Assignment;

class Program
{
    static void Main(string[] args)
    {
        Console.Clear();
        PopCollection();

    }

    static void PopCollection()
    {
        List<string?> ourPop = new List<string?>();

        while (true)
        {
            string? menuChoice = PopCollectionMenu();
            string? menuChoiceUpper = menuChoice.ToUpper();

            if (menuChoiceUpper == "A")
            {
                // Ask user for the soda name
                Console.Write("\tEnter the name of your soda: ");
                string? sodaName = Console.ReadLine();

                // Add the soda to the end of the list
                ourPop.Add(sodaName);

                Console.WriteLine($"\tAdded: {sodaName}\n");
            }
            // If the choice is B buy a soda (remove last one added)
            else if (menuChoice == "B")
            {
                // Check if there are sodas to buy
                if (ourPop.Count == 0)
                {
                    Console.WriteLine("\tMachine is empty.\n");
                }
                else
                {
                    // Find the index of the last soda in the list
                    int lastIndex = ourPop.Count - 1;

                    // Get the name of that soda before removing it
                    string? bought = ourPop[lastIndex];

                    // Remove the last soda LIFO behavior
                    ourPop.RemoveAt(lastIndex);

                    // Tell the user what they bought
                    Console.WriteLine($"\tYou bought a {bought}\n");
                }
            }
            // If the choice is E exit the loop and end program
            else if (menuChoiceUpper == "E")
            {
                Console.WriteLine("\tGoodbye!");
                break;
            }
            else
            {
                Console.WriteLine($"\t{menuChoice} is not a valid option.\n");
            }
        }
    }

    static string? PopCollectionMenu()
    {
        return Input.GetString("----Soda Pop Vending Machine----\n\tA - Add Item, B - Buy Item, E - End: ");
    }
}
