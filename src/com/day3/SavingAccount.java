package com.day3;

public class SavingAccount extends BankAccount {
    private static final double MIN_BALANCE = 1000;

    public SavingAccount(String account_no, double balance) {
        super(account_no, balance);
    }

    @Override
    public void withdraw(double amount) {
        if (balance - amount >= MIN_BALANCE) {
            balance -= amount;
            System.out.println("Withdraw successful: " + amount);
        } else {
            System.out.println("Withdrawal denied. Minimum balance of ₹" + MIN_BALANCE + " must be maintained.");
        }
    }
}
