package com.ecommerce;



public class Electronics extends Product {
    private String brand;

    public Electronics(int id, String name, double price, int stock, String brand) {
        super(id, name, price, stock);
        this.brand = brand;
    }

    public String getBrand() { return brand; }

    @Override
    public String toString() {
        return super.toString() + " | Brand: " + brand;
    }
}
