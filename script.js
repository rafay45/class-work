
firstName = ['Abdul', 'Muhammad', 'Barbar']
lastName = ['Rafay', 'Rizwan', 'Azam']
fullName = []




for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        document.write(i * j + '\n');

    }
    document.write('<br>')
}

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j < i; j++) {
        document.write(j + "-" + i + " ")

    }
    document.write('<br>')
}

for (var i = 0; i <= 5; i++) {
    for (var j = i; j <= 5; j++) {
        document.write('&nbsp;&nbsp;&nbsp')
    }
    for (var k = 1; k <= (2 * i - 1); k++) {
        document.write("* ")
    }
    document.write('<br>')
}

let age = prompt('Enter your age')
let salary = prompt('enter your salary')

if (age >= 18 && salary >= 50000) {
    alert('your salary approved')
} else {
    alert('incorrect information')
}

let enterEmail = prompt('Add your Emial')
alert('Email added')

let enterPassword = prompt('Add your  Password')
alert('password added')

let loginEmail = prompt('Enter your Email')
let loginPassword = prompt('Enter your password')
if (enterEmail === loginEmail && enterPassword === loginPassword) {
    document.write('<h1>Welcome to our website</h1>')
} else {
    alert('incorrect!')
}


let meet = prompt('kiska gosht chaiye(cow or got)')

let choise = prompt('haddi waala? (yes or not)')

let _choise = prompt('keema ya ghost (keema ya ghost)')

if (meet === 'cow' || 'got') {
    if (meet === 'cow') {
        alert('ok')
        if (choise === 'yes') {
            // alert('ghost haiga')
            if (_choise === 'keema' || _choise === 'ghost') {
                alert('1000 dedo')
            } else {
                alert('nai hai')
            }
        } else {
            alert('okay')
        }
    } else {
        alert('meet only cow and got')
    }
    if (meet === 'got') {
        // alert('okay')


        if (choise === 'yes') {
            alert('ghost haiga')
            if (_choise === 'keema' || _choise === 'ghost') {
                alert('1000 dedo')
            } else {
                alert('nai hai')
            }
        } else {
            alert('okay')
        }
    }
} else {
    alert('ghot nai hai agla laga chal')
}


var num = 10
console.log(num)

console.log('num')


var num = 20
console.log(num)

let num1 = 50
console.log(num1)

num1 = 60
console.log(num1)

let num2 = 70
console.log(num2)

let message = "hello";
console.log(message)

let num4 = 2
let num5 = 4

let ans = ++num4 - --num5 + --num4 + ++num4 + --num4 - num5-- + num4;
// console.log(num4)
// console.log(num5)
console.log(ans)

let five = 5, six = 6, seven = 7;
console.log(seven, five, six)

let hundred = 100;
console.log(hundred);

let score = 5;
console.log(score);

score = 3;
console.log(score);

let Message = "Rafay";
let _message = "Abdul";
let $message = "Hashmi";
console.log(Message, _message, $message)

let camelCase = 1000;
console.log(camelCase)

let apples = 2000;
console.log(apples)

let numOfApples = 3000;
console.log(numOfApples)

let x = 5000;
console.log(x)


const num3 = 80
console.log(num3)

for (var i = 0; i < 10; i++) {

}
console.log(i);


let userInp = prompt('Check if a number is a palindrome or not.')

let result = "";

for (var i = userInp.length - 1; i >= 0; i--) {
    result += userInp[i]
}
if (result === userInp) {
    alert('This is a palindrome')
} else {
    alert('This is not palindrome')
}

let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple', 'Watermelon', 'Pomegranate', 'Guava', 'Papaya']

let biggestName = fruits[0]

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i].length > biggestName.length) {
        biggestName = fruits[i]
    }
}
console.log(`The longest fruits is ${biggestName}`)



let fruit = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple', 'Watermelon', 'Pomegranate', 'Guava', 'Papaya']

let slicedFruits = fruit.slice(1, 4)
console.log(slicedFruits);

let sir = prompt(`Sir, call  \n Rafay \n Wasay \n Sahiban \n Hamza`)

let students = ['Wasay', 'Hamza', 'Rafay', 'Sahiban']

let isPresent = false

for (var i = 0; i < students.length; i++) {
    if (sir.toLowerCase() === students[i].toLowerCase()) {
        isPresent = true
        break
    }
}
if (isPresent) {
    alert('Yes sir am Present')
} else {
    alert('Sir, Please call right student')
}



var str = "madam";
var reversestr = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
}
if (reversestr === str) {
    console.log
        ('this is a plaindrome word');
}
else {
    console.log
        (" this is not a plaindrome word");
}


let start = prompt('Enter a start number')
let table = prompt('Enrer a table number')
let end = prompt('ente a end number')

