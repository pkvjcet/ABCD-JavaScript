console.log("class example");
class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    setName(name){
        this.name=name
    }
}
let mycar=new Vehicle('Maruthi 800','Suzuki','800cc');
mycar.setName('xyz');
console.log(mycar.name);
