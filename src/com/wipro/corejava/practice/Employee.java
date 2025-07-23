package com.wipro.corejava.practice;

public class Employee {
	int emp_id=101;
	String emp_name="Chandu";
	boolean is_employee=true;
	//double salary=2000.980;
	
	public void get_salary(double salary,double bonus) {
		double total_salary=salary+bonus;
		int year_of_exp=5;
		double half_bonus=salary+bonus/2;
		if(salary >= 50000 || year_of_exp==5) {
			System.out.println(total_salary);
		}
		else if(salary > 20000 && year_of_exp == 5) 
		{
			System.out.println(salary+half_bonus);
		}
		else { 
			System.out.println(salary);
		}
		
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee emp = new Employee();
		emp.get_salary(20000, 1000);

	}

}
