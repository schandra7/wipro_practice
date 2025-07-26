package com.collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComparatorExample {

    public static void main(String[] args) {

        List<Employee> list = new ArrayList<>();

        list.add(new Employee(3, "Akash"));

        list.add(new Employee(1, "Amit"));

        list.add(new Employee(2, "Priya"));
 
        Collections.sort(list, new NameComparator()); // uses custom comparator

        System.out.println("Sorted by Name: " + list);

    }

}
