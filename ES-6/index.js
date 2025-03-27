
//1

const person = {
    name: "John Doe",
    age: 30,
    address: {
    city: "New York",
    country: "unknown",
    },
    hobbies: ["Reading", "Traveling"]
    };
let {name:fullName,age,address:{city,country="Unknown"},hobbies}=person
console.log(fullName,age,city)
let [a,,]= hobbies
console.log(a)


//2

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

let [x,y,...rest]=fruits;
[x,y]=[y,x]
console.log(x,y)

//3

function sumNumbers(...rest){
    let res=rest.reduce((sum,next)=>sum+next)
    console.log(res)

}
sumNumbers(1,2,3,4)
sumNumbers(10,20,30,40)

//4
const user = { name: "Alice", age: 25 };
const job = { title: "Developer", company: "TechCorp" };
let employeeDetails={...user,...job,experience:"2 Years"}
console.log(employeeDetails)

//5

const numbers = [1, 2, 3, 4, 5];
let spre=[0,...numbers]
console.log(spre)


