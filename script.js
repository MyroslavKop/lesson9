"use strick";
// Задача №1--------------------------------------------------------------------/

// let date = new Date(1996, 11, 12);
// console.log(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`);

// Задача №2--------------------------------------------------------------------/

// function getDiffDays(startDate, endDate) {
//   let dataParse = Date.parse(endDate) - Date.parse(startDate);
//   const DAY_IN_MILLISECONDS = Math.ceil(dataParse / (1000 * 60 * 60 * 24));
//   if (startDate > endDate) {
//     return console.error("Your start date is later than end");
//   } else if (isNaN(dataParse)) {
//     return console.error("Ivalid Data");
//   } else {
//     return DAY_IN_MILLISECONDS;
//   }
// }

// console.log(getDiffDays("2020-01-01", "2020-01-17"));
// console.log(getDiffDays("2020-01-01", "2020-03-15"));
// console.log(getDiffDays("2021-01-02", "2020-03-15"));
// console.log(getDiffDays("2222222222", "2020-03-15"));

// Задача №3--------------------------------------------------------------------/

// function isWeekend(date) {
//   let dayOfWeek = new Date(date).getDay();
//   let dataCheck = dayOfWeek === 0 || dayOfWeek === 6;
//   if (dataCheck) {
//     return dataCheck;
//   } else {
//     return dataCheck;
//   }
// }
// console.log(isWeekend("2022-02-12"));
// console.log(isWeekend("2022-02-13"));
// console.log(isWeekend("2022-02-09"));

// Задача №4--------------------------------------------------------------------/

// const person = {
//   fullName: "Sherlock Holmes",
//   address: {
//     street: "Baker Street",
//     city: "London",
//     house: "221b",
//   },
// };
// let json = JSON.stringify(person);
// let parsedPerson = JSON.parse(json);
