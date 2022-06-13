//1

let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"]

let teamA = []

let teamH = []

harryPotterTeam.forEach(item => {
    if (item.includes('a')) {
        teamA.push(item);
    } else if (item.includes('H')) {
        teamH.push(item);
    };
});

console.log(teamA);
console.log(teamH);

//2

let arr = [6, 3, "ten", 1, true, "4"]

let sum = 0;

let multiply = 1;

arr.forEach(item => {
    if (typeof(item) === "number") {
        sum += item;
        multiply *= item;
    }
})

console.log(sum);
console.log(multiply);

3

let numbers = [1, 3, 5, 7, 9, 11];

let newNumbers = [];

function getSquareOfNumber(arr) {
    arr.forEach(item => {
        newNumbers.push(Math.pow(item, 2));
    });

};
getSquareOfNumber(numbers);

console.log(numbers);
console.log(newNumbers);

4

let students = [
    { name: 'Alexey', id: 123, marks: 9 },
    { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 }
];

let studensId101 = students.find(item => {
    return item.id === 101;
});

console.log(studensId101);

5

let javaScriptTypes = ["number", "null", "undefined", "string"];

javaScriptTypes.splice(4, 0, "bigInt", "boolean", "symbol", "object");

console.log(javaScriptTypes);

6

let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

console.log(parfume);

parfume.splice(parfume.length - 1, 1, "Jo Malone");

console.log(parfume);