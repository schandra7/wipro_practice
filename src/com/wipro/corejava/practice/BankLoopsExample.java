package com.wipro.corejava.practice;
import java.util.Scanner;

public class BankLoopsExample {
	double balance = 10000.0;
	
	public void applyMonthlyInterest() {
        double interestRate = 0.02; // 2%
        
        System.out.println("Interest Calculation for 6 months:");
        for (int month = 1; month <= 6; month++) {
            double interest = balance * interestRate;
            balance += interest;
            System.out.printf("Month %d: Interest ₹%.2f, Balance ₹%.2f\n", month, interest, balance);
        }
        System.out.println("total balance after 6 months : "+balance);
    }
	public void verifyATMAccess() {
	        Scanner sc = new Scanner(System.in);
	        String correctPin = "1234";
	        String enteredPin = "";

	        System.out.println("ATM PIN Verification:");
	        int attempts = 0;
	        while (!enteredPin.equals(correctPin) && attempts < 3) {
	            System.out.print("Enter your 4-digit PIN: ");
	            enteredPin = sc.nextLine();
	            attempts++;

	            if (!enteredPin.equals(correctPin)) {
	                System.out.println("Incorrect PIN. Try again.");
	            }
	        }

	        if (enteredPin.equals(correctPin)) {
	            System.out.println("Access granted.");
	        } else {
	            System.out.println("Card blocked after 3 failed attempts.");
	        }
	}
	public void withdrawMoney() {
        Scanner sc = new Scanner(System.in);
        String choice;

        System.out.println("Withdrawal Menu:");
        do {
            System.out.print("Enter amount to withdraw: ");
            double amount = sc.nextDouble();

            if (amount > 0 && amount <= balance) {
                balance -= amount;
                System.out.println("₹" + amount + " withdrawn. Current balance: ₹" + balance);
            } else {
                System.out.println("Invalid or insufficient balance.");
            }

            System.out.print("Do you want to withdraw again? (yes/no): ");
            choice = sc.next();

        } while (choice.equalsIgnoreCase("yes"));
    }
	
	 public static void main(String[] args) {
		// TODO Auto-generated method stub
	        BankLoopsExample bank = new BankLoopsExample();

	        bank.applyMonthlyInterest();	//for
	        bank.verifyATMAccess();		//while
	        bank.withdrawMoney();	//do-while  
	        
	    }
}


