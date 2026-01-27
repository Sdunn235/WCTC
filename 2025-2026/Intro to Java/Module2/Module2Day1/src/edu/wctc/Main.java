import edu.wctc.Rectangle;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // module1Review();
        rectangleDemo();
    }

    static void rectangleDemo() {
        // if you do not code a constructor, Java provides one
         Rectangle box = new Rectangle();
    }

    static void module1Review() {
        // Module review code intentionally commented out to keep compilation simple.
    }

    // Pass by reference, the address is passed so that changes modify the original
    static void getCourses(String[] courses, Scanner keyboard) {
        // Example:
        // for (int i = 0; i < courses.length; i++) {
        //     System.out.printf("Enter the name of course #%d: ", i + 1);
        //     courses[i] = keyboard.nextLine();
        // }
    }

    // primitive types are passed by value, a copy of that value is sent to the method
    static void plusTen(int number) {
        number += 10;
    }

    static void whyWeUSeWrapperClasses(Scanner keyboard) {
        // System.out.print("Enter your order number: ");
        // int orderNumber = keyboard.nextInt();
        // keyboard.nextLine(); // consumes the newLine character
        //
        // System.out.print("Enter your name: ");
        // String name = keyboard.nextLine();
        //
        // System.out.printf("Hello, %s. You are #%d in line", name, orderNumber);
    }
}