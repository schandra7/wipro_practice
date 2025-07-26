package com.collections;

import java.util.*;

class Employee implements Comparable<Employee> {
    int id;
    String name;
 
    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }
 
    // Natural sorting based on id
    public int compareTo(Employee e) {
        return this.id - e.id; // ascending order
    }
 
    public String toString() {
        return id + " - " + name;
    }
}
class NameComparator implements Comparator<Employee> {
    public int compare(Employee e1, Employee e2) {
        return e1.name.compareTo(e2.name); // ascending order
    }
}
 
