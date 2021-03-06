
// Assignment 01
let person = {
    name: 'Robert',
    age: 33,
}

let address = {
    country: 'Macedonia',
    city: 'Skopje'
}
let objArr = [person, address];

function mergeObjects(objArr) {
    return Object.assign(address, person);
}

console.log(mergeObjects(person, address));

//Assignment 02

function Student(firstName, lastName, address = {city, number, street}, currentSubject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address; 
    this.subject = currentSubject;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    this.getAddress = function() {
        const {city, number, street} = this.address
        console.log(`${city}, ${street} ${number}`);
    }
}

let robert = new Student('Robert', 'Dimov', {city: 'Veles', number: 22, street: 'Rosa Plaveva'});

robert.getFullName();
robert.getAddress();




