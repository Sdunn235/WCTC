using DunnMod6Assignment.Helpers;

public class Item
{
    public string Name;
    public int Quantity;
    public decimal PriceEach;

    public Item(string name, int quantity, decimal priceEach)
    {
        Name = name;
        Quantity = quantity;
        PriceEach = priceEach;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.Clear();

        List<Item> inventory = new List<Item>();
        decimal collected = 0m;

        while (true)
        {
            string choice = Input.GetString(
                "---- Vending Machine ----\n\tA - Add Item, B - Buy Item, C - Check Inventory, E - End: "
            ).Trim().ToUpper();

            // A - Add items
            if (choice == "A")
            {
                bool addMore = true;
                while (addMore)
                {
                    string name = Input.GetString("\tItem name: ");
                    int qty = int.Parse(Input.GetString("\tQuantity: "));
                    decimal price = decimal.Parse(Input.GetString("\tPrice each (e.g., 1.75): "));

                    inventory.Add(new Item(name, qty, price));
                    Console.WriteLine($"\tAdded {qty} x {name} @ ${price:0.00}\n");

                    string again = Input.GetString("\tAdd another item? (Y/N): ").Trim().ToUpper();
                    if (again == "N") addMore = false;
                }
                Console.WriteLine();
            }

            // B - Buy items
            else if (choice == "B")
            {
                if (inventory.Count == 0)
                {
                    Console.WriteLine("\tNo items stocked yet.\n");
                    continue;
                }

                Console.WriteLine("\n\tVending Machine");
                bool buyMore = true;

                while (buyMore)
                {
                    // Show menu
                    for (int i = 0; i < inventory.Count; i++)
                    {
                        Item it = inventory[i];
                        Console.WriteLine($"\t{i + 1} - {it.Name} ${it.PriceEach:0.00} (Stock: {it.Quantity})");
                    }

                    int selection = int.Parse(Input.GetString("\tSelect item number to buy: "));
                    int index = selection - 1;

                    if (index >= 0 && index < inventory.Count)
                    {
                        Item pick = inventory[index];
                        if (pick.Quantity > 0)
                        {
                            pick.Quantity--;
                            collected += pick.PriceEach;
                            Console.WriteLine($"\tDispensing: {pick.Name}\n");
                        }
                        else
                        {
                            Console.WriteLine("\tOut of stock.\n");
                        }
                    }
                    else
                    {
                        Console.WriteLine("\tInvalid selection.\n");
                    }

                    string again = Input.GetString("\tBuy another item? (Y/N): ").Trim().ToUpper();
                    if (again == "N") buyMore = false;
                }
                Console.WriteLine();
            }

            // C - Check inventory & show sales total
            else if (choice == "C")
            {
                if (inventory.Count == 0)
                {
                    Console.WriteLine("\tNo items currently stocked.\n");
                }
                else
                {
                    Console.WriteLine("\n\tCurrent Inventory:");
                    foreach (var it in inventory)
                    {
                        Console.WriteLine($"\t{it.Quantity} x {it.Name} @ ${it.PriceEach:0.00}");
                    }
                    Console.WriteLine($"\n\tTotal Collected from Sales: ${collected:0.00}\n");
                }
            }

            // E - End / Final Summary
            else if (choice == "E")
            {
                Console.WriteLine("\n---------------------------------\n");
                Console.WriteLine("Inventory in Vending Machine");
                foreach (var it in inventory)
                {
                    Console.WriteLine($"{it.Quantity} {it.Name}");
                }
                Console.WriteLine($"${collected:0.00} collected from sales");
                Console.WriteLine("\nGoodbye!");
                break;
            }

            // Invalid menu option
            else
            {
                Console.WriteLine($"\t{choice} is not a valid option.\n");
            }
        }
    }
}
