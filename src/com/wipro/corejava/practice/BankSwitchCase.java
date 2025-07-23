package com.wipro.corejava.practice;

import java.util.Scanner;

public class BankSwitchCase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double balance = 10000.00;
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n--- Bank Menu ---");
            System.out.println("1. Withdraw");
            System.out.println("2. Check Balance");
            System.out.println("3. Exit");
            System.out.print("Enter your choice (1-3): ");

            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter amount to withdraw: ");
                    double withdrawAmount = scanner.nextDouble();

                    if (withdrawAmount <= 0) {
                    	 System.out.println("Invalid amount.");
                    } else if (withdrawAmount > balance) {
                        System.out.println("Insufficient balance.");
                    } else {
                        balance -= withdrawAmount;
                        System.out.println("Withdrawal successful: ₹" + withdrawAmount);
                    }
                    break;

                case 2:
                    System.out.println("Current Balance: ₹" + balance);
                    break;

                case 3:
                    System.out.println("Thank you! transaction completed.");
                    scanner.close();
                    return;

                default:
                    System.out.println("Invalid choice. Please select in the options.");
            }
        }

	}

}
