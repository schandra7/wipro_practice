package com.wipro.corejava.practice;

class Student {
    String name;
    int rollno;

    public void inputDetails(String name, int rollNumber) {
        this.name = name;
        this.rollno = rollNumber;
    }

    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollno);
    }
}

class College extends Student{// single A->B
	String collegeName;
	String courseName;
	
	public void inputCollegeDetails(String collegeName, String course) {
        this.collegeName = collegeName;
        this.courseName = course;
    }

    public void displayCollegeDetails() {
        System.out.println("College: " + collegeName);
        System.out.println("Course: " + courseName);
    }
	
}
class Results extends College{//multi-level A->B->C
	int marks;
	public void inputMarks(int marks) {
		this.marks=marks;
	}
	public void displayMarks() {
		System.out.println("Marks scored: "+marks);
	}
}
public class InheritanceExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Results stud= new Results();
		stud.inputDetails("Chandu", 101);
        stud.inputCollegeDetails("SRIT", "CSE");
        stud.inputMarks(100);
        
        stud.displayDetails();
        stud.displayCollegeDetails();
        stud.displayMarks();
	}

}
