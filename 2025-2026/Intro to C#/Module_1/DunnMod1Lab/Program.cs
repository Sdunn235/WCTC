// // Shawn Dunn
// // Module 1 Lab
// // Due: 8/22

// // Type Conversion
// //  -transferring data from one type to the other
// //  -Convert class
// //  -Explicit Conversion 
// //      -Us telling the program to convert (Convert class)
// //      -This happens when we could lose data or error
// //  -Implicit Conversion
// //      -Happens Automatically
// //      -This happens when there is no loss of data


// // P.E.M.D.A.S. (Order of Operations)D
// //  -Parentheses
// //  -Exponents
// //  -Multiply or Divide
// //  -Add or Subtract

// Console.Write("Input first number: ");
?w
// A const (constant) can not be reassigned. 

// reassigning is giving a new value to an existing variable

const double EGGS = .5;
const double CREAM_CHEESE = .375;
const double VANILLA = .125;
const double SUGAR = .125;

Console.WriteLine("How many cupcakes would you like to make?: ");
double numberOfCupCakes = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"This is the recipe for {numberOfCupCakes} cupcakes");
Console.WriteLine($"\t{numberOfCupCakes * EGGS} egg(s).");
Console.WriteLine($"\t{numberOfCupCakes * SUGAR} cup(s) of sugar.");
Console.WriteLine($"\t{numberOfCupCakes * VANILLA} tbsp(s) of vanilla.");
Console.WriteLine($"\t{numberOfCupCakes * CREAM_CHEESE} package(s) of cream cheese.");




