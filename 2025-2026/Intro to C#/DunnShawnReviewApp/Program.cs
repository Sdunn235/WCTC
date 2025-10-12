namespace DunnShawnReviewApp;

using DunnShawnReviewApp.Helpers;

class Program
{
    static void Main(string[] args)
    {
        ReviewApp();
    }




    static void ReviewApp()
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine();
            Console.WriteLine("---Review Application---");
            Console.WriteLine("\t1. Module 1");
            Console.WriteLine("\t2. Module 2");
            Console.WriteLine("\t3. Module 3");
            Console.WriteLine("\t4. Module 4");
            Console.WriteLine("\t5. Module 5");
            Console.WriteLine("\t6. Common Terms");
            Console.WriteLine("\t7. Operators");

            Console.WriteLine("\t0. End Program");

            int userChoice = Input.GetInt("\tEnter a choice: ");

            if (userChoice == 1)
            {
                ModuleOne();
            }
            else if (userChoice == 2)
            {
                ModuleTwo();
            }
            else if (userChoice == 3)
            {
                ModuleThree();
            }
            else if (userChoice == 4)
            {
                ModuleFour();
            }
            else if (userChoice == 5)
            {
                ModuleFive();
            }
            else if (userChoice == 6)
            {
                CommonTerms();
            }
            else if (userChoice == 7)
            {
                Operator();
            }

