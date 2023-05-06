import { question } from "readline-sync";

export abstract class Shape {

    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    input(){
        this.name = question("Nhap ten:");
    }

    output(){
        console.log(`name: ${this.name}`);
    }
    
    getArea(){};
}



