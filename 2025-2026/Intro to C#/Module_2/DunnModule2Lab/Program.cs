// // Shawn Dunn
// // Module 2 Lab
// // 8/29/25



// #region Boolean Data Type


// /*
// Boolean Data Type
//     -Binary value
//     -Literal values: true   false



// */

// #endregion


// #region Conditional Expressions

// /*
// Conditional Expressions
//     -Always resolve to a value of true or false
//     -Condition Operators result into a conditional expression
//         1. Comparison Operators
//             - Typically compares values
//             - > Greater than    A > B
//             - < Less than       B < A
//             - == Equal to       C == D
//             - != Not Equal to   D != E
//             - >= GT and or ET   A >= B
//             - <= LT and or ET   B <= A

//         2. Logical Operators
//             - Typically compares expressions
//             - && Logical And    a && b
//                 - for the expression to be true, both operand need to resolve to true
//             - || Logical or     a || b
//                 - for the expression to be true, only one operand needs to resolve to true
//             - ! Logical Not     !a
//                 - does the opposite



// */

// using System.Diagnostics.Contracts;

// // Conditional Operator Order of Operations
// // -Arithmetic 
// // -Comparison
// // -Logical Nots
// // -Logical Ands
// // -Logical Ors

// Console.WriteLine(5 < 4);

// Console.WriteLine(false || true);

// #endregion


// #region Conditional Statement

// /*
// Conditional Statement allows us to evaluate a conditional expression

// Scope is the context of code we are in and in C# scope is determined with {}

// if statement
//     1. if keyword
//     2. () with a conditional expression inside
//     3. {} statements that run if the expression is true



// */

// if (true)
// {

//     Console.WriteLine("1. This is a true statement");

// }

// /*
// else statements
//     -this is triggered if all other expressions in the decision tree are false
//     -this must follow a if statement
//     -else statements ate optional
//     1. else keyword
//     2. {} with statements that run if all else is false


// */


// if (false)

// {
//     Console.WriteLine("This is not triggered");

// }
// else
// {
//     Console.WriteLine("2. This is triggered because if is false");
// }

// /*
// else if statement
//     -we can can have as many as we want
//     -come after the if, but before else
//     1. else keyword
//     2. if keyword
//     3. () with a conditional expression
//     4. {} with the statements




// if (false)

// {
//     Console.WriteLine("3.");
// }

// else if (false)
// {
//     Console.WriteLine("4.");
// }

// else if (false)
// {
//     Console.WriteLine("5.");
// }
// else
// {
//     Console.WriteLine("6.");
// }



// #endregion


// #region Practice

// Console.Write("How old are you?: ");
// int userAge = Convert.ToInt32(Console.ReadLine());

// if (userAge >= 13)
// {
//     Console.WriteLine("You can see a PG-13 movie!");
//     if (userAge >= 16)

//         Console.WriteLine("You can Drive");

// }
// else
// {
//     Console.WriteLine("The world has hopefully not broken you yet....");
// }

// #endregion


// #region Lab

// Console.Write("Enter an amount in mL: ");
// double mL = Convert.ToDouble(Console.ReadLine());


// const double ML_TO_TSP = 0.202884;
// const double ML_TO_TBSP = 0.067628;
// const double ML_TO_CUP = 0.00422675;
// const double ML_TO_QUART = 0.00105669;

// Console.Write("1. Teaspoon\n2. Tablespoon\n3. Cups\n4. Quarts\nEnter your conversion type: ");

// int userChoice = Convert.ToInt32(Console.ReadLine());
// double convertedValue = 0;
// string label = "";

// if (userChoice == 1)
// {
//     convertedValue = mL * ML_TO_TSP;
//     label = "tsp(s)";
// }
// else if (userChoice == 2)
// {
//     convertedValue = mL * ML_TO_TBSP;
//     label = "tbsp(s)";
// }
// else if (userChoice == 3)
// {
//     convertedValue = mL * ML_TO_CUP;
//     label = "cup(s)";
// }
// else if (userChoice == 4)
// {
//     convertedValue = mL * ML_TO_QUART;
//     label = "quart(s)";
// }

//     Console.WriteLine($"Your converted value is: {Math.Round(convertedValue, 1)} {label}");

// #endregion

