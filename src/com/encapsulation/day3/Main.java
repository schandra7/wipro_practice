package com.encapsulation.day3;
 
//Main.java

public class Main {

public static void main(String[] args) {

     // Creating an object

     BankAccount account = new BankAccount("Chandu", "ACC123456", 500000.00);
 
     // Accessing data via public methods (not direct access)

     System.out.println("Account Holder: " + account.getAccountHolderName());

     System.out.println("Account Number: " + account.getAccountNumber());

     System.out.println("Current Balance: ₹" + account.getBalance());
 
     // Performing transactions

     account.deposit(200000);

     account.withdraw(1500);
 
     // Updated balance

     System.out.println("Updated Balance: ₹" + account.getBalance());

}

}

 
