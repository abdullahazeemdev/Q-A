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



// findLastIndex()
// [1,2,3,2,4,2] me last 2 ka index find karo.

// Ans:
// let number = [1,2,3,2,4,2];
// console.log(number.lastIndexOf(2));


// Last even number ka index find karo.


// Ans:
// let numbers = [1, 3, 8, 5, 10, 7, 12];
// console.log(numbers.findLastIndex((num) => num % 2 === 6));


// Ek names array me last "Ali" ka index find karo.

// Ans:
// let names = ["Ahmed","Usman","Ali","Azeem","Hamza","Bilal","Ali"];
// console.log(names.findLastIndex((name) => name == "Ali"));



// Ek products array me last expensive product ka index nikalo.

// Ans:
// let products = [
//   { name: "Infinix Smart 8", price: 25000 },
//   { name: "Samsung A36", price: 95000 },
//   { name: "Redmi Note 14", price: 42000 },
//   { name: "iPhone 16", price: 350000 },
//   { name: "Realme 14", price: 38000 },
//   { name: "Samsung S25 Ultra", price: 420000 },
//   { name: "Tecno Spark 30", price: 29000 }
// ];
// console.log(products.findLastIndex((price) => price.price > 30000));


// Array me last negative number ka index find karo.


// Ans:
// let numbers = [15, -8, 22, 10, -3, 7, -15, 30, -5];
// console.log(numbers.findLastIndex((num) => num < 0));


// Objects


// Object kya hota hai JavaScript me?

// Ans:object javascript ka data type ha ju values ko key-values ka pair bana kar store karta ha 


// Ek student object banao jisme name aur age ho.


// Ans:
// let student = {
//     name: "Abdullah",
//     age: 18
// };
// console.log(student);


// Object ki property access karne ke 2 methods likho.


// Ans:
// let student = {
//     name: "Abdullah",
//     age: 18
// };

// console.log(student.name , student.age);
// console.log(student["age"], student["name"]);



// Object me new property add karo.


// 
// let student = {
//     name:"abdullah",
//     age:18
// };
// student.pass = true
// console.log(student)

// Object ki property delete karo.


// Ans:
// let student = {
//     name:"abdullah",
//     age:18,
//     pass: true
// };

// delete student.pass;
// console.log(student)


// Ek car object banao jisme brand aur model ho.


// Ans:
// let cars = {
//       brand: "Suzuki",
//       model: "Alto"
//  };
//  console.log(cars)


// Object ke andar function ka example do.


// Ans:

// let student =  { 
//     name:"Abdullah",
//     age:18,

//     greet:function(){
//         console.log(`hello my name is ${student.name}`);
//         console.log("I am " + this.age + " year old")
//     };
// };
// student.greet();


// this keyword object me kya karta hai?


// Ans:this keyword object ma us obkect ko target karta ha jis object ma use hu.


// Object keys kaise nikalte hain?


// Ans:

// let student = {
//   name: "Abdullah",
//   age: 18,
//   city: "Karachi"
// }

// console.log(Object.keys(student))



// Object values kaise nikalte hain?


// Ans:
// let student = {
//     name:"abdullah",
//     age:18,
//     pass:true
// }

// console.log(Object.values(student));



// Nested Objects


// let students = {
//     student1: {
//      name:"abdullah",
//      age:"18"
//     },

//     student2:{
//      name:"misba",
//      age:17
//     }
// }

// console.log(students)



// Ek object ke andar object ka example banao.


// Ans:
// let student = {
//     student1:{
//         name:"abdullah",
//         age:18,

//         address:{
//          city:"karachi",
//          country:"pakistan"
//         }
//     }
// }
// console.log(student)



// User object ke andar address object create karo.


// Ans:
// let user = {
//     name:"user",
//     age:20,

//     adress:{
//         city:"karachi"
//     }
// }
// console.log(user)



// Nested object ki city access karo.


// Ans:
// let user = {
//     name:"user",
//     age:20,

//     adress:{
//         city:"karachi"
//     }
// }
// console.log(user.adress.city)


// Student object me marks object add karo.


