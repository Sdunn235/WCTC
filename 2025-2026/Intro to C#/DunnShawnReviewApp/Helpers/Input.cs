namespace DunnShawnReviewApp.Helpers;

class Input
{

    public static int GetInt(string prompt)
    {
        // Console.Write(prompt);
        // return Convert.ToInt32(Console.ReadLine());

        while (true)
        {
            Console.Write(prompt);
            int userNumber;

            // tryparse returns true if conversion was successful
            // tryparse has two parameters
            // -the sting we want to try to convert to an int
            // -starts with the keyword out
            //      -out means we send something back but not a via return
            //      -variable where we want to store the converted int
            bool isSuccess = Int32.TryParse(Console.ReadLine(), out userNumber);

            if (isSuccess)
            {

                // return ends the method, which ends our infinite loop
                return userNumber;
            }
            else
            {
                Console.WriteLine("\nPlease enter a whole number\n");
            }
        }

    }

    public static int GetIntInRange(string prompt, int bottomNum, int topNum)
    {
        while (true)
        {
            Console.Write(prompt);
            int userNumber = 0;

            bool isSuccess = Int32.TryParse(Console.ReadLine(), out userNumber);

            if (isSuccess && (userNumber >= bottomNum && userNumber <= bottomNum))
            {
                return userNumber;
            }
            else
            {
                Console.WriteLine($"Make sure to enter a number between {bottomNum} and {topNum}");
            }
        }
    }

}