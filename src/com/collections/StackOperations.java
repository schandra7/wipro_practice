package com.collections;


import java.util.*;
 
public class StackOperations {

    public static void main(String[] args) {

        // ---------- Using java.util.Stack ----------

        System.out.println("=== Stack (Legacy) Operations ===");

        Stack<String> stack = new Stack<>();
 
        // 1. Push (add elements)

        stack.push("Apple");

        stack.push("Banana");

        stack.push("Cherry");

        System.out.println("Stack after push: " + stack);
 
        // 2. Peek (top element)

        System.out.println("Peek (top): " + stack.peek());
 
        // 3. Pop (remove top element)

        System.out.println("Pop: " + stack.pop());

        System.out.println("After pop: " + stack);
 
        // 4. Search (1-based index from top)

        System.out.println("Search 'Apple': " + stack.search("Apple")); // Returns 1 if top

        System.out.println("Search 'Banana': " + stack.search("Banana"));
 
        // 5. Empty check

        System.out.println("Is empty? " + stack.empty());
 
        // 6. Size

        System.out.println("Size: " + stack.size());
 
        // 7. Iterate using iterator

        System.out.println("Iterate using iterator:");

        Iterator<String> it = stack.iterator();

        while (it.hasNext()) {

            System.out.println(it.next());

        }
 
        // 8. Clear stack

        stack.clear();

        System.out.println("After clear(): " + stack);
 
 
        // ---------- Using Deque as Stack (Recommended) ----------

        System.out.println("\n=== Stack using Deque (Recommended) ===");

        Deque<Integer> stackDeque = new ArrayDeque<>();
 
        // 1. Push elements

        stackDeque.push(10);

        stackDeque.push(20);

        stackDeque.push(30);

        System.out.println("Deque Stack after push: " + stackDeque);
 
        // 2. Peek

        System.out.println("Peek: " + stackDeque.peek());
 
        // 3. Pop

        System.out.println("Pop: " + stackDeque.pop());

        System.out.println("After pop: " + stackDeque);
 
        // 4. Contains

        System.out.println("Contains 10? " + stackDeque.contains(10));
 
        // 5. Size

        System.out.println("Size: " + stackDeque.size());
 
        // 6. IsEmpty

        System.out.println("Is empty? " + stackDeque.isEmpty());
 
        // 7. Iterate using for-each

        System.out.println("Iterate using for-each:");

        for (int val : stackDeque) {

            System.out.println(val);

        }
 
        // 8. Clear

        stackDeque.clear();

        System.out.println("After clear: " + stackDeque);

    }

}

 
