export function identity<T>(value: T): T {
    return value;

    //per te shfaqur dhe vleren 
  }
  
  console.log(identity<number>(10)); // ✅ Output: 10
  console.log(identity<string>("Hello")); // ✅ Output: "Hello"
  console.log(identity<boolean>(true)); // ✅ Output: true
  