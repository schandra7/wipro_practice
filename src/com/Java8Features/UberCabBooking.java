package com.Java8Features;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class UberCabBooking {
    public static void main(String[] args) {
        List<Driver> drivers = Arrays.asList(
                new Driver("Raj", "Delhi", true),
                new Driver("Simran", "Delhi", false),
                new Driver("Vikram", "Mumbai", true),
                new Driver("Anjali", "Mumbai", false)
        );
 
        BookingService bookingService = new UberBookingSystem(drivers);
        String userLocation = "Mumbai";
 
        Optional<Driver> driverOpt = bookingService.bookRide(userLocation);
 
        driverOpt.ifPresentOrElse(
                driver -> System.out.println("Ride booked with: " + driver.getName()),
                () -> System.out.println("No cabs available at your location.")
        );
    }
}

