package com.collections;



import java.util.LinkedList;

import java.util.Queue;

public class QueueExample {

	public static void main(String[] args) {

//		int number[] = {1,2,3,4,7,8,4,5,6};

//		System.out.println(number[5]);

		Queue<Integer>  numbers = new LinkedList();

		numbers.add(2);

		numbers.add(3);

		System.out.println(numbers);

		System.out.println(numbers.contains(1));

		System.out.println(numbers.remove(1));

		System.out.println(numbers);

		numbers.add(4);

		numbers.add(6);

		System.out.println(numbers);


		Queue<Product> product = new LinkedList<>();

		product.add(new Product(1,"Laptop",40000.500));

		product.add(new Product(2,"Mobile",50000.700));

		product.add(new Product(3,"Gymwear",4500));

		product.add(new Product(4,"Bags",4000));

		product.add(new Product(5,"Shoes",400));

		for(Product p : product )

		System.out.println(p);

	}

}



