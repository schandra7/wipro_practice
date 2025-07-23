package com.wipro.corejava.practice;

import java.util.Scanner;

public class BankScanner {
    int age;
    String user_name;
    boolean is_pan_available;
    boolean has_account = false;
    double balance = 0.0;

    // Create Account Method
    public void createAccount() {
        if (age >= 18 && is_pan_available == true) {
            has_account = true;
            System.out.println("Account Created for user: " + user_name);
        } else if (age < 18 && is_pan_available) {
            System.out.println("Too young to create an account.");
        } else if (age >= 18 && !is_pan_available) {
            System.out.println("PAN card is required to open account.");
        } else {
            System.out.println("Account cannot be created.");
        }
    }

    // Deposit Method
    public void deposit(double amount) {
        if (has_account && amount > 0) {
            balance += amount;
            System.out.println("Deposited: ₹" + amount);
            System.out.println("Current Balance: ₹" + balance);
        } else if (!has_account) {
            System.out.println("No active account to deposit money.");
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // Withdraw Method
    public void withdraw(double amount) {
        if (has_account && amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
            System.out.println("Remaining Balance: ₹" + balance);
        } else if (!has_account) {
            System.out.println("No active account to withdraw from.");
        } else if (amount > balance) {
            System.out.println("Insufficient balance.");
        } else {
            System.out.println("Invalid withdrawal amount.");
        }
    }

    // Main method to drive the program
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Bank myBank = new Bank();

        // Get user details
        System.out.print("Enter your name: ");
        myBank.user_name = sc.nextLine();

        System.out.print("Enter your age: ");
        myBank.age = sc.nextInt();

        System.out.print("Do you have PAN card? (true/false): ");
        myBank.is_pan_available = sc.nextBoolean();

        // Try to create account
        myBank.createAccount();

        if (myBank.has_account) {
            System.out.print("Enter amount to deposit: ");
            double depositAmount = sc.nextDouble();
            myBank.deposit(depositAmount);

            System.out.print("Enter amount to withdraw: ");
            double withdrawAmount = sc.nextDouble();
            myBank.withdraw(withdrawAmount);
        }

        sc.close();
    }
}

