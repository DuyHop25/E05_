import { Shape } from "./shape";
import { question } from "readline-sync";

export class Rectangle extends Shape {

    protected width: number;
    protected height: number;

    constructor(width: number = 2, height: number = 1) {
        super("HCN");
        this.width = width > 0 ? width : 2;
        this.height = height > 0 ? height : 1;
    }

    input(): void {
        super.input;
        this.width = Number(question("Nhap chieu dai: "));
        this.height = Number(question("Nhap chieu rong: "));
    }

    output(): void {
        super.output;
        console.log(`width: ${this.width}`);
        console.log(`height: ${this.height}`);
    }

    getArea(): number {
        super.getArea;
        return this.width * this.height;
    }
}