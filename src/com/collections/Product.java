package com.collections;

class Product
{
   private int id;
   private String prod_name;
   private double price;
public Product(int id, String prod_name, double price) {
	super();
	this.id = id;
	this.prod_name = prod_name;
	this.price = price;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getProd_name() {
	return prod_name;
}
public void setProd_name(String prod_name) {
	this.prod_name = prod_name;
}
public double getPrice() {
	return price;
}
public void setPrice(double price) {
	this.price = price;
}
@Override
public String toString() {
	return "Product [id=" + id + ", prod_name=" + prod_name + ", price=" + price + "]";
}

}
