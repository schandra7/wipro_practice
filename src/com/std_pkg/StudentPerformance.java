package com.std_pkg;

import java.util.*;
import java.util.stream.Collectors;

public class StudentPerformance {
    private List<Student> students = new ArrayList<>();
    private Scanner scanner = new Scanner(System.in);

    public void addStudent() {
        System.out.print("Enter ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Name: ");
        String name = scanner.nextLine();

        Map<String, Integer> marks = new HashMap<>();
        System.out.print("Enter number of subjects: ");
        int count = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < count; i++) {
            System.out.print("Subject Name: ");
            String subject = scanner.nextLine();
            System.out.print("Marks: ");
            int mark = scanner.nextInt(); scanner.nextLine();
            marks.put(subject, mark);
        }

        students.add(new Student(id, name, marks));
        System.out.println("Student added successfully!");
    }

    public void updateStudentMarks() {
        System.out.print("Enter student ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();

        Optional<Student> optionalStudent = students.stream()
                .filter(s -> s.getId() == id)
                .findFirst();

        optionalStudent.ifPresentOrElse(student -> {
            System.out.print("Subject to update: ");
            String subject = scanner.nextLine();
            System.out.print("New Marks: ");
            int marks = scanner.nextInt(); scanner.nextLine();
            student.getSubjectMarks().put(subject, marks);
            System.out.println("Marks updated!");
        }, () -> System.out.println("Student not found!"));
    }

    public void displayAllSortedByAverage() {
        students.stream()
                .sorted(Comparator.comparingDouble(Student::getAverage).reversed())
                .forEach(System.out::println);
    }

    public void displayTop3Performers() {
        System.out.println("\nTop 3 Performers:");
        students.stream()
                .sorted(Comparator.comparingDouble(Student::getAverage).reversed())
                .limit(3)
                .forEach(System.out::println);
    }

    public void groupByPassFail() {
        Map<String, List<Student>> grouped = students.stream()
                .collect(Collectors.groupingBy(
                        s -> s.getAverage() >= 40 ? "PASS" : "FAIL"
                ));

        grouped.forEach((status, list) -> {
            System.out.println("\n" + status + " Students:");
            list.forEach(System.out::println);
        });
    }

    public void calculateSubjectAverages() {
        System.out.println("\nOverall Average Per Subject:");
        students.stream()
                .flatMap(s -> s.getSubjectMarks().entrySet().stream())
                .collect(Collectors.groupingBy(
                        Map.Entry::getKey,
                        Collectors.averagingInt(Map.Entry::getValue)
                ))
                .forEach((subject, avg) ->
                        System.out.println(subject + " : " + String.format("%.2f", avg)));
    }

    public void findSubjectToppers() {
        System.out.println("\nSubject-wise Toppers:");
        Set<String> subjects = students.stream()
                .flatMap(s -> s.getSubjectMarks().keySet().stream())
                .collect(Collectors.toSet());

        for (String subject : subjects) {
            students.stream()
                    .filter(s -> s.getSubjectMarks().containsKey(subject))
                    .max(Comparator.comparingInt(s -> s.getSubjectMarks().get(subject)))
                    .ifPresent(topper -> System.out.println(subject + " Topper: " + topper.getName() + " (" + topper.getSubjectMarks().get(subject) + ")"));
        }
    }

    

    public static void main(String[] args) {
        StudentPerformance manager = new StudentPerformance();
        Scanner input = new Scanner(System.in);
        int choice = 0;
        

        while (choice != 8) {
        	System.out.println("Select the options:");
            System.out.println("1. Add Student");
            System.out.println("2. Update Marks");
            System.out.println("3. Display All Sorted by Average");
            System.out.println("4. Top 3 Performers");
            System.out.println("5. Group by Pass/Fail");
            System.out.println("6. Subject Averages");
            System.out.println("7. Subject Toppers");
            // System.out.println("8. Filter Students with Custom Condition");
            System.out.println("8. Exit");
            System.out.print("Enter Choice: ");
            choice = input.nextInt();

            switch (choice) {
                case 1 -> manager.addStudent();
                case 2 -> manager.updateStudentMarks();
                case 3 -> manager.displayAllSortedByAverage();
                case 4 -> manager.displayTop3Performers();
                case 5 -> manager.groupByPassFail();
                case 6 -> manager.calculateSubjectAverages();
                case 7 -> manager.findSubjectToppers();
                case 8 -> System.out.println("Exiting...");
                default -> System.out.println("Invalid choice");
            }
        }

    }
}

