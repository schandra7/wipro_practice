package com.std_pkg;

import java.util.*;

public class Student {
    private int id;
    private String name;
    private Map<String, Integer> subjectMarks;

    public Student(int id, String name, Map<String, Integer> subjectMarks) {
        this.id = id;
        this.name = name;
        this.subjectMarks = subjectMarks;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public Map<String, Integer> getSubjectMarks() { return subjectMarks; }

    public void setSubjectMarks(Map<String, Integer> subjectMarks) {
        this.subjectMarks = subjectMarks;
    }

    public double getAverage() {
        return subjectMarks.values().stream()
                .mapToInt(Integer::intValue)
                .average()
                .orElse(0.0);
    }

    @Override
    public String toString() {
        return String.format("ID: %d, Name: %s, Avg: %.2f, Marks: %s", id, name, getAverage(), subjectMarks);
    }
}

