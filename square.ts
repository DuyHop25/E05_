import { Rectangle } from "./rectangle";
import { question } from "readline-sync";

export class Square extends Rectangle {
    protected side: number;

    constructor(side: number) {
        super(side, side);
        this.side = side;
    }

    input(): void {
        super.input;
        this.side = Number(question("Nhap canh: "));
    }

    output(): void {
        super.output;
        console.log(`side: ${this.side}`);
    }
    
    getArea(): number {
        super.getArea;
        return this.side * this.side;
    }
}