const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i].name);
// }

// // forEach
// companies.forEach(function(company){
//     console.log(company.name);
// });

// filter
// get all ages 21+

// with regular for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// with filter
// let canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
// console.log(canDrink);

// with ES6 =>
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter
// retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
// console.log(retailCompanies);

// with ES6 =>
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// filter
// all companies in 80s
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
// console.log(eightiesCompanies);

// all companies that lasted 10+ years
// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
// console.log(lastedTenYears);

// map
// create new arrays from current arrays

// grab all company names and put in new array
// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// new formatting Company One [1981 - 2004]
// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}];`;
// });
// console.log(testMap);

// with ES6 =>
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// square root of ages
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// double ages
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

// chaining maps
// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(ageMap);

// sort
// takes two elements to compare
// returns "1" and "-1" to sort the elements properly
// const sortedCompanies = companies.sort(function(company1, company2){
//     if(company1.start > company2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// with ES6 =>
// ternary operators for if statements
// CONDITION ? (return if true) : (return if false)
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort ages
// just sorts by first number, this doesn't work
// const sortAges = ages.sort();
// console.log(sortAges);

// fixed version
// const sortAges = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortAges);

// reduce

// add all ages together

// with regular for loop
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

// with reduce
// let ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);
// console.log(ageSum);

// with reduce and ES6 =>
// let ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// get total year ranges for all companies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// using methods together
// 
// const combined = ages.map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);

// console.log(combined);