package com.collections;

import java.util.*;
 
public class MapExample {
 
    public static void main(String[] args) {

        System.out.println("----- HashMap Operations -----");

        hashmapOperations();
 
        System.out.println("\n----- TreeMap Operations -----");

        treemapOperations();

    }
 
    // All operations on HashMap

    public static void hashmapOperations() {

        HashMap<Integer, String> map = new HashMap<>();
 
        // 1. Add key-value pairs

        map.put(1, "Apple");

        map.put(2, "Banana");

        map.put(3, "Cherry");

        map.put(4, "Date");

        System.out.println(map);

        // 2. Update value

        map.put(2, "Blueberry");

        System.out.println(map);

        // 3. Get value

        System.out.println("Get value for key 2: " + map.get(2));
 
        // 4. Remove key

        map.remove(4);
 
        // 5. Check for key and value

        System.out.println("Contains key 3? " + map.containsKey(3));

        System.out.println("Contains value 'Apple'? " + map.containsValue("Apple"));
 
        // 6. Get all keys

        System.out.println("Keys: " + map.keySet());
 
        // 7. Get all values

        System.out.println("Values: " + map.values());
 
        // 8. Get all entries

        System.out.println("Entries:");

        for (Map.Entry<Integer, String> entry : map.entrySet()) {

            System.out.println(entry.getKey() + " -> " + entry.getValue());

        }
 
        // 9. Size of map

        System.out.println("Size: " + map.size());
 
        // 10. isEmpty check

        System.out.println("Is map empty? " + map.isEmpty());
 
        // 11. getOrDefault

        System.out.println("Get or default (key 10): " + map.getOrDefault(10, "Not Found"));
 
        // 12. putIfAbsent

        map.putIfAbsent(5, "Elderberry");

        System.out.println("After putIfAbsent: " + map);
 
        // 13. clear map

        map.clear();

        System.out.println("Map after clear(): " + map);

    }
 
    // All operations on TreeMap

    public static void treemapOperations() {

        TreeMap<Integer, String> tmap = new TreeMap<>();
 
        // 1. Add key-value pairs

        tmap.put(3, "Cherry");

        tmap.put(1, "Apple");

        tmap.put(2, "Banana");

        tmap.put(4, "Date");
 
        // 2. Update value

        tmap.put(2, "Blueberry");
 
        // 3. Get value

        System.out.println("Get value for key 1: " + tmap.get(1));
 
        // 4. Remove key

        tmap.remove(4);
 
        // 5. Check key/value

        System.out.println("Contains key 3? " + tmap.containsKey(3));

        System.out.println("Contains value 'Cherry'? " + tmap.containsValue("Cherry"));
 
        // 6. Sorted keys

        System.out.println("Keys (sorted): " + tmap.keySet());
 
        // 7. Values

        System.out.println("Values: " + tmap.values());
 
        // 8. Entries (sorted by key)

        System.out.println("Entries (sorted):");

        for (Map.Entry<Integer, String> entry : tmap.entrySet()) {

            System.out.println(entry.getKey() + " -> " + entry.getValue());

        }
 
        // 9. First and last key

        System.out.println("First Key: " + tmap.firstKey());

        System.out.println("Last Key: " + tmap.lastKey());
 
        // 10. headMap, tailMap, subMap

        System.out.println("headMap(3): " + tmap.headMap(3));

        System.out.println("tailMap(2): " + tmap.tailMap(2));

        System.out.println("subMap(1,3): " + tmap.subMap(1, 3));
 
        // 11. getOrDefault

        System.out.println("Get or default (key 10): " + tmap.getOrDefault(10, "Not Found"));
 
        // 12. putIfAbsent

        tmap.putIfAbsent(5, "Elderberry");

        System.out.println("After putIfAbsent: " + tmap);
 
        // 13. clear

        tmap.clear();

        System.out.println("TreeMap after clear(): " + tmap);

    }

}

 
