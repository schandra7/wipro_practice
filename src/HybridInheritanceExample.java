interface Work {
    void doWork();
}

interface Teach {
    void teach();
}

class Person {
    String name = "Chandu";

    void showName() {
        System.out.println("Name: " + name);
    }
}

class Employee extends Person implements Work {
    public void doWork() {
        System.out.println("Doing official work");
    }
}

class Developer extends Employee implements Teach {
    public void teach() {
        System.out.println("Teaching Java");
    }
}

public class HybridInheritanceExample {
    public static void main(String[] args) {
        Developer dev = new Developer();

        dev.showName();   // From Person
        dev.doWork();     // From Work interface via Employee
        dev.teach();      // From Teach interface via Developer
    }
}
