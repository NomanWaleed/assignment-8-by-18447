var number = parseInt(prompt("Enter a Number"));
var decision = number % 2;
console.log(decision);
if(decision === 0){
    console.log(number , "is Even Number");
}
else
{
    console.log(number , "is Odd Number");
}