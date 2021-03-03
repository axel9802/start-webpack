export class helloWorld{
    name:String
    constructor(name:String){
        this.name =  name;
    }
    saludar():String{
        return `Hola Mundo, Webpack con ${this.name}!`;
    }
}