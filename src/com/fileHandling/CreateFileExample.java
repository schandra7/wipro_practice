package com.fileHandling;

import java.io.File;
import java.io.IOException;
 
public class CreateFileExample {
    public static void main(String[] args) {
        File file = new File("wipro.txt");
        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
 
 

