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




