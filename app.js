// console.log("JavaScript--- running")

// Higher Order Functions

// Higher Order Function kya hota hai?


// Ans: high order function ak asa function ha ju dusra function ko argument ke tor par accept kary ya function retuen kary.


// Kya map() ek higher order function hai?


// Ans: yes


// Kya forEach() value return karta hai?


// Ans: no


// Ek example do Higher Order Function ka.


// Ans: 
// function highOrder(cb){

// }
// function abc(){

// }
// highOrder(abc)



// Callback function kya hota hai?


// Ans: callback ak aisa function ha ju kisi dusra function ko argument ka tor par pass kiya jay phir call kiya jay .


// Ek function banao jo dusre function ko parameter me le.


// Ans: 
// function hello(cb){
//     cb();
// }
// function name(hello){
//   console.log("hello world");
// }
// hello(name);


// filter() ka use kis liye hota hai?


// Ans: filter ka use array ka andar sa data filter karna ka liya use huta ha.


// reduce() ka basic purpose kya hai?


// Ans:prev value aur current value ko use karka aray ko simple value ma convert karta ha .


// find() aur filter() me kya difference hai?


// Ans:find sirf ak hi matching element return karta ha lakin filter sary matching element return karta ha new array ma.


// map() aur forEach() me kya difference hai?


// map har element ko modifed karka new array banata ha lakin foreach simple loop ki tarha chalta ha aur kuch return nhi karta.



// Array Higher Order Methods


// [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.


//Ans: console.log([1,2,3,4].map((n) => n * 2));


// Ek array of names ko uppercase me convert karo using map().


// Ans:
// let name = ["abdullah","azeem","hassan"];
// let modifedName = name.map((n) => n.toUpperCase());
// console.log(modifedName);


// Prices array me har price me 10 add karo using map().


// Ans:
// let price = [10,20,30,40,50];
// let modified = price.map((price) => 10 + price )
// console.log(modified);


// Students names ke sath "Mr." add karo using map().


// Ans:
// let students = ["abdullah","azeem","hassan"];
// let modified = student.map((name) => `Mr.${name}`)
// console.log(modified)


// Numbers array ko square me convert karo.


// Ans:
// let number = [10,20,30,40];

// let modified = number.map((num) => num * num)

// console.log(modified)


// filter()


// [1,2,3,4,5,6] me se sirf even numbers filter karo.


// Ans:console.log([1,2,3,4,5,6].filter((num) => num % 2 === 0));


// Names array me sirf wo names filter karo jinki length 5 se zyada ho.


// Ans: 
// let students = ["abdullah", "azeem", "hassan"];
// let filtered = students.filter((n) => n.length > 5)
// console.log(filtered);


// Ek prices array me sirf prices greater than 100 filter karo.


// Ans:
// let prices = [200,120,40,100];
// let filtered = prices.filter((num) => num > 100)
// console.log(filtered)


// Students me se passed students filter karo.


// Ans: 
// let students = [
//   {name: "Abdullah",marks: 85,isPassed: true},
//   {name: "Ayaan",marks: 45,isPassed: false},
//   {name: "Hassan",marks: 72,isPassed: true},
//   {name: "Ali",marks: 30,isPassed: false},
//   {name: "Ahmed",marks: 90,isPassed: true}
// ];

// let filtered = students.filter((student) => student.marks > 50)
// console.log(filtered)


// Negative numbers ko filter karo.


// Ans: 
// console.log([-10, 5, -2, 8, -1, 20].filter((n) => n < 0));




// forEach()
// Array ke tamam elements console me print karo using forEach().

// Ans:
//  let numArr = [1,2,3,4,5,6,7,8,9]
//  numArr.forEach((num) => {
//     console.log(num)
//  })


// Ek fruits array ko numbering ke sath print karo.

// Ans:
// let fruits = ["mango","apple","banana"];
// fruits.forEach((name,index) => {
//     console.log(`${index + 1}. ${name}`)
// });



// Users array me har user ko welcome message do.


// Ans:
// let users = ["user1","user2","user3","user4"];
// users.forEach((u) => console.log( `Welcome ${u}`))


// Ek array ka total manually forEach() se nikalo.

// let total = 0;
// let numbers = [10, 20, 30, 40].forEach((num) =>{
//     total += num;
// })

// console.log(total)



// Har student ka naam uppercase me print karo.


// Ans: 
// let students =["abdullah","azeem","suffiyan","hassan"]
// students.forEach((name) => console.log(name.toUpperCase()));


// find()
// [10,20,30,40] me se first number greater than 25 find karo.


// Ans: 
// console.log([10,20,30,40].find((num) => num > 25));


// Users array me "Ali" naam ka user find karo.


// Ans:
// let users = ["abdullah","azeem","ali"];
// console.log(users.find((name) => name == "ali"));


// Ek products array me first expensive product find karo.


// Ans:
// let products = [
//   { name: "Infinix Smart 8", price: 25000 },
//   { name: "Samsung A56", price: 120000 },
//   { name: "iPhone 16", price: 350000 }
// ];

// console.log(products.find((product) => product.price > 200000));



// Ek array me first even number find karo.


// Ans:
// let numbers = [1, 3, 4, 5, 6, 7, 8];
// console.log(numbers.find((num) => num % 2 === 0));


// Students me first failed student find karo.


// Ans:
// let students = [
//   { id: 1, name: "Ali", percentage: 82 },
//   { id: 2, name: "Ahmed", percentage: 76 },
//   { id: 3, name: "Abdullah", percentage: 95 },
//   { id: 4, name: "Azeem", percentage: 48 },
//   { id: 5, name: "Hamza", percentage: 91 },
//   { id: 6, name: "Usman", percentage: 55 },
//   { id: 7, name: "Bilal", percentage: 24 },
  
// ];

// console.log(students.find((student) => student.percentage < 30));


// reduce()


// [1,2,3,4] ka sum reduce() se nikalo.


// Ans:
// let numArr = [1,2,3,4];
// let sum = numArr.reduce((total ,num) => total + num,0);
// console.log(sum)


// Prices array ka total calculate karo.


// Ans:
// let prices = [1200, 850, 4500, 2300, 999, 1500, 3200, 700];
// let sum = prices.reduce((total,num) => total + num,0)
// console.log(sum);


// Ek words array ko single sentence me convert karo.


// Ans:
// let words = ["I", "Love", "JavaScript"];
// let sentence = words.reduce((result,words) => result + " " + words)
// console.log(sentence);


// Shopping cart ka total bill calculate karo.

// Ans:
// let cart = [
//   { name: "Laptop", price: 85000 },
//   { name: "Mouse", price: 2500 },
//   { name: "Keyboard", price: 4500 },
//   { name: "Headphones", price: 6000 },
//   { name: "USB Drive", price: 1800 }
// ];

// let sum = cart.reduce((total,product) => total + product.price,0 )

// cart.forEach((product) => console.log(product.price));
// console.log("total price",sum)






