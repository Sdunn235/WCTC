// Shawn Dunn
// Module 2 Assignment
// 09/03/25


// dotnet new console --use-program-main --force
Console.Clear();

Console.Write("Is anyone attending the party a vegetarian? (y/n): ");
bool isVegi = Convert.ToBoolean(Console.ReadLine()== "y");

Console.Write("Is anyone attending a vegan? (y/n): ");
bool isVegan = Convert.ToBoolean(Console.ReadLine()== "y");

Console.Write("Is anyone attending a gluten free? (y/n): ");
bool isGluten = Convert.ToBoolean(Console.ReadLine()== "y");

// if (isVegi == true ) 
// {
//     Console.WriteLine("You have a vegetarian attending");
// }
// if (isVegan == true)
// {
//     Console.WriteLine("You have a vegan attending");
// }
// if (isGluten == true)
// {
//     Console.WriteLine("You have a person who is gluten free attending");
// }

Console.WriteLine("You can eat at the following restaurants");

if (isGluten != true && isVegan != true && isVegi != true)

{
    Console.WriteLine("\tThunder Bay Grill is the rare choice but can go anywhere.");
}
else if (isGluten == true && isVegan != true && isVegi == true)
{
    Console.WriteLine("\tMarco's Pizza");
}
else if (isGluten == true && isVegan == true && isVegi == true)
{
    Console.WriteLine("\tCafe Manna");
    Console.WriteLine("\tHarvest Cafe");
}
else if (isGluten != true && isVegan != true && isVegi == true)
{
    Console.WriteLine("\tIndia Kitchen");
}
