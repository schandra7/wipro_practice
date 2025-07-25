package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class InsertData {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
	String url = "jdbc:mysql://localhost:3306/wipro";
	String username = "root";
	String password = "root";


	 String query = "INSERT INTO employee (empName, salary) VALUES " +
             "('Ajay', 60000), " +
             "('Bhanu', 55000), " +
             "('Chandra', 52000), " +
             "('Deepak', 58000), " +
             "('Esha', 61000)";
	
		
	//load the driver
	Class.forName("com.mysql.cj.jdbc.Driver");
	//Establish the connection
	Connection conn = DriverManager.getConnection(url,username,password);
	//create statement
	Statement st =conn.createStatement();
	//int x = st.executeUpdate("insert into employee values( empId,)");
	
	//Execute the Query
	int rows = st.executeUpdate(query);
	System.out.println("Successfully Inserted: "+rows);			
	
	//int x = stmt.executeUpdate("insert into employee values('" +Id+ "',  '" +name+ "','"+salary+"','"+department+"')");
	//System.out.println("Successfully created the table");
	st.close();
	conn.close();
}
}
