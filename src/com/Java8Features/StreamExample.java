package com.Java8Features;

import java.util.Arrays;
import java.util.List;
 
public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Jane","Jackie", "Mark", "Steve");
 
        names.stream()
             .filter(name -> name.startsWith("J"))  // Intermediate operator
             .map(String::toUpperCase)              // Intermediate operator
             .sorted()                              // Intermediate operator
             .forEach(System.out::println);         // Terminal operator
    }
}
