// Defining an interface
interface Employee {
    name: string;
    department: string;
    work(): void;
  }
  
  // Implementing the interface in a class
  class Developer implements Employee {
    name: string;
    department: string;
  
    constructor(name: string, department: string) {
      this.name = name;
      this.department = department;
    }
  
    work(): string {
      return(`${this.name} is coding in the ${this.department} department.`);
    }
  }
  
  // Creating an instance
  export const dev = new Developer("John", "Software Engineering");
  dev.work(); // Output: Alice is coding in the Software Engineering department.
  