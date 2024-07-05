class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public setAge(newAge: number): void {
        this.age = newAge;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let person1 = new Person('a', 12);
console.log(person1.getDetails())

person1.setName("Bob");

person1.setAge(35);

console.log(person1.getDetails());
