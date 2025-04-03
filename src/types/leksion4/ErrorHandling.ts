export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function divideWithInstanceOfError() {

  try {
    let result = divide(10, 0); // This will throw an error
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error occurred:", error.message); // Output: Error occurred: Cannot divide by zero
    }
  }
};


//Erroret ne baze te tipit
function typeOfErrors() {
  try {
    throw new TypeError("This is a type error");
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Caught a TypeError:", error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
}