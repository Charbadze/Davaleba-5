///////////////////////////// section 1 /////////////////////////////

const number1 = +prompt("Enter number 1")
const number2 = +prompt("Enter number 2")
let sum = 0;

for (let i = number1; i <= number2; i++ ) {
    sum = sum + i
} console.log(sum + " This is sum of numbers beetween number 1 and number 2")


///////////////////////////// section 2 /////////////////////////////

let sum2 = 1;

for (let i = number1; i <= number2; i++) {
    sum2 = sum2 * i
} console.log(sum2 + " This is product when u multiply numbers beetween number 1 and number 2")

///////////////////////////// section 3 /////////////////////////////

let sum3 = 0

for(let i = 100; i <= 100000; i++) {
    if(i % 11 === 0){
        sum3++;
    }    
}console.log(sum3 + " This is Number of numbers that can be devided by 11 between 100 and 100000")

///////////////////////////// section 4 /////////////////////////////

const latter = prompt('შეიყვანეთ ქართული ასო')

switch(latter) {
    case 'ა':
    case 'ე':
    case 'ი':
    case 'ო':
    case 'უ': console.log('თქვენი შეყვანილი ასო ხმოვანია'); break;
    default: console.log('თქვენი შეყვანილი ასო არ არის ხმოვანი');
}


///////////////////////////// section 5 /////////////////////////////

const number3 = +prompt("Enter number 3")

for(let i = number3; i > 0; i--){
    console.log(i)
}console.log("This is numbers from number 3 to 1")

///////////////////////////// section 6 /////////////////////////////

const number4 = +prompt("Enter number with minimum 2 digits")
let lastdigit = number4 % 10
if(number4 <= 9){
    console.log('Enter number with at least 2 digits')
} else {
    console.log(lastdigit + " This is the last digit of your number")
}

/////////////////////////////////////////////////////////////////////






    