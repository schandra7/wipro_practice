package com.fileHandling;

import java.util.*;

//Employee class implements Comparable (Natural ordering by id)
class Employee implements Comparable<Employee> {
int id;
String name;

Employee(int id, String name) {
   this.id = id;
   this.name = name;
}

//Natural order: sort by ID
@Override
public int compareTo(Employee e) {
   return this.id - e.id; // Ascending order
}

@Override
public String toString() {
   return id + " - " + name;
}
}

//Comparator for sorting by name
class NameComparator implements Comparator<Employee> {
@Override
public int compare(Employee e1, Employee e2) {
   return e1.name.compareTo(e2.name); // Ascending order
}
}

public class ComparableComparatorDemo {

public static void main(String[] args) {
   Scanner sc = new Scanner(System.in);

   // Sample list of employees
   List<Employee> employees = new ArrayList<>();
   employees.add(new Employee(3, "Ravi"));
   employees.add(new Employee(1, "Amit"));
   employees.add(new Employee(5, "Zoya"));
   employees.add(new Employee(2, "Priya"));

   int choice;
   do {
       System.out.println("\n========= Menu =========");
       System.out.println("1. Display Original List");
       System.out.println("2. Sort by ID (Comparable)");
       System.out.println("3. Sort by Name (Comparator)");
       System.out.println("4. Exit");
       System.out.print("Enter your choice: ");
       choice = sc.nextInt();

       switch (choice) {
           case 1:
               System.out.println("Original List:");
               displayList(employees);
               break;
           case 2:
               Collections.sort(employees); // Uses Comparable
               System.out.println("Sorted by ID (using Comparable):");
               displayList(employees);
               break;
           case 3:
               Collections.sort(employees, new NameComparator()); // Uses Comparator
               System.out.println("Sorted by Name (using Comparator):");
               displayList(employees);
               break;
           case 4:
               System.out.println("Exiting...");
               break;
           default:
               System.out.println("Invalid choice!");
       }

   } while (choice != 4);

   sc.close();
}

static void displayList(List<Employee> list) {
   for (Employee e : list) {
       System.out.println(e);
   }
}
}
