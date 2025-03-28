export class Vehicle {
    public model: string;  // Accessible anywhere
    private engineNumber: string;  // Accessible only inside the class
    protected speed: number;  // Accessible in child classes
    readonly info: string; // accessible anywhere but can be initialized only on declaration or constructor. Once with value, can't change

    constructor(model: string, engineNumber: string, speed: number, info: string) {
        this.model = model;
        this.engineNumber = engineNumber;
        this.speed = speed;
        this.info = `${info} - ${this.model}`;
    }

    // public showEngineNumber(): void {
    //     console.log(`Engine Number: ${this.engineNumber}`);
    // }

    public showEngineNumber(): string {  //declare it as string in order to use at tsx components
        return `Engine Number: ${this.engineNumber}`;
    }
}

// Creating first object
export const teslaVehicle = new Vehicle("Tesla", "ENG12345", 200, "Vehicle");

teslaVehicle.showEngineNumber(); // accessing private property using public Functions
console.log(`Vehicle Model: ${teslaVehicle.model}`); // accessing public property using the created object
console.log(`Vehicle Model: ${teslaVehicle.info}`); // accessing readOnly properties

// Creating second object
export const audiVehicle = new Vehicle("Audi", "ENG4567", 250, "Vehicle");
audiVehicle.showEngineNumber();
