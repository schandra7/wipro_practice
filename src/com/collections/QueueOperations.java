package com.collections;

import java.util.*;
 
public class QueueOperations {

    public static void main(String[] args) {

        // 1. Create a Queue using LinkedList

        Queue<String> queue = new LinkedList<>();
 
        // 2. Add elements using add() and offer()

        queue.add("A");  // throws exception if capacity is full

        queue.add("C");

        System.out.println("Queue after adding: " + queue);
 
        // 3. Peek (head without removing)

        System.out.println("Peek (head): " + queue.peek());  // null if empty

        System.out.println("Element (head): " + queue.element()); // throws exception if empty
 
        // 4. Poll and remove (retrieve and remove head)

        System.out.println("Poll: " + queue.poll()); // null if empty

        System.out.println("Remove: " + queue.remove()); // throws exception if empty

        System.out.println("Queue after poll and remove: " + queue);
 
        // 5. Size of queue

        System.out.println("Size: " + queue.size());
 
        // 6. Contains

        System.out.println("Contains 'C'? " + queue.contains("C"));
 
        // 7. Iterate over queue

        System.out.println("Iterating using for-each:");

        for (String item : queue) {

            System.out.println(item);

        }
 
        // 8. Clear and check empty

        queue.clear();

        System.out.println("After clear: " + queue);

        System.out.println("Is empty? " + queue.isEmpty());
 
        // 9. PriorityQueue operations

        Queue<Integer> priorityQueue = new PriorityQueue<>();

        priorityQueue.offer(30);

        priorityQueue.offer(10);

        priorityQueue.offer(20);

        System.out.println("PriorityQueue (natural order): " + priorityQueue);

        System.out.println("Poll from PriorityQueue: " + priorityQueue.poll());

        System.out.println("After poll: " + priorityQueue);
 
        // 10. Deque (double-ended queue) with LinkedList

        Deque<String> deque = new LinkedList<>();

        deque.addFirst("Front");

        deque.addLast("Back");

        deque.offerFirst("NewFront");

        deque.offerLast("NewBack");

        System.out.println("Deque after additions: " + deque);
 
        deque.pollFirst();

        deque.pollLast();

        System.out.println("Deque after polling: " + deque);
 
        System.out.println("Peek first: " + deque.peekFirst());

        System.out.println("Peek last: " + deque.peekLast());
 
        // 11. Stack-like behavior using Deque

        deque.push("Top");

        System.out.println("After push: " + deque);

        deque.pop();

        System.out.println("After pop: " + deque);

    }

}

 