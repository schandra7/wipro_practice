package com.Java8Features;

@FunctionalInterface
interface Payment{

	 // SAM single abstract method 

	public void pay();

	static void displayPrice() {System.out.println("Full price..");}

	default void showTotalAmount(int amount) {System.out.println(amount);}

}

interface Calculator{

	public int operate(int a,int b);

}

public class FunctionalInterfaceExample {

	public static void main(String[] args) {

		Payment payment =  () -> System.out.println("payment done!");

		payment.pay();

		Calculator add = (a,b) -> a+b; //lambda functions

		Calculator sub = (a,b) -> a-b; 

		Calculator div = (a,b) -> a/b; 

		Calculator multiply = (a,b) -> a*b; 

		int x = 10,  y =5;

		System.out.println("addition" + add.operate(x,y));

		System.out.println("addition" + sub.operate(x,y));

		System.out.println("addition" + div.operate(x,y));

		System.out.println("addition" + multiply.operate(x,y));

	}

	

}


