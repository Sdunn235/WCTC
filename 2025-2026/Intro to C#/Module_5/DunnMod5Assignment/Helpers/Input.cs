namespace DunnModule5Assignment.Helpers;

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

    public static string GetString(string prompt)
{
    while (true)
    {
        Console.Write(prompt);
        string? userInput = Console.ReadLine();

        // Validate: not null, not empty, not just whitespace
        if (!string.IsNullOrWhiteSpace(userInput))
        {
                return userInput;
        }
        else
        {
            Console.WriteLine("\nPlease enter a valid text value (not empty).\n");
        }
    }
}
}