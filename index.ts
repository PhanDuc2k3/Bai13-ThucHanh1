

// interface PersonInterface{
//     name:String;
//     age:number;
//     // introduce():string;
//     introduce?:(massage:string)=>string;
// }

// interface UserInterface extends PersonInterface{
//     class:number;
// }

let person:PersonInterface ={
    name:'abc',
    age:20,
    introduce(massage:string){
        return massage;
    }
}

// let User:UserInterface ={
//     name:'abc',
//     age:20,
//     class:11,
// }

type PersonInterface = {
    name:String;
    age:number;
    // introduce():string;
    introduce?:(massage:string)=>string;
}