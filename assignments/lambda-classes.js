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

class Student extends Person {
    constructor(obj) {
        super(obj)
        for (let key of [`previousBackground`, `className`, `favSubjects`]) {
            this[key] = obj[key]
        }
    }
    listsSubjects() {this.favSubjects.forEach(e=>{console.log(e)})} //console.log(this.favSubjects.join('\n'))
    PRAssignment(subject) {console.log(`student.name has submitted a PR for ${subject}`)}
    sprintChallenge(subject) {console.log(`student.name has begun sprint challenge on ${subject}`)}
}

const testStudentOne = new Student({name: 'Test 1', age: 999, location: 'Neptune', previousBackground: 'Math', className: 'Freshman', favSubjects: ['Math', 'Science']})
const testStudentTwo = new Student({name: 'Test 2', age: 555, location: 'Uranus', previousBackground: 'Science', className: 'Senior', favSubjects: ['P.E.']})
testStudentOne.speak()
testStudentOne.listsSubjects()
testStudentOne.PRAssignment('Math')
testStudentOne.sprintChallenge('Science')
testInstructorOne.grade(testStudentOne, 'Science')
testStudentTwo.speak()
testStudentTwo.listsSubjects()
testStudentTwo.PRAssignment('Art')
testStudentTwo.sprintChallenge('English')
testInstructorTwo.grade(testStudentTwo, 'English')