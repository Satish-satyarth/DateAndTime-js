// ----------Dates and time in JS ------------

let mydate = new Date();
console.log(mydate.toString());

console.log(mydate.toLocaleString());

console.log(mydate.toDateString());

// JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(mydate.toJSON()); 

// Note->  JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

let newDate = new Date();
console.log(newDate.getDate());

console.log(newDate.getMonth());
console.log(newDate.getDay());

const d = new Date(2018, 15, 24, 10, 33, 30);
console.log(d);

const d1 = new Date(22, 7 , 2024, 10, 33, 30);
console.log(d1);

let todayDate  = Date.now();
console.log(todayDate);

/* Notes->
Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/