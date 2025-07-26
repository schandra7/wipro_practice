package com.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class ComparableExample {
    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();
        list.add(new Employee(3, "Ravi"));
        list.add(new Employee(1, "Amit"));
        list.add(new Employee(2, "Priya"));
 
        Collections.sort(list); // uses compareTo
        System.out.println("Sorted by ID (Natural Order): " + list);
    }
}
