package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DeleteData {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
        String url = "jdbc:mysql://localhost:3306/wipro";
        String username = "root";
        String password = "root";

        String empName = "Esha";

        // Load driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Connect
        Connection conn = DriverManager.getConnection(url, username, password);

        // Create delete query
        String query = "DELETE FROM employee WHERE empName = '" + empName + "'";

        // Execute delete
        Statement st = conn.createStatement();
        int rows = st.executeUpdate(query);

        System.out.println("Deleted " + rows + " row(s).");

        st.close();
        conn.close();
    }

}
