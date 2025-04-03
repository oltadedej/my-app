let value: unknown = "12";
export let numberValue: number = (value as string).length;

console.log(numberValue); // Output: 3
