package com.ecommerce;



public class Order {
	private int orderId;
	private static int counter = 1000;
    private Customer customer;
    private Product product;
    private int quantity;
    private double total;

    public Order(Customer customer, Product product, int quantity) {
    	this.orderId = counter++;
        this.customer = customer;
        this.product = product;
        this.quantity = quantity;
        this.total = product.getPrice() * quantity;
    }

    public void printOrderSummary() {
        System.out.println("Order Summary:");
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer: " + customer.getName());
        System.out.println("Product: " + product.getName());
        System.out.println("Quantity: " + quantity);
        System.out.println("Total: ₹" + total);
    }

	public int getOrderId() {
		// TODO Auto-generated method stub
		return orderId;
	}
}
