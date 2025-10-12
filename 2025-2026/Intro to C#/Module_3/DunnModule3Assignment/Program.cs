namespace DunnModule3Assignment;

class Program
{
    static void Main(string[] args)
    {
        int a = 5;

        while (a <= 9)
        {
            Console.Write(a);
            a++;
        }
    }
}
//     // Prompts, variable recorder, and calculator.
//     private static void MonthlyWorkoutPointCalculator()
//     {
//         int daysStepsAchieved = GetInt("How many days this month did you achieve more than 10,000 steps? ");
//         int yogaClassesAttended = GetInt("\nHow many yoga classes did you attend this month? ");
//         int aerobicsClassesAttended = GetInt("\nHow many aerobics classes did you attend this month? ");
//         int nutritionMeetingsAttended = GetInt("\nHow many weekly nutrition meetings did you attend this month? ");

//         int totalStepPoints = CalculateStepPoints(daysStepsAchieved);
//         int totalYogaPoints = CalculateYogaPoints(yogaClassesAttended);
//         int totalAerobicsPoints = CalculateAerobicsPoints(aerobicsClassesAttended);
//         int totalNutritionPoints = CalculateNutritionPoints(nutritionMeetingsAttended);

//         TotalPointsAndRewards(totalStepPoints, totalYogaPoints, totalAerobicsPoints, totalNutritionPoints);
//     }
//     // Good old trustee prompt and Int Conversion Method
//     private static int GetInt(string prompt)
//     {
//         Console.Write(prompt);
//         int userInt = Convert.ToInt32(Console.ReadLine());
//         return userInt;
//     }
//     // CalculateStepPoints calculates the amount of points for days with more than 10,000 steps
//     private static int CalculateStepPoints(int daysStepsAchieved)
//     {   // 5 is points
//         return daysStepsAchieved * 5;
//     }
//     // CalculateYogaPoints calculates the amount of points for a yoga classes attended
//     private static int CalculateYogaPoints(int yogaClassesAttended)
//     {
//         if (yogaClassesAttended >= 6 && yogaClassesAttended <= 11)
//             // 10 points
//             return 10;
//         else if (yogaClassesAttended >= 12)
//             // 30 points
//             return 30;
//         // 0 points
//         else
//             return 0;
//     }
//     // CalculateAerobicsPoints calculates the amount of points for a aerobics classes attended
//     private static int CalculateAerobicsPoints(int aerobicsClassesAttended)
//     {
//         if (aerobicsClassesAttended >= 6 && aerobicsClassesAttended <= 11)
//             // 20 points
//             return 20;
//         else if (aerobicsClassesAttended >= 12)
//             // 50 points
//             return 50;
//         // 0 points
//         else
//             return 0;
//     }
//     // CalculateNutritionMeetingPoints calculates the amount of points for a nutritional meetings attended
//     private static int CalculateNutritionPoints(int nutritionMeetingsAttended)
//     {
//         while
//             (nutritionMeetingsAttended > 4 || nutritionMeetingsAttended <= 0)
//         {
//             nutritionMeetingsAttended = GetInt("\nMust be a number 0 - 4: ");
//         }
//         if (nutritionMeetingsAttended >= 1 && nutritionMeetingsAttended <= 3)
//         {
//             return 10;
//         }
//         else if (nutritionMeetingsAttended == 4)
//         {
//             return 40;
//         }
//         else
//             return nutritionMeetingsAttended = GetInt("Must be a number 0 - 4: ");
//     }
//     // Calculates total for each point type, the total of all the points, and how many gift cards are awarded for the points
//     private static void TotalPointsAndRewards(int totalStepPoints, int totalYogaPoints, int totalAerobicsPoints, int totalNutritionPoints)
//     {
//         int totalPointsForMonth = totalStepPoints + totalYogaPoints + totalAerobicsPoints + totalNutritionPoints;
//         int giftCardsAwarded = totalPointsForMonth / 50;

//         Console.WriteLine($"\nThe totals points for your steps achieved is {totalStepPoints} points.\nThe total points for your yoga classes achieved is {totalYogaPoints} points\nThe total points for your aerobics classes achieved is {totalAerobicsPoints} points\nThe total points for your nutrition meetings achieved is {totalNutritionPoints} points\n\nYour total amount of points for the month is: {totalPointsForMonth} Points\n\nYou are awarded {giftCardsAwarded} Amazon gift cards for your hard work.\nKeep up the good Work!\n");

//     }
// }