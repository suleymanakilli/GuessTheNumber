console.log('hello')
var age=prompt("What is your age ? ");
console.log(age)

let student={
    firstName:"Suleyman",
    lastName:"Akilli",
    Age:"20",
    studentInfo:function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(student.studentInfo())