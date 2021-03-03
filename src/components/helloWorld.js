export class helloWorld{
    constructor(name){
        this.name =  name;
    }
    saludar(){
        return `Hola Mundo, Webpack con ${this.name}!`;
    }
}