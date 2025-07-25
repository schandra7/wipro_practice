package com.day3;
 
public class EnumExample {
 
    // Define an enum
    enum Day {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
    }
 
    // Method to check if it's a weekend
    public static boolean isWeekend(Day day) {
        return day == Day.SATURDAY || day == Day.SUNDAY;
    }
 
    public static void main(String[] args) {
        Day today = Day.WEDNESDAY;
 
        System.out.println("Today is: " + today);
 
        if (isWeekend(today)) {
            System.out.println("It's the weekend! ");
        } else {
            System.out.println("It's a weekday. Keep working! ");
        }
    }
}