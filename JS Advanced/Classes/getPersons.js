class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    toString(){
        let properties = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        return properties;
    }
}

let arr = []

let personAnna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
arr.push(personAnna);
let softuni = new Person
arr.push(softuni)
//Stephan Johnson 25
let stephan = new Person('Stephan', 'Johnson', 25);
arr.push(stephan);
//Gabriel Peterson 24 g.p@gmail.com
let gabriel = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
arr.push(gabriel);

return arr