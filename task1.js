// 1 Question
const cars = {
    make: "Rolls Royce",
    model: "Ghost",
    year: 2015,
}
Object.freeze(cars);

cars.model = "phontom";

console.log(cars);

// 2 question

const person = {
    name : "Hari",
    age : 23,
    occupation : "Software Engineer"
}
// Object.freeze(person);

console.log(Object.isFrozen(person));


// 3 Question 

const product = {
    name: "Chair",
    price: 250,
    category: "Plastic"
}

// Object.seal(product);

console.log(Object.isSealed(product));

// 4 Question 

const laptop = {
    brand: "Samsung",
    model: "Galaxy Book 2",
    price: 65000
}

console.log(Object.keys(laptop));


// 5 Question

const house = {
    location: "Hyderabad",
    area: 1500,
    price: 5000000
}

console.log(Object.values(house));

// 6 Question 

const mobilephone = {
    brand: "Apple",
    model: "15 Pro Max",
    price: 150000,
    launchedYear : 2023
}

Object.seal(mobilephone);

mobilephone.price = 140000;

console.log(mobilephone);


console.log(Object.isSealed(mobilephone));

// 7 Question 

const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 500,
    publishedYear : 2015
}

Object.freeze(book);

book.publishedYear = 2018;

console.log(book);

console.log(Object.isFrozen(book));

// 8 Question 

const person1 = {
    Firstname: "John",
    Lastname: "Doe",
    age: 25,
    occupation: "Software Engineer"
}

console.log(Object.keys(person1), Object.values(person1));


// 9 Question 

const course = {
    name: "JavaScript",
    duration: "3 months",
    price: 15000,
    instructor: "Vamsi Sir"
}

console.log(Object.entries(course));


delete course.duration;

console.log(course);

// 10 Question 

const employee = {
    name: "John Doe",
    position: "software developer",
    salary: 40000
}

Object.seal(employee);

employee.position = "Data Analyst"

console.log(employee);

console.log(Object.keys(employee));

employee.location = "Hyderabad"

console.log(employee);

// we can't add the new property because given object is sealed //




