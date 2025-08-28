
//here we are showcasing our variable 
let name = 'Ukpai Rebecca'
console.log(name)

let age = 27
console.log(age)
console.log (name, 'is', age, 'years old')

const birthyear = 1998
console.log('i was born in the year', birthyear)

// here we included an (+) opertor 
let firstnumber = 30
let secondnumber = 60
console.log(firstnumber + secondnumber)

//here is ou function
function multiply (firstnumber, secondnumber) {
    return firstnumber * secondnumber;
}
console.log(multiply(30, 60));

//here we're showcasing the if/else
if (age >= 27) {
    console.log('allow');
}
else {
    console.log('dont allow');
}

// here is the for loops
for(let dimma = 1; dimma<=5; dimma++) 
    console.log (dimma);

// we use this in selecting the element using its id attribute in order to manipulate it
// here we're changing
function changeText(){
    let title = document.getElementById("title");
    title.textContent = 'What we should see on your webpage'
    title.style.color = 'blue';

// here we're adding
    let newDiv = document.createElement("div");
    newDiv.textContent = 'I just got included!!!';
    document.body.appendChild(newDiv);
    
}

