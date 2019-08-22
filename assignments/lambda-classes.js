// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        for (let key of [`name`, `age`, `location`]) {
            this[key] = obj[key]
        }
    }
    speak() {console.log(`Hello my name is ${this.name}, I am from ${this.location}`)}
}

const testPersonOne = new Person({name: 'Mr. Test 1', age: 999, location: 'Earth'})
const testPersonTwo = new Person({name: 'Mr. Test 2', age: 555, location: 'Mars'})
testPersonOne.speak()
testPersonTwo.speak()

class Instructor extends Person {
    constructor(obj) {
        super(obj)
        for (let key of [`specialty`, `favLanguage`, `catchPhrase`]) {
            this[key] = obj[key]
        }
    }
    demo(subject) {console.log(`Today we are learning about ${subject}`)}
    grade(student, subject) {console.log(`${student.name} receives a perfect score on ${subject}`)}
}

const testInstructorOne = new Instructor({name: 'Professor Test 1', age: 999, location: 'Jupiter', specialty: 'Math', favLanguage: 'Javascript', catchPhrase: 'Hello World!'})
const testInstructorTwo = new Instructor({name: 'Professor Test 2', age: 555, location: 'Pluto', specialty: 'Science', favLanguage: 'C', catchPhrase: 'Hello World!'})
testInstructorOne.speak()
testInstructorOne.demo('History')
testInstructorTwo.speak()
testInstructorTwo.demo('Art')
