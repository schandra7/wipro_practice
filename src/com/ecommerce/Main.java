package com.ecommerce;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	EcommerceService service = new EcommerceService();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("1. Place Order\n2. View Order\n3. Exit");
            System.out.print("Choose an option: ");
            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    service.placeOrder();
                    break;
                case 2:
                    service.ViewOrder();
                    break;
                case 3:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice.");
            }
        }
        
    }
}