// Ans:
// let student = {
//     name:"abdullah",
//     age:18,
//     pass:true
// }

// student.marks = 70;
// console.log(student);



// Company object me employee object create karo.


// Ans:
// let company = {
//     employee:{
//         name:"Ali"
//     }
// }

// console.log(company)



// Array of Objects


// Array of objects kya hota hai?

// Ans:array object ka mtlb ek array ma ak ia ak sa zayda objects hu .

// Students ka array banao jisme har student ka name aur marks ho.

// let students =[
//     { name:"abdullah", marks:78},
//     {name:"misba",marks:78},
//     {name:"ali",marks:35}
// ];
// console.log(students);


// Array of objects me se sirf names print karo.


// Ans:
// let students =[
//     { name:"abdullah", marks:78},
//     {name:"misba",marks:78},
//     {name:"ali",marks:35}
// ];
// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].name);

// Passed students filter karo from array of objects.


// Ans:
// let students =[
//     { name:"abdullah", marks:78},
//     {name:"misba",marks:78},
//     {name:"ali",marks:35}
// ];

// let result = students.filter((student) => student.marks >= 40)
// console.log(result)

// map() use karke students names uppercase me convert karo.


// Ans:
// let students =[
//     { name:"abdullah", marks:78},
//     {name:"misba",marks:78},
//     {name:"ali",marks:35}
// ];
// let modifed = students.map((student) => student.name.toUpperCase())
// console.log(modifed)


// Highest marks wala student find karo.

// Ans:
// let students =[
//     { name:"abdullah", marks:78},
//     {name:"misba",marks:78},
//     {name:"ali",marks:35}
// ];

// let find = students.find((student) => student.marks > 70)
// console.log(find)


// Ek products array me total stock calculate karo.

// let products = [
//     {
//         name: "Laptop",
//         stock: 10
//     },
//     {
//         name: "Mobile",
//         stock: 15
//     },
//     {
//         name: "Headphones",
//         stock: 8
//     },
//     {
//         name: "Keyboard",
//         stock: 12
//     }
// ];

// let stock = products.reduce((pre , curr) => pre + curr.stock,0 )
// console.log(stock);



// Array of objects me new object push karo.


// Ans:
// let array = [
//          {
//         name: "Laptop",
//         stock: 10
//     },
//     {
//         name: "Mobile",
//         stock: 15
//     },
//     {
//         name: "Headphones",
//         stock: 8
//     },
//     {
//         name: "Keyboard",
//         stock: 12
//     }
// ];

// let mouse = {
//     name:"mouse",
//     stock:6
// }

// array.push(mouse)


// User object ko array me find karo.


// Ans:
// let users = [
//     {
//         id: 1,
//         name: "Abdullah",
//         age: 18
//     },
//     {
//         id: 2,
//         name: "Ali",
//         age: 20
//     },
//     {
//         id: 3,
//         name: "Misba",
//         age: 17
//     }
// ];


// let find = users.find((id) => id.id === 2)
// console.log(find)

// Array of objects ko loop se print karo.


// Ans:
// let users = [
//     {
//         id: 1,
//         name: "Abdullah",
//         age: 18
//     },
//     {
//         id: 2,
//         name: "Ali",
//         age: 20
//     },
//     {
//         id: 3,
//         name: "Misba",
//         age: 17
//     }
// ];

// users.forEach((user) => console.log(user))







// =================================================================================================

// 📌 Array Destructuring (7 Questions)


// Question 1
// Destructure the first and second values.



// const fruits = ["Apple", "Banana", "Orange"];


// const [apple,banana] = fruits

// console.log(apple,banana)



// Apple

// Banana



// Question 2
// Skip the second element.



// const colors = ["Red", "Green", "Blue"];

// const [red, ,blue] = colors;

// console.log(red,blue)



// Red

// Blue



// Question 3
// Store the remaining values in another array.



// const number = [10, 20, 30, 40, 50];

// const [ten,...numbers] = number
// console.log(ten);
// console.log(...numbers)




// 10

// [20,30,40,50]



// Question 4
// Swap two variables using destructuring.





