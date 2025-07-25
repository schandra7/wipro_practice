package com.collections;


import java.util.*;
 
public class ArrayListOperations {

    public static void main(String[] args) {

        // 1. Create an ArrayList

        ArrayList<String> fruits = new ArrayList<>();
 
        // 2. Add elements

        fruits.add("Apple");

        fruits.add("Banana");

        fruits.add("Orange");

        fruits.add("Mango");
 
        System.out.println("After adding: " + fruits);
 
        // 3. Add at specific index

        fruits.add(2, "Grapes");

        System.out.println("After adding at index 2: " + fruits);
 
        // 4. Get element

        System.out.println("Element at index 1: " + fruits.get(1));
 
        // 5. Set element

        fruits.set(1, "Kiwi");

        System.out.println("After setting index 1 to Kiwi: " + fruits);
 
        // 6. Remove element by index

        fruits.remove(3);

        System.out.println("After removing index 3: " + fruits);
 
        // 7. Remove element by value

        fruits.remove("Grapes");

        System.out.println("After removing 'Grapes': " + fruits);
 
        // 8. Contains

        System.out.println("Contains 'Apple'? " + fruits.contains("Apple"));
 
        // 9. Size

        System.out.println("Size of list: " + fruits.size());
 
        // 10. Iterate using for-each

        System.out.println("Iterating with for-each:");

        for (String fruit : fruits) {

            System.out.println(fruit);

        }
 
        // 11. Iterate using for loop

        System.out.println("Iterating with for loop:");

        for (int i = 0; i < fruits.size(); i++) {

            System.out.println(fruits.get(i));

        }
 
        // 12. Iterate using iterator

        System.out.println("Iterating with Iterator:");

        Iterator<String> iterator = fruits.iterator();

        while (iterator.hasNext()) {

            System.out.println(iterator.next());

        }
 
        // 13. Sorting

        Collections.sort(fruits);

        System.out.println("Sorted list: " + fruits);
 
        // 14. Reverse

        Collections.reverse(fruits);

        System.out.println("Reversed list: " + fruits);
 
        // 15. Clear all

        fruits.clear();

        System.out.println("After clear(): " + fruits);
 
        // 16. Check if empty

        System.out.println("Is list empty? " + fruits.isEmpty());
 
        // 17. AddAll

        List<String> newFruits = Arrays.asList("Papaya", "Pineapple", "Guava");

        fruits.addAll(newFruits);

        System.out.println("After addAll: " + fruits);
 
        // 18. SubList

        List<String> sub = fruits.subList(0, 2);

        System.out.println("Sublist (0 to 2): " + sub);
 
        // 19. IndexOf / LastIndexOf

        fruits.add("Papaya");

        System.out.println("Index of 'Papaya': " + fruits.indexOf("Papaya"));

        System.out.println("Last index of 'Papaya': " + fruits.lastIndexOf("Papaya"));
 
        // 20. Convert to array

        String[] fruitArray = fruits.toArray(new String[0]);

        System.out.println("Converted to array: " + Arrays.toString(fruitArray));

    }

}

 