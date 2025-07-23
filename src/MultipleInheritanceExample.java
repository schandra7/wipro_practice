interface A {
    void print();
}
interface B {
    void show();
}

class Display implements A, B {
    public void print() {
        System.out.println("Printing.......");
    }

    public void show() {
        System.out.println("Showing..............");
    }
}

// Main class
public class MultipleInheritanceExample {
    public static void main(String[] args) {
        Display obj = new Display();
        obj.print();  // From A
        obj.show();   // From B
    }
}

