package com.day3;

abstract class BankAccount{
	protected  String account_no;
	protected double balance;
	public BankAccount(String account_no, double balance) {
		super();
		this.account_no = account_no;
		this.balance = balance;
	}
	public abstract void withdraw(double amount);
	public void deposit(double amount) {
		balance += amount;
		System.out.println("Deposited:" +amount);
	}
	public void displayBalance() {
		System.out.println("Account" + account_no + "Balance" +balance);
	}
}
