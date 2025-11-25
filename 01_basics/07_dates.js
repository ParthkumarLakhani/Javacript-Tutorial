//Dates

const todayDate = new Date();
console.log('\n todayDate ==',todayDate); // Current date and time

/*
Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not
*/

// console.log('\n todayDate to string ==',todayDate.toString()); 
// console.log('\n todayDate to date string ==',todayDate.toDateString());
// console.log('\n todayDate to locale string ==',todayDate.toLocaleString());
// console.log('\n todayDate to locale date string ==',todayDate.toLocaleDateString());
// console.log('\n todayDate to ISO string ==',todayDate.toISOString());
// console.log('\n todayDate to json ==',todayDate.toJSON());
// console.log('\n todayDate to time string ==',todayDate.toTimeString());
// console.log('\n todayDate to time string ==',todayDate.toUTCString());

/*
What is UTC ??
  Also know as Coordinated Universal Time
  It is not a time zone
  It is a time standard used worldwide
  All time zones are calculated relative to UTC
  Example: India = UTC+5:30
  
  JavaScript internally uses UTC for dates and time calculations.
*/


// let myCreatedDate = new Date(2025,10, 25) //months from 0 to 11
// let myCreatedDate = new Date(2025,10, 25, 13, 50, 45)
// let myCreatedDate = new Date("2025-00-25") //yyyy-mm-dd, months from 1 to 12
let myCreatedDate = new Date("11-25-2025") //mm-dd-yyyy, months from 1 to 12

console.log('\n myCreatedDate ==', myCreatedDate);

// console.log('\n myCreatedDate date string ==', myCreatedDate.toDateString());
// console.log('\n myCreatedDate local date string ==', myCreatedDate.toLocaleDateString());
// console.log('\n myCreatedDate local string ==', myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log('\n myTimeStamp ==', myTimeStamp);

// console.log('\n myTimeStamp compare with milisecond ==', myTimeStamp == todayDate.getTime()); //first convert date to milisecond


let cnvToSecond = Date.now() / 1000 //come with fractional part
// let cnvToSecond = Math.floor(Date.now() / 1000) //come with fractional part

// console.log('\n cnvToSecond ==', cnvToSecond); //come with fractional part

/*
timestamp
  It is the number of milliseconds that have elapsed since January 1, 1970 00:00:00 UTC
  You can get it by using getTime() method on date object

  also useful for compare dates
  it will useful for polls, sorting data, puzzles etc. 
*/

let newDate = new Date()
// console.log('\n newDate ==', newDate);

// console.log('\n newDate get Day ==', newDate.getDay()); //0 - Sunday, 1 - Monday, ....6 - Saturday  there for i added + 1
// console.log('\n newDate getMonth ==', newDate.getMonth() + 1); //0 - January, 1 - February, ....11 - December
// console.log('\n newDate getFullYear ==', newDate.getFullYear());



//important
const dateFormat = newDate.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
})

console.log('\n newDate with object ==', dateFormat);