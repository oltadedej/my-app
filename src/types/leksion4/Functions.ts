export function add(a: number, b: number): number {
  console.log(`sum is: ${a+b}`);
    return a + b;
};

const multiply = (a: number, b: number): number => a * b;



//Array Functions

export const addArrayFunctionSample1 = (a: number, b: number): number => {
    return a + b;
};

const addArrayFunctionSample2 = (a: number, b: number): number => a + b;


//Function overload 
export function greet(name: string): string;
export function greet(age: number): string;
export function greet(value: string | number): string {
  return `Hello, ${value}`;
}
