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
