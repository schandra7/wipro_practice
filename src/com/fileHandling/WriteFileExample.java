package com.fileHandling;


import java.io.FileWriter;
import java.io.IOException;
 
public class WriteFileExample {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("wipro.txt");
            writer.write("Hello, this is a sample text file.\nFile handling in Java.");
            writer.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing.");
            e.printStackTrace();
        }
    }
}
