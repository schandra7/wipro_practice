package com.collections;

import java.util.*;

public class LinkedListOperations {
    public static void main(String[] args) {
        // 1. Create LinkedList
        LinkedList<String> cities = new LinkedList<>();
 
        // 2. Add elements
        cities.add("Delhi");
        cities.add("Mumbai");
        cities.add("Chennai");
        cities.add("Kolkata");
        System.out.println("After adding: " + cities);
 
        // 3. Add at specific index
        cities.add(2, "Bangalore");
        System.out.println("After adding at index 2: " + cities);
 
        // 4. AddFirst and AddLast
        cities.addFirst("Hyderabad");
        cities.addLast("Pune");
        System.out.println("After addFirst and addLast: " + cities);
 
        // 5. Get elements
        System.out.println("First element: " + cities.getFirst());
        System.out.println("Last element: " + cities.getLast());
        System.out.println("Element at index 3: " + cities.get(3));
 
        // 6. Set element
        cities.set(3, "Ahmedabad");
        System.out.println("After setting index 3 to Ahmedabad: " + cities);
 
        // 7. Remove by index and value
        cities.remove(4);
        cities.remove("Mumbai");
        System.out.println("After removals: " + cities);
 
        // 8. RemoveFirst and RemoveLast
        cities.removeFirst();
        cities.removeLast();
        System.out.println("After removeFirst and removeLast: " + cities);
 
        // 9. Contains
        System.out.println("Contains 'Delhi'? " + cities.contains("Delhi"));
 
        // 10. Size
        System.out.println("Size: " + cities.size());
 
        // 11. Iterate using for-each
        System.out.println("For-each iteration:");
        for (String city : cities) {
            System.out.println(city);
        }
 
        // 12. Iterate using iterator
        System.out.println("Iterator:");
        Iterator<String> iterator = cities.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
 
        // 13. Iterate in reverse
        System.out.println("Reverse Iterator:");
        Iterator<String> rev = cities.descendingIterator();
        while (rev.hasNext()) {
            System.out.println(rev.next());
        }
 
        // 14. Peek, Poll, Offer (Queue operations)
        cities.offer("Nagpur"); // Add at end
       // System.out.println("After offer: " + cities);
}
}
