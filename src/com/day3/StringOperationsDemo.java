package com.day3;
 
public class StringOperationsDemo {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "World";
 
        // 1. Concatenation
        String result = str1 + " " + str2;
        System.out.println("Concatenation: " + result);
 
        // 2. Length
        System.out.println("Length of str1: " + str1.length());
 
        // 3. charAt
        System.out.println("Character at index 1 of str1: " + str1.charAt(1));
 
        // 4. Substring
        System.out.println("Substring of str2 (1 to 4): " + str2.substring(1, 4));
 
        // 5. Contains
        System.out.println("str2 contains 'or': " + str2.contains("or"));
 
        // 6. Equals and equalsIgnoreCase
        System.out.println("str1 equals 'Hello': " + str1.equals("Hello"));
        System.out.println("str1 equalsIgnoreCase 'hello': " + str1.equalsIgnoreCase("hello"));
 
        // 7. Replace
        String replaced = str2.replace("World", "Java");
        System.out.println("Replaced str2: " + replaced);
 
        // 8. Split
        String sentence = "Java is awesome";
        String[] words = sentence.split(" ");
        System.out.println("Splitting sentence:");
        for (String word : words) {
            System.out.println(word);
        }
 
        // 9. Trim
        String messy = "   Hello Java   ";
        System.out.println("Trimmed string: '" + messy.trim() + "'");
 
        // 10. toUpperCase and toLowerCase
        System.out.println("str1 to upper case: " + str1.toUpperCase());
        System.out.println("str2 to lower case: " + str2.toLowerCase());
 
        // 11. startsWith and endsWith
        System.out.println("str2 starts with 'W': " + str2.startsWith("W"));
        System.out.println("str2 ends with 'd': " + str2.endsWith("d"));
 
        // 12. indexOf and lastIndexOf
        String testStr = "banana";
        System.out.println("First index of 'a': " + testStr.indexOf('a'));
        System.out.println("Last index of 'a': " + testStr.lastIndexOf('a'));
 
        // 13. isEmpty and isBlank (Java 11+)
        String emptyStr = "";
        System.out.println("Is emptyStr empty: " + emptyStr.isEmpty());
        System.out.println("Is '   ' blank (Java 11+): " + "   ".isBlank());
 
        // 14. join (Java 8+)
        String joined = String.join("-", "2025", "07", "23");
        System.out.println("Joined string: " + joined);
        StringBuilder sb = new StringBuilder("Hello");
      sb.append(" World");  // Appends to the same object (more efficient)
 
     System.out.println("StringBuilder value: " + sb.toString());
//  }
    }
}
 
 
//public class StringBuilderExample {
//    public static void main(String[] args) {
//        StringBuilder sb = new StringBuilder("Hello");
//        sb.append(" World");  // Appends to the same object (more efficient)
//
//        System.out.println("StringBuilder value: " + sb.toString()); //Hello World
//    }
//}