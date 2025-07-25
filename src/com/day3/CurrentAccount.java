package com.day3;


public class CurrentAccount extends BankAccount{
	private static final double overdraft_limit = 2000;
	public CurrentAccount(String account_no,double balance) {
		super(account_no,balance);
	}
 
	@Override
	public void withdraw(double amount) {
		if (balance - amount >= overdraft_limit  ) {
			balance -=amount;
			System.out.println("Withdraw successful" +amount);
		}
		else
		{
			System.out.println("overdraft limit exceeded");
		}
	}
 
	
}
