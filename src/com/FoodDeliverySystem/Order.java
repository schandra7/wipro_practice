package com.FoodDeliverySystem;
import java.util.*;

class Order {
private String customerName;
private String restaurantName;
private List<MenuItem> items;
private Date orderDate;
 
public Order(String customerName, String restaurantName, List<MenuItem> items) {
     this.customerName = customerName;
     this.restaurantName = restaurantName;
     this.items = items;
     this.orderDate = new Date();
}
 
@Override
public String toString() {
     return "Order by " + customerName + " from " + restaurantName + ": " + items + " on " + orderDate;
}
}
