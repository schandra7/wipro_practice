package com.wipro.corejava.practice;

public class Bank {
	int age=21;
	String user_name="chandu";
	boolean is_pan_available=true;
	boolean has_account = false;
    double balance = 0.0;
    
	public void createAccount() {
		if(age>=18 && is_pan_available==true) {
			has_account=true;
			System.out.println("Account Created for user "+ user_name);
		}else {
			System.out.println("Account cannot be created");
		}
	}
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
    public void withdraw(double amount) {
        if (has_account && amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: ₹" + amount);
            System.out.println("Current Balance: ₹" + balance);
        } else if (!has_account) {
            System.out.println("No active account to withdraw from.");
        } else if (amount > balance) {
            System.out.println("Insufficient balance.");
        } else {
            System.out.println("Invalid withdrawal amount.");
        }
    }


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bank myBank = new Bank();
        myBank.createAccount();
        myBank.deposit(5000);
        myBank.withdraw(2000);
 

	}

}
