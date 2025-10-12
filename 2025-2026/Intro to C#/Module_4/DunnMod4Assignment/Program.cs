namespace DunnMod4Assignment;

using DunnMod4Assignment.Helper;

class Program
{
    static void Main(string[] args)
    {
        Console.Clear();
        Console.WriteLine("----Lets Play with Numbers----");
        PlayWithNumbers();
    }

    static void PlayWithNumbers()
    {
        int evenCount = 0;
        int oddCount = 0;

        int startingNumber = Input.GetInt("\nPlease enter a starting number: ");
        int endingNumber = Input.GetInt("Please enter an ending number: ");
        while (endingNumber <= startingNumber)
        {
            Console.WriteLine("\nEnding number must be larger than starting number.");
            endingNumber = Input.GetInt("\tPlease enter an ending number: ");
        }
        for (int i = startingNumber; i <= endingNumber; i++)
        {
            if (i % 2 == 0)
            {
                evenCount++;
            }
            else
            {
                oddCount++;
            }

        }
        Console.WriteLine($"\nThere are {evenCount} even numbers.");
        Console.WriteLine($"There are {oddCount} odd numbers.");

    }



}