for (var i = start; i <= end; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`)
}


let weather = prompt('How is the weather');
if (weather == 'sunny') {
    document.write('weather is sunny');
} else if (weather == 'Rainy') {
    document.write('Wear a raincoat');
} else if (weather == 'snowy') {
    document.write('wear a sweatshirt');
} else {
    document.write("nothing")
}

var userinp = +prompt('enter your amount');

var amount = 20000
if (amount > '20000') {
    document.write('amount are not available')
} else {
    document.write(`amount are available ${amount - userinp}`)
}



let userPara = prompt('Enter a para')

let convert = userPara.split(" ")


alert("Do you want to change any word")


let userWant = prompt('Which latter do you want to change').toLowerCase()


let changeWord = prompt('Enter a New Word')

let found = false

for(var i = 0; i < convert.length; i++){
    if(convert[i].toLowerCase() == userWant){
                 convert[i] = changeWord
               found = true
            }
}
if(found){
    document.write(`word changed ${convert.join(" ")}`)
    }else {
        alert("The word you want to change was not found in the paragraph.");
    }

    document.write(convert.join(" "));


let paragraph = ('Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.')


let convertPara = paragraph.split(" ");
console.log(convertPara);

let a = 'a'
let convertA = a.split(" ")

let userInpA = prompt("change only 'A'").toUpperCase()
let userA = userInpA.split(" ")



for(var i = convertA.length; i < convertPara.length; i++){
      if(convertPara[i] == convertA){
        convertPara[i] = userA
      }
}
console.log(convertPara.join("  "));
document.write(convertPara.join("  "));


let i,
z = '';
for (i = 0; i < 5; i = i + 2) {
  z += i;
}
console.log(z);

let userParagraph = ("The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized. Word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[1] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences.")
let convertArray = userParagraph.split(" ");

let firstWord = prompt('Enter a Old word')
let oldWord = firstWord.split(" ")

let secondWord = prompt('Enter a New word')
let newWord = secondWord.split(" ")

for(i = 0; i < convertArray.length; i++){
    if(convertArray[i] == oldWord){
        convertArray[i] = newWord
    }
}
document.write(newWord.join(" "))
document.write(convertArray.join(" "))
console.log(newWord.join(" "));
console.log(convertArray.join(" "));

let lorem = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima ea, iusto necessitatibus alias ullam ipsa facere consectetur aliquam eos excepturi quaerat velit expedita doloremque quam rem distinctio. Accusantium, molestias accusamus, odio animi aut tenetur voluptates harum in inventore maiores, at asperiores et rem ipsam possimus? Accusantium dolores explicabo aliquam.")
let loremArray = lorem.split(" ")

let upper = []

for (var i = 0; i < loremArray.length; i++){
   upper.push(loremArray[i][0].toUpperCase()+loremArray[i].slice(1))  
}
console.log(upper.join(" "));

let secLorem = (`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima ea, sit iusto necessitatibus alias ullam ipsa facere consectetur aliquam eos excepturi quaerat velit expedita doloremque quam rem distinctio. Accusantium, molestias accusamus, odio animi aut tenetur voluptates harum in inventore maiores, at asperiores et rem ipsam possimus? Accusantium dolores explicabo aliquam.`)
let changeLlorem = 'sit'

let replace = 'Javascript'



for(var i = 0; i < secLorem.length; i++){
    if(secLorem.slice(i, i + changeLlorem.length) == changeLlorem){
        console.log("Found", [i]);
        secLorem = (secLorem.slice(0, i) + replace + secLorem.slice(i + changeLlorem.length));

    }
    else{
        console.log("Not Found");

    }   
}

console.log(secLorem);


let numbers = [12, 384, 76, 100, 455, 678, 3749, 1827]
let biggestNumber = numbers[0]

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i]

    }
}
document.write(`The Biggest Number is  ${biggestNumber}<br>`)


 var month = prompt("Enter a month");
 var charsInMonth = month.length;
 if (charsInMonth > 3) {
 monthAbbrev = month.slice(0, 3);
 }
 document.write(monthAbbrev)

for (let i = 99; i > 0; i--) {
    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
}
console.log("No more bottles of beer on the wall!");

let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
let cityToCheck = prompt("Enter your city name:");

let founds = false

for (var i = 0; i < cleanestCities.length; i++){
    if(cleanestCities[i].toLowerCase() === cityToCheck.toLowerCase()){
        document.write(`Your city is one of the cleanest.`)
        found = true
        break  
    }
}

if(!founds){
    document.write(`Your city is not one of the cleanest.`)
}

// let cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// let cityToCheck = prompt("Enter your city name:");
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// for (var i = 4; i >= 0; i--) { console.log(i); }
// for (var i = 0; i <= 4; i += 2) { console.log(i); }

// let numElements = cleanestCities.length;  // Gives the total number of elements in cleanestCities array
// let matchFound = false;
// for (var i = 0; i < numElements; i++) {   // Loop from 0 to 4 (5 elements)
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;  // Stop the loop if a match is found
//     }


