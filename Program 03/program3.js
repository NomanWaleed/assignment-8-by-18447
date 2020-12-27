var subject1 = parseInt(prompt("Enter Marks in 1st Subject"));
var subject2 = parseInt(prompt("Enter Marks in 2nd Subject"));
var subject3 = parseInt(prompt("Enter Marks in 3rd Subject"));

var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = obtainedMarks * 100 / totalMarks;

if(percentage > 80){
    console.log("You are Above Average, Admission Granted");
    }
    else{
        console.log("Sorry, Admission Not Granted");
    }