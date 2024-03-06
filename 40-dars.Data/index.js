' use strict '

// Sanalar

// const now = new Date();
// console.log(now);

// const now = new Date('2023-02-03');
// console.log(now);

// const now = new Date(0);
// console.log(now); 

// const now = new Date('0');
// console.log(now);

// get Method

const now = new Date();

// Only get year
// console.log(now.getFullYear());

// Only get month
// console.log(now.getMonth());

// Only get day
// console.log(now.getDate());

// Only get day
// console.log(now.getDay()); // This method take days of weeks as arrar ordered [0,1,...6]=['Sunday','Monday'...'Saturday']

// Only get time
// console.log(now.getTime()); // at millisecond

// Only get hour
// console.log(now.getHours());

// Only get UTC hour
// console.log(now.getUTCHours());

// Set method
console.log(now.setHours(18)); // get as millisecond
console.log(now);

// Calculate work time of loop

let start = new Date()

for(let i = 0; i<100000; i++){
    let some = i ** 3;
}
let end = new Date();

console.log(`Loop completed in ${end-start} milliseconds`);