            else if (userChoice == 0)
            {
                //break ends the loop we are stuck in
                break;
            }
            Console.Write("\n\nHit enter to continue");
            Console.ReadLine();


        }
    }

    static void ModuleOne()
    {
        Console.Clear();
        Console.WriteLine("Module 1: ");

        Console.WriteLine("\nVariable store values\nFunctions store code");
        Console.WriteLine("\nA variable inside of an object is called a Property.");
        Console.WriteLine("\nA function inside of an object is called a Method");

        Console.WriteLine("\nCreate a variable: ");
        Console.WriteLine("\t1. Give it a datatype");
        Console.WriteLine("\t2. Give it a name lowerCamelCase");
        Console.WriteLine("\t3. Assignment Operator");
        Console.WriteLine("\t4. Value for the variable");
        Console.WriteLine("\t5. Semi-colon closes the statement");


        Console.WriteLine("Enter your name:");
        string userName = Console.ReadLine();

        Console.WriteLine("Thanks for reading about Module 1, " + userName);

    }


    static void ModuleTwo()
    {
        Console.Clear();
        Console.WriteLine("Module 2: ");

        Console.WriteLine("\nBoolean Data Type");
        Console.WriteLine("\trepresents true or false");

        Console.WriteLine("\nConditional Statements:");
        Console.WriteLine("\tEvaluate a boolean expression (conditional expression)");
        Console.WriteLine("\t1. if (else/else if)");
        Console.WriteLine("\t2. switch");

        Console.Write("Do you want the if statement to be true y/n: ");
        if (Console.ReadLine() == "y")
        {
            Console.WriteLine("If the expression is true, the statement triggers");
        }
        else
        {
            Console.WriteLine("If the other conditions are false, the else triggers");
        }
    }

    static void ModuleThree()
    {
        Console.Clear();
        Console.WriteLine("Module 3:");
        Console.WriteLine("\nMethods let us store code for use at a later time");
        Console.WriteLine("\nCreation a method:");
        Console.WriteLine("\t1. Access Modifier (public or private) (optional)");
        Console.WriteLine("\t2. Static means we don't need to create a variable (object) to use this");
        Console.WriteLine("\t3. Return type - when we use the method do we get a value back or not");
        Console.WriteLine("\t4. Method Name (PascalCase || UpperCamelCase)");
        Console.WriteLine("\t5. Include any parameters - datatype parameterName");
        Console.WriteLine("\t6. Body - return statement if the return is not void");

        Console.WriteLine("\nThe following is an example of a method call (using a method): ");
        int userNumber = Input.GetIntInRange("Enter a number between 1 and  10: ", 1, 10);

    }
    static void ModuleFour()
    {
        Console.Clear();
        Console.WriteLine("Module 4:");
        Console.WriteLine("\nLoops:");
        Console.WriteLine("\tPretest loops - test a condition and if that condition is true, run the loop body");
        Console.WriteLine("\t\tfor");
        Console.WriteLine("\t\twhile");
        Console.WriteLine("\tPost test loops - run the body once, then test the condition and if true, run the body again");
        Console.WriteLine("\t\tdo while");
        Console.WriteLine("\nwhile Loop");
        Console.WriteLine("\tan if statement that repeats so long as the condition is true");

        Console.WriteLine("\nfor Loop");
        Console.WriteLine("\tfor is a self-contained while loop");
        Console.WriteLine("\t1. initialization statement");
        Console.WriteLine("\t2. test expression");
        Console.WriteLine("\t\tIf true, run the loop");
        Console.WriteLine("\t3. update statement");


        while (true)
        {
            Console.WriteLine("Enter stop to stop: ");
            if (Console.ReadLine() == "stop")
            {
                break;
            }
        }

        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine(i);
        }


    }

    static void ModuleFive()
    {
        Console.Clear();
        Console.WriteLine("Module 5:");



        Console.WriteLine("\nCollections allow us to save multiple values inside of one variable");
        Console.WriteLine("\tindexing collections is pulling a specific value out of it");
        Console.WriteLine("\t\tcollectionName[int]");
        Console.WriteLine("\nArray");
        Console.WriteLine("\tIt is limited to a specific number of items that we determine when we set it up");
        Console.WriteLine("\tIt only stores one datatype (but multiples of that)");
        Console.WriteLine("\t1. datatype[]");
        Console.WriteLine("\t2. Give it a name lowerCamelCase");
        Console.WriteLine("\t3. Assignment Operator");
        Console.WriteLine("\t4. Value for the variable");
        Console.WriteLine("\t\t-new means we create a new object");
        Console.WriteLine("\t\t-what type of object we want to make");
        Console.WriteLine("\t5. Semi-colon closes the statement");




        string[] vacayDestination = new string[3];

        for (int i = 0; i < vacayDestination.Length; i++)
        {
            Console.Write("Enter a vacation stop: ");
            vacayDestination[i] = Console.ReadLine();
        }

        for (int i = 0; i < vacayDestination.Length; i++)
        {
            Console.WriteLine(vacayDestination[i]);
        }

        Console.WriteLine("\nLists");
        Console.WriteLine("\tMore flexible--we can add and remove spots");
        Console.WriteLine("\tIt only stores one datatype (but multiples of that)");
        Console.WriteLine("\t1. List<T>   T stands for datatype");
        Console.WriteLine("\t2. Give it a name lowerCamelCase");
        Console.WriteLine("\t3. Assignment Operator");
        Console.WriteLine("\t4. Value for the variable");
        Console.WriteLine("\t\t-new means we create a new object");
        Console.WriteLine("\t\t-list constructor List<T>()");
        Console.WriteLine("\t5. Semi-colon closes the statement");
        Console.WriteLine("All Lists have methods for adding and removing data");
        Console.WriteLine("\t.Add(T)");
        Console.WriteLine("\t.Remove(T)");
        Console.WriteLine("\t.RemoveAt(int)");

        Console.WriteLine("All list have methods for adding and removing data");
        List<string> shoes = new List<string>();
        while (true)
        {
            Console.Write("Enter the name of the shoe (end to stop): ");
            string shoeName = Console.ReadLine();
            if (shoeName == "end")
            {
                break;
            }
            shoes.Add(shoeName);
        }

        for (int i = 0; i < shoes.Count; i++)
        {
            Console.WriteLine(i);
        }




    }

    static void CommonTerms()
    {
        Console.Clear();
        Console.WriteLine("Common Terms:");

        Console.WriteLine("\nExpression - Anything that resolves to a single value");
        Console.WriteLine("\nStatement - A single line of code");
        Console.WriteLine("\nParameter - A value used in () when we define a function (method)");
        Console.WriteLine("\nArgument - A value used in () when we call (use) a function (method)");
        Console.WriteLine("\nClass - stores related members (properties and methods)");
        Console.WriteLine("\tProperties - variables in a class");
        Console.WriteLine("\tMethods - function in a class");

    }


    static void Operator()
    {
        Console.Clear();
        Console.WriteLine("Operators: ");
        Console.WriteLine("\n. Member Access Operator\n\tThis lets us look inside an object and get a property of method");
        Console.WriteLine("\n= Assignment Operator\n\tIt takes the right hand operand and puts that value in it");
        Console.WriteLine("\n+  Concatenation operator\n\tIf one or both the operands are strings");
        Console.WriteLine("\n+-*/%   Arithmetic Operators\n\tThe result is a number");

        Console.WriteLine("\nConditional Operators");
        Console.WriteLine("\t1. Comparison Operators:");
        Console.WriteLine("\t\tCompare two values and return true or false");
        Console.WriteLine("\t\t< <= > >= == !=");
        Console.WriteLine("\t2. Logical Operators:");
        Console.WriteLine("\t\tThese look at expression");
        Console.WriteLine("\t\t&& || !");
    }






}
