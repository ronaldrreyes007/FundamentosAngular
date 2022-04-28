import { copyFileSync } from "fs";

const username:string = 'nicobytes';
const suma = (a: number,b:number) =>{
    return a+b;
}
suma(1,2);

class person{
    //age: number;
    //lastName: string;
    constructor(public age:number,public lastName:string){
       // this.age=age;
        //this.lastName=lastName;

    }
}
const ronald = new person(39,'reyes');
ronald.age;