function add(a: number, b: number): number {
    return a + b;
};

const multiply = (a: number, b: number): number => a * b;



//Array Functions

const addArrayFunctionSample1 = (a: number, b: number): number => {
    return a + b;
};

const addArrayFunctionSample2 = (a: number, b: number): number => a + b;


//Function overload 
function greet(name: string): string;
function greet(age: number): string;
function greet(value: string | number): string {
  return `Hello, ${value}`;
}
