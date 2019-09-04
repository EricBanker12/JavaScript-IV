// CODE here for your Lambda Classes

// Person
class Person {
    constructor(obj) {
        for (let key of [`name`, `age`, `location`]) {
            this[key] = obj[key]
        }
    }
    speak() {console.log(`Hello my name is ${this.name}, I am from ${this.location}`)}
}

console.log('\nPerson 1') // spacing sections
const testPersonOne = new Person({name: 'Mr. Test 1', age: 999, location: 'Earth'})
testPersonOne.speak()

console.log('\nPerson 2') // spacing sections
const testPersonTwo = new Person({name: 'Mr. Test 2', age: 555, location: 'Mars'})
testPersonTwo.speak()

// Instructor
class Instructor extends Person {
    constructor(obj) {
        super(obj)
        for (let key of [`specialty`, `favLanguage`, `catchPhrase`]) {
            this[key] = obj[key]
        }
    }
    demo(subject) {console.log(`Today we are learning about ${subject}`)}
    grade(student, subject) {console.log(`${student.name} receives a perfect score on ${subject}`)}
    regrade(student) {
        // change student grade random integer in range (-20, +20)
        student.grade = Math.min(Math.max(student.grade + Math.floor(Math.random()*41-20), 0), 100)
        //console.log(`${this.name} changed ${student.name}'s grade`)
    } 
}

console.log('\nInstructor 1') // spacing sections
const testInstructorOne = new Instructor({
    name: 'Professor Test 1', 
    age: 999, 
    location: 'Jupiter', 
    specialty: 'Math', 
    favLanguage: 'Javascript', 
    catchPhrase: 'Hello World!'
})
testInstructorOne.speak()
testInstructorOne.demo('History')

console.log('\nInstructor 2') // spacing sections
const testInstructorTwo = new Instructor({
    name: 'Professor Test 2', 
    age: 555, 
    location: 'Pluto', 
    specialty: 'Science', 
    favLanguage: 'C', 
    catchPhrase: 'Hello World!'
})
testInstructorTwo.speak()
testInstructorTwo.demo('Art')

// Student
class Student extends Person {
    constructor(obj) {
        super(obj)
        for (let key of [`previousBackground`, `className`, `favSubjects`, 'grade']) {
            this[key] = obj[key]
        }
    }
    listsSubjects() {this.favSubjects.forEach(e=>{console.log(e)})} //console.log(this.favSubjects.join('\n'))
    PRAssignment(subject) {console.log(`${this.name} has submitted a PR for ${subject}`)}
    sprintChallenge(subject) {console.log(`${this.name} has begun sprint challenge on ${subject}`)}
    graduate() {if (this.grade >= 70) return `${this.name} is graduating with a grade of ${this.grade}%`}
}

console.log('\nStudent 1') // spacing sections
const testStudentOne = new Student({
    name: 'Test 1', 
    age: 999, 
    location: 'Neptune', 
    previousBackground: 'Math', 
    className: 'Freshman', 
    favSubjects: ['Math', 'Science'],
    grade: 60
})
testStudentOne.speak()
testStudentOne.listsSubjects()
testStudentOne.PRAssignment('Math')
testStudentOne.sprintChallenge('Science')
testInstructorOne.grade(testStudentOne, 'Science')

console.log('\nStudent 2') // spacing sections
const testStudentTwo = new Student({
    name: 'Test 2', 
    age: 555, 
    location: 'Uranus', 
    previousBackground: 'Science', 
    className: 'Senior', 
    favSubjects: ['P.E.'],
    grade: 60
})
testStudentTwo.speak()
testStudentTwo.listsSubjects()
testStudentTwo.PRAssignment('Art')
testStudentTwo.sprintChallenge('English')
testInstructorTwo.grade(testStudentTwo, 'English')

// Project Manager
class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj)
        for (let key of [`gradClassName`, `favInstructor`]) {
            this[key] = obj[key]
        }
    }
    standUp(channel) {console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)}
    debugsCode(student, subject) {console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)}
}

console.log('\nProject Manager 1') // spacing sections
const testProjectManagersOne = new ProjectManagers({
    name: 'PM Test 1', 
    age: 999, 
    location: 'Mercury', 
    specialty: 'Math', 
    favLanguage: 'Javascript', 
    catchPhrase: 'Hello World!', 
    gradClassName: 'web20', 
    favInstructor: 'Ty'
})
testProjectManagersOne.speak()
testProjectManagersOne.demo('History')
testProjectManagersOne.standUp('#web23_PM_Test_1')
testProjectManagersOne.debugsCode(testStudentOne, 'Science')
testProjectManagersOne.grade(testStudentOne, 'Science')

console.log('\nProject Manager 2') // spacing sections
const testProjectManagersTwo = new ProjectManagers({
    name: 'PM Test 2', 
    age: 555, 
    location: 'the Moon', 
    specialty: 'Science', 
    favLanguage: 'C', 
    catchPhrase: 'Hello World!', 
    gradClassName: 'web20', 
    favInstructor: 'Ty'
})
testProjectManagersTwo.speak()
testProjectManagersTwo.demo('Art')
testProjectManagersTwo.standUp('#web23_PM_Test_2')
testProjectManagersTwo.debugsCode(testStudentTwo, 'Math')
testProjectManagersTwo.grade(testStudentTwo, 'Math')

// stretch

console.log('\nGraduation') // spacing sections
let tests = 0
while(!testStudentOne.graduate()) {
    testInstructorOne.regrade(testStudentOne)
    tests++
}
console.log(`After ${tests} tests,`, testStudentOne.graduate())

tests = 0
while(!testStudentTwo.graduate()) {
    testProjectManagersOne.regrade(testStudentTwo)
    tests++
}
console.log(`After ${tests} tests,`, testStudentTwo.graduate())