package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class UpdateData {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
        String url = "jdbc:mysql://localhost:3306/wipro";
        String username = "root";
        String password = "root";

        String empName = "Akhil";
        int newSalary = 75000;

        // Load driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Connect
        Connection conn = DriverManager.getConnection(url, username, password);

        // Create update query
        String query = "UPDATE employee SET salary = " + newSalary + " WHERE empName = '" + empName + "'";
        //String q2="Select * from employee";

        // Execute update
        Statement st = conn.createStatement();
        int rows = st.executeUpdate(query);
        

        System.out.println("Updated " + rows + " row(s).");
        //System.out.println(st.executeUpdate(q2));

        st.close();
        conn.close();

 }
}
