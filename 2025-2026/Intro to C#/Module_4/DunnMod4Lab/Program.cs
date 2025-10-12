// using statements bring in a new namespace
using DunnMod4Lab.Helper;


namespace DunnMod4Lab;

class Program
{
    static void Main(string[] args)
    {
        // Console.Clear();
        // DoWhileLoop();

        // ForLoops();
        Lab();
    }

    static void Lab()
    {

        int daysWorked = Input.GetInt("How many days did you work >> ");
        while (daysWorked < 1)
        {
            Console.WriteLine("You need to work more than 0 days");
            daysWorked = Input.GetInt("How many days did you work >> ");
        }
        // int totalPennies = 0;
        // for (int i = 0; i < daysWorked; i++)
        // {
        //     Console.WriteLine($"Day {i + 1}: {Math.Pow(2, i)}");
        //     totalPennies += Convert.ToInt32(Math.Pow(2, i));
        // }

        // Console.WriteLine($"You've earned {(totalPennies/100.0):C}");

    }
    static void ForLoops()
    {
        // // For Loop os a self contained while loop

        // // 1. for Keyword
        // // 2. ( )
        // //  -initialization statement
        // //  -test expression (pretest)
        // //  -update statement (runs after the loop iterates)
        // //  -{ } body of the loop

        // // initialization statement (sets up a counter)
        // int whilei = 0;
        // // test expression
        // while (whilei < 5)
        // {
        //     Console.WriteLine(whilei);
        //     // update statement
        //     whilei++;
        // }

        // for (int i = 0; i < 5; i++)
        // {
        //     Console.WriteLine(i);
        // }
        // for (int i = 0; i < 100; i += 2)
        // {
        //     Console.WriteLine(i);
        // }

        // for (int i = 100; i > 0; i--)
        // {
        //     Console.WriteLine(i);
        // }
        // for (int i = 0; i < 5; i++)
        // {
        //     for (int j = 0; j < 5; j++)
        //     {
        //         Console.WriteLine($"Row {i + 1} Column{j + 1}");
        //     }
        // }
    }
    static void DoWhileLoop()
    {
        // ultimately, the only loop you ever need is a while loop
        // -All other loops are syntactic sugar (an easier way of writing something out)

        // While Loops are pretest loops (condition is checked before the loop iterates)
        // Do While Loops are posttest loops (the condition is checked after on iteration of the loop)

        // do while
        // 1. Keyword do
        // 2. { } body of the loop (always run at least one time)
        // 3. Keyword while
        // 4. ( ) conditional expression
        //  -if true, loop again
        // 5. Close with ;

        // int userNumber;
        // do
        // {
        //     userNumber = Input.GetInt("Enter the number 5: ");
        // } while (userNumber != 5);

        // int i = 0;
        // while (i < 0)
        // {
        //     Console.WriteLine(i);
        // }
        // // Even though the condition is false, the body { } runs at least one time before the condition is checked
        // do
        // {
        //     Console.WriteLine(i);
        // } while (i < 0);
    }
    static void Notes()
    {
        // Console.Clear();
        // i is a counter value
        // - iterator
        // - incrementor
        // it keeps track of how many times we run a loop
        // programs start counting at 0
        // int i = 0;

        // While loop
        // -if statement that repeats
        // 1. while keyword
        // 2.conditional expression
        //   - we execute the body of the loop so long as it is true
        // 3.body of the loop
        //   - after the executes, repeat


        // while (i < 5)
        // {
        //     Console.WriteLine(i++);
        //     i = i + 1;
        //     i += 1;
        //     i++;
        //     we can prefix or postfix the increment / decrement operator
        //          ++i adds 1 to i, then does the statement
        //          i++does the statement first then ads 1 to i
        // }

        // Console.WriteLine("Type y to continue!");
        // while (Console.ReadLine() == "y")
        // {
        //     Console.WriteLine("You entered y! Do it again!");
        // }

        // int randomNumber = 562;
        // int userNumber = Input.GetInt("Guess the random Number: ");

        // while (userNumber != randomNumber)
        // {
        //     if (userNumber > randomNumber)
        //     {
        //         userNumber = Input.GetInt($"{userNumber} is too high. Guess again: ");
        //     }
        //     else
        //     {
        //         userNumber = Input.GetInt($"{userNumber} is too low. Guess again: ");
        //     }
        // }
       // Console.WriteLine("You guessed it!");
    }
}
