package com.Java8Features;
 
 
import java.time.LocalDate;

import java.time.LocalTime;

import java.time.LocalDateTime;

import java.time.format.DateTimeFormatter;
 
public class DateTimeExample {

    public static void main(String[] args) {

        LocalDate date = LocalDate.now();

        LocalTime time = LocalTime.now();

        LocalDateTime dateTime = LocalDateTime.now();
 
        System.out.println("Date: " + date);

        System.out.println("Time: " + time);

        System.out.println("DateTime: " + dateTime);
 
        // Custom formatter

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

        String formatted = dateTime.format(formatter);

        System.out.println("Formatted DateTime: " + formatted);

    }

}

 