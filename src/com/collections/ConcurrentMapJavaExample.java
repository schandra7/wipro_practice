package com.collections;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Iterator;
import java.util.Map;
 
public class ConcurrentMapJavaExample {
    public static void main(String[] args) throws InterruptedException {
        final ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<String, Integer>();
 
        // Thread 1
        Thread writer1 = new Thread(new Runnable() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    map.put("T1-Key" + i, i);
                    System.out.println("Writer1 added: T1-Key" + i);
                    
                    try {
                        Thread.sleep(5000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        });
 
        // Thread 2
        Thread writer2 = new Thread(new Runnable() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    map.put("T2-Key" + i, i * 10);
                    System.out.println("Writer2 added: T2-Key" + i);
                    try {
                        Thread.sleep(5000);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        });
 
        writer1.start();
        writer2.start();
 
        writer1.join();
        writer2.join();
 
        // Print all entries
        System.out.println("\nFinal Map Contents:");
        Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Integer> entry = iterator.next();
            System.out.println(entry.getKey() + " => " + entry.getValue());
        }
    }
}
