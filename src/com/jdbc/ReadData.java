package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ReadData {
	 public static void main(String[] args) throws ClassNotFoundException, SQLException {
	        String url = "jdbc:mysql://localhost:3306/wipro";
	        String username = "root";
	        String password = "root";

	        // Load MySQL driver
	        Class.forName("com.mysql.cj.jdbc.Driver");

	        // Establish connection
	        Connection conn = DriverManager.getConnection(url, username, password);

	        // Create SELECT query
	        String query = "SELECT * FROM employee";

	        // Create statement
	        Statement st = conn.createStatement();

	        // Execute query
	        ResultSet rs = st.executeQuery(query);

	        // Print header
	        System.out.println("empId\tempName\tsalary");
	        System.out.println("========================");

	        // Loop through result
	        while (rs.next()) {
	            int id = rs.getInt("empId");
	            String name = rs.getString("empName");
	            int salary = rs.getInt("salary");
	            System.out.println(id + "\t" + name + "\t" + salary);
	        }

	        // Close resources
	        rs.close();
	        st.close();
	        conn.close();
	    }

}
