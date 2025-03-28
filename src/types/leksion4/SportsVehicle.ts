import { Vehicle } from "./Vehicle";

class SportsVehicle extends Vehicle {
    // boostSpeed(): void {
    //     console.log(`Boosting speed to ${this.speed + 50} km/h`);
    // }

    boostSpeed(): string {
        return`Boosting speed to ${this.speed + 50} km/h`;
    }
}

export const ferrari = new SportsVehicle("Ferrari", "ENG67890", 300, "Vehicle");
ferrari.showEngineNumber(); //from base class
ferrari.boostSpeed(); //from child class
