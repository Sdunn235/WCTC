namespace DunnModule3Lab;

class Program
{
    static void Main(string[] args)
    {
        RunPriceEvaluator();
    }

    private static void RunPriceEvaluator()
    {
        int days = GetInt("How many days are you traveling: ");
        int megabytes = GetInt("How many MB's per day do you expect to use: ");

        double bigDayPrice = CalculateBigDayPrice(days);
        double touristPrice = CalculateTouristPrice(days, megabytes);
        double adventurePrice = CalculateAdventurePass(days, megabytes);

        GiveBestValue(bigDayPrice, touristPrice, adventurePrice);
    }

    // It doesn't matter where this method is defined (so long as it is in the same scope)
    private static int GetInt(string prompt)
    {
        Console.Write(prompt);
        int userInt = Convert.ToInt32(Console.ReadLine());
        return userInt;
    }
    //CalculateBigDayPrice calculates the cost of data per day at $10 per day
    private static double CalculateBigDayPrice(int days)
    {
        //10 is in dollars
        return days * 10;
    }

    //CalculateBigDayPrice calculates the cost of data per MB at $0.20 per MB per day
    private static double CalculateTouristPrice(int days, int megabytes)
    {
        //0.20 is in dollars
        return days * megabytes * 0.20;
    }

    //CalculateAdventurePass calculates the cost per day and MB used
    private static double CalculateAdventurePass(int days, int megabytes)
    {
        return (3.0 * days) + (days * megabytes * 0.1);
    }

    private static void GiveBestValue(double bigDayPrice, double touristPrice, double adventurePrice)
    {
        if (bigDayPrice < touristPrice && bigDayPrice < adventurePrice)
        {
            Console.WriteLine($"The big day price is the best value at {bigDayPrice:C}");
        }
        else if (touristPrice < bigDayPrice && touristPrice < adventurePrice)
        {
            Console.WriteLine($"The tourist pass is the best value at {touristPrice:C}");
        }
        else if (adventurePrice < bigDayPrice && adventurePrice < touristPrice)
        {
            Console.WriteLine($"The adventurer price is the best value at{adventurePrice:C}");
        }
        else
        {
            Console.WriteLine($"Take your pick:\n\tBig Day {bigDayPrice:C}\n\tTourist {touristPrice:C}\n\tAdventurer {adventurePrice:C}");
        }
    }

}



// variables - store values
// functions - store code


// properties - variables inside of class
// methods - store classes