// let a = 5;

// let b = 10;


// [a,b = b,a]

// console.log("a ==>",a)
// console.log("b ==>",b)


// a = 10

// b = 5



// Question 5
// Give default values.



// const names = ["Ali"];

// const [ali, ahmad = "ahmad"] = names

// console.log(ali);
// console.log(ahmad);




// Ali

// Ahmed



// Question 6
// Nested array destructuring.



// const data = ["HTML", ["CSS", "JavaScript"]];



// const [html,[css,javascript]] = data

// console.log(html)
// console.log(css)
// console.log(javascript)



// HTML

// CSS

// JavaScript



// Question 7
// Destructure all values.





// const marks = [80, 90, 95];

// const [one , two , three] = marks
// console.log(one , two , three)



// Print all three.

// 📌 Object Destructuring (7 Questions)
// Question 8
// Destructure name and age.





// const user = {

// name: "Hasan",

// age: 23,

// city: "Lahore"

// };


// const {name,age} = user
// console.log(name);
// console.log(age);





// Hasan

// 23



// Question 9
// Rename variables.





// const student = {

// name: "Ayesha",

// class: "10th"

// };


// const {name : studentName, class : studentClass} = student
// console.log(studentName)
// console.log(studentClass)

// studentName

// studentClass



// Question 10
// Use default value.





// const employee = {

// name: "Ahmed"

// };

// const {name , salary = 500000} = employee

// console.log(name)
// console.log(salary)


// Ahmed

// 50000



// Question 11
// Nested object destructuring.





// const person = {

// name: "Ali",

// address: {

// city: "Karachi",

// country: "Pakistan"

// }

// };


// const {address: {city,country}} = person;
// console.log(city)
// console.log(country)



// Karachi

// Pakistan



// Question 12
// Destructure everything.





// const product = {

// title: "Laptop",

// price: 80000,

// brand: "Dell"

// };

// const {title,price,brand} = product
// console.log(title,price,brand)



// Print all values.

// Question 13
// Extract only email.





// const account = {

// username: "coder123",

// email: "coder@gmail.com",

// password: "12345"

// };

// const {email} = account;
// console.log(email)



// Question 14
// Combine object and array destructuring.





// const company = {

// employees: ["Ali", "Ahmed", "Sara"]

// };

// const {employees:[ali,ahmad,sara]} = company

// console.log(ali);
// console.log(ahmad);
// console.log(sara);





// Ali

// Ahmed

// Sara



// 📌 Rest Operator (3 Questions)
// Question 15
// Collect remaining values.





// const number = [1,2,3,4,5];

// const [one,two,...others] = number
// console.log(one)
// console.log(two)
// console.log(...others)





// 1

// 2

// [3,4,5]



// Question 16
// Collect remaining object properties.





// const user = {

// name: "Hasan",

// age: 22,

// city: "Lahore",

// country: "Pakistan"

// };

// const {name,...data} = user
// console.log(name);
// console.log(data);

// name

// remaining object



// Question 17
// Create a function using Rest Parameters.

// Example





// sum(10,20,30,40);



// Expected Output



// 100



// Hint:

// Use



// function sum(...number){
//    const total = number.reduce((total,current) => total + current,0)
//    console.log(total)
   
// }
// sum(10,20,30,40);


// 📌 Spread Operator (3 Questions)
// Question 18
// Merge two arrays.


// const frontend = ["HTML", "CSS"];

// const backend = ["Node", "MongoDB"];


// const fullStack = [...frontend,...backend]
// console.log(fullStack)



// ["HTML","CSS","Node","MongoDB"]



// Question 19
// Copy an array.





// const fruits = ["Apple","Banana","Orange"];

// const [...fruit] = fruits

// console.log(...fruit)





// Create a new copy using the spread operator.

// Question 20
// Merge two objects.





// const user = {

// name: "Hasan"

// };



// const details = {

// age: 22,

// city: "Lahore"

// };


// const data = {...user,...details}
// console.log(data)








// {

// name: "Hasan",

// age: 22,

// city: "Lahore"

// }
// 




