package com.Java8Features;

import java.util.List;
import java.util.Optional;

class Driver {
	    private String name;
	    private String location;
	    private boolean available;
	 
	    public Driver(String name, String location, boolean available) {
	        this.name = name;
	        this.location = location;
	        this.available = available;
	    }
	 
	    public String getName() {
	        return name;
	    }
	 
	    public String getLocation() {
	        return location;
	    }
	 
	    public boolean isAvailable() {
	        return available;
	    }
	 
	    @Override
	    public String toString() {
	        return "Driver{" +
	                "name='" + name + '\'' +
	                ", location='" + location + '\'' +
	                ", available=" + available +
	                '}';
	    }
	}
	 
	@FunctionalInterface
	interface BookingService {
	    Optional<Driver> bookRide(String userLocation);
	}
	 
	class UberBookingSystem implements BookingService {
	    private List<Driver> drivers;
	 
	    public UberBookingSystem(List<Driver> drivers) {
	        this.drivers = drivers;
	    }
	 
	    @Override
	    public Optional<Driver> bookRide(String userLocation) {
	        return drivers.stream()
	                .filter(Driver::isAvailable) // ✅ now valid
	                .filter(d -> d.getLocation().equalsIgnoreCase(userLocation))
	                .findFirst();
	    }
	}
	 
	