package com.fileHandling;
import java.io.File;

public class DeleteFileExample {
    public static void main(String[] args) {
        File file = new File("wipro.txt");
        if (file.delete()) {
            System.out.println("Deleted the file: " + file.getName());
        } else {
            System.out.println("Failed to delete the file.");
        }
    }
}
