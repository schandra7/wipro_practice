package com.encapsulation.day3;
 
//BankAccount.java
public class BankAccount {
// Private data members (encapsulation)
private String accountHolderName;
private String accountNumber;
private double balance;
 
// Constructor
public BankAccount(String accountHolderName, String accountNumber, double initialBalance) {
     this.accountHolderName = accountHolderName;
     this.accountNumber = accountNumber;
     this.balance = initialBalance;
}
 
// Public getter and setter (controlled access)
public String getAccountHolderName() {
     return accountHolderName;
}
 
public void setAccountHolderName(String name) {
     this.accountHolderName = name;
}
 
public String getAccountNumber() {
     return accountNumber;
}
 
// No setter for account number (immutable after creation)
 
public double getBalance() {
     return balance;
}
 
// Business logic methods
public void deposit(double amount) {
     if (amount > 0) {
         balance += amount;
         System.out.println("Deposited: ₹" + amount);
     } else {
         System.out.println("Invalid deposit amount.");
     }
}
 
public void withdraw(double amount) {
     if (amount > 0 && balance >= amount) {
         balance -= amount;
         System.out.println("Withdrawn: ₹" + amount);
     } else {
         System.out.println("Insufficient balance or invalid amount.");
     }
}
}