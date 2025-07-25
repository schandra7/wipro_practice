package com.day3;
 
import java.util.Scanner;
 
public class BankTransaction {
 
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		BankAccount account;
		System.out.println("Select account type: 1.saving 2.current");
		int choice = scan.nextInt();
		if (choice ==1) {
			account = new SavingAccount("SAV123",2000);
		}
		else {
			account = new CurrentAccount("CUR123",4000);
		}
		System.out.println("Banking operation");
		account.displayBalance();
		System.out.println("Enter amount to deposit");
		double deposit_amt = scan.nextDouble();
		account.deposit(deposit_amt);
		account.displayBalance();

		System.out.println("Enter the amount to withdraw");
		double withdraw_amt = scan.nextDouble();
		account.withdraw(withdraw_amt);
		account.displayBalance();

		scan.close();

}
}
