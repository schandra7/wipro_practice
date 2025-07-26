package com.FoodDeliverySystem;

import java.util.*;

class Restaurant {
private String name;
private List<MenuItem> menu;
 
public Restaurant(String name) {
     this.name = name;
     this.menu = new ArrayList<>();
}
 
public String getName() {
     return name;
}
 
public List<MenuItem> getMenu() {
     return menu;
}
 
public void addMenuItem(MenuItem item) {
     menu.add(item);
}
 
@Override
public String toString() {
     return name + " - Menu: " + menu;
}
}