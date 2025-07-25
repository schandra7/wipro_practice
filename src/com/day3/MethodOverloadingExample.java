package com.day3;

public class MethodOverloadingExample {

  
    public int add(int a, int b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        MethodOverloadingExample calc = new MethodOverloadingExample();
        
        System.out.println("Add two ints: " + calc.add(5, 3));
        System.out.println("Add three ints: " + calc.add(5, 3, 2));
        System.out.println("Add two doubles: " + calc.add(5.5, 3.2));
    }
}
