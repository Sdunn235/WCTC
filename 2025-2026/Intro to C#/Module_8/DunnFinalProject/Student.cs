namespace DunnFinalProject;

class Student
{
    public string? FirstName { get; set; }
    public string? LastName  { get; set; }
    public string? Email     { get; set; }

    // Default (parameterless) constructor — handy for simple instantiation
    public Student() { }

    // Convenience constructor to set everything at once
    public Student(string firstName, string lastName, string email)
    {
        FirstName = firstName;
        LastName  = lastName;
        Email     = email;
    }

    // Displays nicely in lists/menus
    public override string ToString()
        => $"{LastName}, {FirstName}  <{Email}>";
}
