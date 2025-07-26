package com.Java8Features;

import java.util.Arrays;
import java.util.List;
 
public class MethodRefExample {
    public static void printName(String name) {
        System.out.println(name);
    }
    public void showName(String name) {
    	System.out.println(name);
    }
 
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Amit", "Ravi", "Sumit");
        MethodRefExample obj = new MethodRefExample();
        names.forEach(obj::showName);
        names.forEach(MethodRefExample::printName);  // Method reference
    }
}