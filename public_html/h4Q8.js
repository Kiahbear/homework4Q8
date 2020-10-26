/*
 * homework 4 question 8
 */
let array = [];
let total = 0;
let userNumber = 0;
let counter = 1;
while (counter <= 20){
    userNumber = prompt("Enter a number: ");
    userNumber = Number(userNumber);
    total = total + userNumber;
    array.push(userNumber);
    counter = counter + 1;
}
let smallest = array[0];
for(integer = 1; integer < array.length; integer++){
	if(array[integer] < smallest){
		smallest = array[integer];
}
}
let highest = array[19];
for(integer = 1; integer < array.length; integer++){
    if(array[integer] > highest){
        highest = array[integer];
    }
}

let average = total / 20;

let arrayList = array.join(", ");
document.write("<br>The numbers are: " + arrayList);
document.write("<br>The smallest number is: " + smallest);
document.write("<br>The highest number is: " + highest);
document.write("<br>The total of the numbers is: " + total);
document.write("<br>The average of the numbers is: " + average);


