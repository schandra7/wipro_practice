package com.FoodDeliverySystem;
import java.util.*;

public class MiniFoodDeliverySystem {

private static Map<String, Restaurant> restaurantMap = new HashMap<>();

private static Map<String, List<Order>> customerOrdersMap = new HashMap<>();

private static Scanner scanner = new Scanner(System.in);
 
public static void main(String[] args) {

     int choice;

     do {

         System.out.println("\n--- Food Delivery System ---");

         System.out.println("1. Add Restaurant");

         System.out.println("2. Add Menu Item");

         System.out.println("3. Place Order");

         System.out.println("4. Show All Restaurants");

         System.out.println("5. Show Orders by Customer");

         System.out.println("0. Exit");

         System.out.print("Enter choice: ");

         choice = scanner.nextInt();

         scanner.nextLine(); // clear buffer
 
         switch (choice) {

             case 1 : addRestaurant();

             case 2 : addMenuItem();

             case 3 : placeOrder();

             case 4 : showAllRestaurants();

             case 5 : showOrdersByCustomer();

             case 0 : System.out.println("Exiting...");

             default : System.out.println("Invalid choice!");

         }

     } while (choice != 0);

}
 
private static void addRestaurant() {

     System.out.print("Enter restaurant name: ");

     String name = scanner.nextLine();

     restaurantMap.put(name, new Restaurant(name));

     System.out.println("Restaurant added.");

}
 
private static void addMenuItem() {

     System.out.print("Enter restaurant name: ");

     String name = scanner.nextLine();

     Restaurant restaurant = restaurantMap.get(name);

     if (restaurant == null) {

         System.out.println("Restaurant not found.");

         return;

     }

     System.out.print("Enter item name: ");

     String itemName = scanner.nextLine();

     System.out.print("Enter item price: ");

     double price = scanner.nextDouble();

     scanner.nextLine(); // clear buffer

     restaurant.addMenuItem(new MenuItem(itemName, price));

     System.out.println("Item added.");

}
 
private static void placeOrder() {

     System.out.print("Enter customer name: ");

     String customer = scanner.nextLine();

     System.out.print("Enter restaurant name: ");

     String restName = scanner.nextLine();

     Restaurant restaurant = restaurantMap.get(restName);

     if (restaurant == null) {

         System.out.println("Restaurant not found.");

         return;

     }
 
     List<MenuItem> menu = restaurant.getMenu();

     if (menu.isEmpty()) {

         System.out.println("Menu is empty.");

         return;

     }
 
     System.out.println("Menu:");

     for (int i = 0; i < menu.size(); i++) {

         System.out.println((i + 1) + ". " + menu.get(i));

     }
 
     List<MenuItem> selectedItems = new ArrayList<>();

     String input;

     do {

         System.out.print("Enter item number to add (or 'done' to finish): ");

         input = scanner.nextLine();

         if (!input.equalsIgnoreCase("done")) {

             try {

                 int itemNo = Integer.parseInt(input);

                 if (itemNo < 1 || itemNo > menu.size()) {

                     System.out.println("Invalid item number.");

                 } else {

                     selectedItems.add(menu.get(itemNo - 1));

                 }

             } catch (NumberFormatException e) {

                 System.out.println("Invalid input.");

             }

         }

     } while (!input.equalsIgnoreCase("done"));
 
     if (selectedItems.isEmpty()) {

         System.out.println("No items selected. Order canceled.");

         return;

     }
 
     Order order = new Order(customer, restName, selectedItems);

     customerOrdersMap.computeIfAbsent(customer, k -> new ArrayList<>()).add(order);

     System.out.println("Order placed successfully!");

}
 
private static void showAllRestaurants() {

     if (restaurantMap.isEmpty()) {

         System.out.println("No restaurants found.");

         return;

     }

     restaurantMap.values().forEach(System.out::println);

}
 
private static void showOrdersByCustomer() {

     System.out.print("Enter customer name: ");

     String name = scanner.nextLine();

     List<Order> orders = customerOrdersMap.get(name);

     if (orders == null || orders.isEmpty()) {

         System.out.println("No orders found.");

         return;

     }

     orders.forEach(System.out::println);

}

}

 
