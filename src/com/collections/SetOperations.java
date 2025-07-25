package com.collections;



import java.util.*;
 
public class SetOperations {

    public static void main(String[] args) {

        // ---------- HashSet Operations ----------

        System.out.println("=== HashSet Operations ===");

        Set<String> hashSet = new HashSet<>();
 
        // 1. Add elements

        hashSet.add("Apple");

        hashSet.add("Banana");

        hashSet.add("Orange");

        hashSet.add("Mango");

        hashSet.add(null); // HashSet allows one null

        hashSet.add("Banana"); // Duplicate not added
 
        System.out.println("HashSet after add: " + hashSet);
 
        // 2. Remove element

        hashSet.remove("Orange");

        System.out.println("HashSet after remove: " + hashSet);
 
        // 3. Contains

        System.out.println("Contains 'Apple'? " + hashSet.contains("Apple"));
 
        // 4. Size

        System.out.println("Size: " + hashSet.size());
 
        // 5. IsEmpty

        System.out.println("Is empty? " + hashSet.isEmpty());
 
        // 6. Iterate using for-each

        System.out.println("Iterate using for-each:");

        for (String item : hashSet) {

            System.out.println(item);

        }
 
        // 7. Clear

        hashSet.clear();

        System.out.println("After clear(): " + hashSet);
 
        // 8. AddAll (Union)

        Set<String> set1 = new HashSet<>(Arrays.asList("A", "B", "C"));

        Set<String> set2 = new HashSet<>(Arrays.asList("B", "C", "D"));

        set1.addAll(set2); // Union

        System.out.println("Union of set1 and set2: " + set1);
 
        // 9. RetainAll (Intersection)

        set1 = new HashSet<>(Arrays.asList("A", "B", "C"));

        set1.retainAll(set2); // Intersection

        System.out.println("Intersection of set1 and set2: " + set1);
 
        // 10. RemoveAll (Difference)

        set1 = new HashSet<>(Arrays.asList("A", "B", "C"));

        set1.removeAll(set2); // Difference

        System.out.println("Difference of set1 and set2: " + set1);
 
        


        // ---------- TreeSet Operations ----------

        System.out.println("\n=== TreeSet Operations ===");

        Set<String> treeSet = new TreeSet<>();
 
        // 1. Add elements

        treeSet.add("Banana");

        treeSet.add("Apple");

        treeSet.add("Mango");

        treeSet.add("Grapes");

        treeSet.add("Apple"); // Duplicate ignored
 
        System.out.println("TreeSet (sorted): " + treeSet);
 
        // 2. Remove

        treeSet.remove("Mango");

        System.out.println("After removing 'Mango': " + treeSet);
 
        // 3. Contains

        System.out.println("Contains 'Apple'? " + treeSet.contains("Apple"));
 
        // 4. Size

        System.out.println("Size: " + treeSet.size());
 
        // 5. First and Last

        System.out.println("First: " + ((TreeSet<String>) treeSet).first());

        System.out.println("Last: " + ((TreeSet<String>) treeSet).last());
 
        // 6. HeadSet, TailSet, SubSet

        TreeSet<String> ts = new TreeSet<>(treeSet);

        System.out.println("HeadSet (<G): " + ts.headSet("G")); // elements less than "G"

        System.out.println("TailSet (>=G): " + ts.tailSet("G")); // elements greater or equal to "G"

        System.out.println("SubSet (B to M): " + ts.subSet("B", "M")); // range
 
        // 7. Iterate using iterator

        System.out.println("Iterate with iterator:");

        Iterator<String> iterator = treeSet.iterator();

        while (iterator.hasNext()) {

            System.out.println(iterator.next());

        }
 
        // 8. Clear

        treeSet.clear();

        System.out.println("After clear: " + treeSet);
 
        // 9. Custom TreeSet with Comparator

        TreeSet<Integer> customTreeSet = new TreeSet<>(Comparator.reverseOrder());

        customTreeSet.addAll(Arrays.asList(5, 1, 10, 3));

        System.out.println("Custom TreeSet (descending): " + customTreeSet);

    }

}

 