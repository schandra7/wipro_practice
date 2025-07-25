package com.ecommerce;

import java.util.*;

public class EcommerceService {
    private List<Product> catalog = new ArrayList<>();
    private Product[] catalogArray = {
    	    new Electronics(101, "Smartphone", 30000, 8, "Samsung"),
    	    new Clothing(102, "Jeans", 1200, 15, "L")
    	};

    private List<Order> orderHistory = new ArrayList<>();
    
    private Scanner sc = new Scanner(System.in);

    public EcommerceService() {
        catalog.add(new Electronics(1, "Laptop", 45000, 5, "Dell"));
        catalog.add(new Clothing(2, "T-Shirt", 500, 10, "M"));
        
    }

    public void displayProducts() {
    	System.out.println("\n--- Featured Products ---");
        for (Product p : catalog) {
            System.out.println(p);
        }
    }
    public void displayCatalogArray() {
        
        for (Product p : catalogArray) {
            System.out.println(p);
        }
    }

    public Product selectProduct(int id) throws InvalidInputException {
        return catalog.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElseThrow(() -> new InvalidInputException("Product not found"));
    }
    public void viewOrder(int orderId) throws OrderNotFoundException {
        Order order = orderHistory.stream()
            .filter(o -> o.getOrderId() == orderId)
            .findFirst()
            .orElseThrow(() -> new OrderNotFoundException("Order with ID " + orderId + " not found."));

        order.printOrderSummary();
    }
    

    public void placeOrder() {
        try {
            System.out.print("Enter Customer Name: ");
            String name = sc.nextLine();
            Customer customer = new Customer(new Random().nextInt(1000), name);

            displayProducts();
            displayCatalogArray();

            System.out.print("Enter Product ID to buy: ");
            int id = Integer.parseInt(sc.nextLine());
            Product product = selectProduct(id);

            System.out.print("Enter quantity: ");
            int quantity = Integer.parseInt(sc.nextLine());
            if (quantity > product.getStock()) {
                throw new OutOfStockException("Only " + product.getStock() + " items in stock.");
            }

            product.reduceStock(quantity);

            Order order = new Order(customer, product, quantity);
            orderHistory.add(order);
            order.printOrderSummary();

            System.out.print("Pay via (1) CreditCard or (2) UPI: ");
            int choice = Integer.parseInt(sc.nextLine());
            Payment payment = (choice == 1) ? new CreditCardPayment() : new UpiPayment();
            payment.pay(product.getPrice() * quantity);

        } catch (InvalidInputException | OutOfStockException e) {
            System.err.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Unexpected error occurred.");
        }
    }
    public void ViewOrder() {
        try {
            System.out.print("Enter Order ID: ");
            int orderId = Integer.parseInt(sc.nextLine());
            viewOrder(orderId);
        } catch (OrderNotFoundException e) {
            System.err.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("Unexpected error occurred.");
        }
    }
}
