class Person{
    name;
    age;

    constructor(n, a){
        this.name = n;
        this.age = a;
    }
}

var john = new Person("John",12);
console.log(john.name+" "+john.age+" ")
Person.prototype.height = 171;
console.log(john.height)