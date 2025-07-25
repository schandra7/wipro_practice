package com.day3;

import java.io.*;

//Checked Exception
class CustomCheckedException extends Exception {
 public CustomCheckedException(String msg) {
     super(msg);
 }
}

//Unchecked Exception
class CustomUncheckedException extends RuntimeException {
 public CustomUncheckedException(String msg) {
     super(msg);
 }
}

public class ExceptionDemo {

 // Method that throws checked exception
 public static void checkAge(int age) throws CustomCheckedException {
     if (age < 18) {
         throw new CustomCheckedException("Age must be 18+");
     } else {
         System.out.println("Eligible to vote.");
     }
 }

 public static void main(String[] args) {

     // try-catch-finally with checked exception
     try {
         checkAge(16);
     } catch (CustomCheckedException e) {
         System.out.println("Caught Checked Exception: " + e.getMessage());
     } finally {
         System.out.println("Finished checked exception check\n");
     }

     // try with multiple catch blocks
     try {
         int[] arr = new int[2];
         System.out.println(arr[5]); // ArrayIndexOutOfBounds
     } catch (ArithmeticException e) {
         System.out.println("Arithmetic Exception: " + e.getMessage());
     } catch (ArrayIndexOutOfBoundsException e) {
         System.out.println("Array Exception: " + e.getMessage());
     } finally {
         System.out.println("Array check done\n");
     }

     // Nested try-catch
     try {
         System.out.println("Outer try block");
         try {
             int a = 10 / 0;
         } catch (ArithmeticException e) {
             System.out.println("Inner catch: Division by zero");
         }
     } catch (Exception e) {
         System.out.println("Outer catch: " + e);
     } finally {
         System.out.println("Nested try completed\n");
     }

     // throw unchecked exception
     try {
         throw new CustomUncheckedException("This is an unchecked exception");
     } catch (CustomUncheckedException e) {
         System.out.println("Caught Unchecked Exception: " + e.getMessage());
     }

     // try-finally (no catch)
     try {
         System.out.println("\nInside try without catch");
     } finally {
         System.out.println("Finally block executed even without catch");
     }
 }
}
