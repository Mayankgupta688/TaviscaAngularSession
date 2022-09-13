// Prototypical Chaining....

class Employee {
    empName: string;
    empAge: number;
    salary: number;
    constructor(name: string, age: number, salary: number) {
        this.empName = name;
        this.empAge = age;
        this.salary = salary;
    }

    incrementSalary() {
        this.salary = 1.2 * this.salary
    }

    getEmployeeSalary() {
        alert(this.salary)
    }

    getDetails() {

        // Context of Execution = this

        console.log("Employee Name is " + this.empName)
        console.log("Employee Age is " + this.empAge)
    }
}

// new Employee("Mayank", 10, 10000);

var employeeOne = new Employee("Mayank", 10, 10000);

employeeOne.incrementSalary()

employeeOne.getEmployeeSalary()