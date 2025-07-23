package com.wipro.corejava.practice;

import java.util.Scanner;

public class BankWithdrawal{

	public static void main(String[] args) {

		double balance = 10000.00;

		Scanner scanner = new Scanner(System.in);

		// withdraw the amount

		while(true) {

			System.out.println("Current Balance" +balance);

			System.out.println("Enter amount to withdraw");

			double withdrawAmount = scanner.nextDouble();

			if (withdrawAmount ==0) {

				System.out.println("Transaction ended");

				break;

			}

			if (withdrawAmount > balance) {

				System.out.println("Insufficient Balance");

			}

			else if(withdrawAmount <= 0) {

				System.out.println("Invalid Amount");

			}

			else {

				balance  -= withdrawAmount;

				System.out.println("withdrwal successful" + withdrawAmount);

			}

		}

		scanner.close();

	}

}