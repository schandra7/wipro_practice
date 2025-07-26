package com.collections;

import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;
 
public class MapDemo {
	public static void main(String[] args) {
		Map<Integer,String> employee = new HashMap();
		employee.put(1, "Shweta");
		employee.put(2, "Sravani");
		employee.put(3, "Vijaya");
		employee.put(4, "Sreedipta");
		employee.put(5, "Lahari");
		System.out.println(employee);
		System.out.println(employee.containsKey(10));
		System.out.println(employee.containsValue("Sreedipta"));

		Map<String,Integer> employee1 = new TreeMap();
		employee1.put( "Shweta",6);
		employee1.put( "Sravani",4);
		employee1.put( "Vijaya",5);
		employee1.put( "Sreedipta",3);
		employee1.put( "Lahari",10);
		System.out.println(employee1);
	}
 
}