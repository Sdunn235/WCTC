using DunnFinalProject.Helpers;

namespace DunnFinalProject
{
    class Program
    {
        static List<Student> Students { get; set; }

        static void Main(string[] args)
        {
            Students = new List<Student>();

            while (true)
            {
                Console.Clear();
                Console.WriteLine("===== Club Manger =====");
                Console.WriteLine("1. Add a Student");
                Console.WriteLine("2. Delete a Student");
                Console.WriteLine("3. Edit a Student");
                Console.WriteLine("4. List Students");
                Console.WriteLine("5. Exit");

                int choice = Input.GetInt("\nEnter a choice: ");
                Console.Clear();

                if (choice == 1)
                {
                    AddStudent();
                }
                else if (choice == 2)
                {
                    DeleteStudent();
                }
                else if (choice == 3)
                {
                    EditStudent();
                }
                else if (choice == 4)
                {
                    ListStudent();
                }
                else if (choice == 5)
                {
                    break; 
                }
                else
                {
                    Console.WriteLine("Please choose 1–5.");
                }

                Console.Write("\n\nHit Enter to Continue");
                Console.ReadLine();
            }
        }


        static void AddStudent()
        {
            Console.WriteLine("---- Add a Student -----");
            string first = Input.GetString("First Name: ");
            string last  = Input.GetString("Last  Name: ");
            string email = Input.GetString("Email     : ");

            Students.Add(new Student(first, last, email));
            Console.WriteLine("\nStudent added.");
        }

        static void DeleteStudent()
        {
            Console.WriteLine("---- Delete a Student -----");
            if (Students.Count == 0)
            {
                Console.WriteLine("No students to delete.");
                return;
            }

            ListStudent();
            int pick = Input.GetInt("\nEnter the number of the student to delete: ");
            int index = pick - 1;

            if (index < 0 || index >= Students.Count)
            {
                Console.WriteLine("Invalid selection.");
                return;
            }

            Students.RemoveAt(index);
            Console.WriteLine("Student deleted.");
        }

        static void EditStudent()
        {
            Console.WriteLine("---- Edit a Student -----");
            if (Students.Count == 0)
            {
                Console.WriteLine("No students to edit.");
                return;
            }

            ListStudent();
            int pick = Input.GetInt("\nEnter the number of the student to edit: ");
            int index = pick - 1;

            if (index < 0 || index >= Students.Count)
            {
                Console.WriteLine("Invalid selection.");
                return;
            }

            Console.WriteLine("\nEnter new values (leave blank to keep current):");

            var current = Students[index];

            Console.Write($"First Name [{current.FirstName}]: ");
            string? first = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(first)) current.FirstName = first;

            Console.Write($"Last  Name [{current.LastName}]: ");
            string? last = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(last)) current.LastName = last;

            Console.Write($"Email     [{current.Email}]: ");
            string? email = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(email)) current.Email = email;

            Console.WriteLine("\nStudent updated.");
        }

        static void ListStudent()
        {
            Console.WriteLine("---- List Students -----");
            if (Students.Count == 0)
            {
                Console.WriteLine("No students yet.");
                return;
            }

            for (int i = 0; i < Students.Count; i++)
            {
                Console.WriteLine($"{i + 1}: {Students[i]}");
            }
        }
    }
}