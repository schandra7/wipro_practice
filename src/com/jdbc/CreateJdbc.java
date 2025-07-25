package com.jdbc;
import java.sql.*;

public class CreateJdbc {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		String url = "jdbc:mysql://localhost:3306/wipro";
		String username = "root";
		String password = "root";
		
		
		String query = "create table employee("
				+ "empid int primary key auto_increment, "
				+ "empName varchar(20) Not Null,"
				+ "salary int"
				+ " )";
		String q2="Drop table employee";
		
		//load the driver
		Class.forName("com.mysql.cj.jdbc.Driver");
		//Establish the connection
		Connection conn = DriverManager.getConnection(url,username,password);
		//create statement
		Statement st =conn.createStatement();
		
		//Execute the Query
		st.executeUpdate(query);
		System.out.println("Successfully created the table");
		st.close();
		conn.close();
	}

}
