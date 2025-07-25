package com.day3;
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}


public class CustomException {

    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 OR above to vote.");
        } else {
            System.out.println("Eligible");
        }
    }

    public static void main(String[] args) {
    	// TODO Auto-generated method stub
        try {
            checkAge(22); 
        } catch (InvalidAgeException e) {
            System.out.println("Caught Exception: " + e.getMessage());
        }
    }
}

