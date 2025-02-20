
// Question 1

var processNumbers=(a,b,anonymous)=>{
    return anonymous(a,b)
}
var res= processNumbers(10,20,(x,y)=>{
return x+y
})
console.log("sum:" + res)


// Question 2

var greet = (callback) =>  console.log(callback("alice"))
var result=greet( (name) => "hello " +name +"!"

    )
    console.log(result)

// Question 3

var calculate = (a, b,callback) => console.log(callback(a,b))

var res=calculate(10,20,(x,y)=> "Difference is "+ (x-y)
       )
console.log(res)


                                                   //Arrow functions

//Question-1

// Arrow function is one of different types of functions present in javascript . The basic syntax difference of arrow function from a traditional function expression is it doesn't have a function keyword and it consists of arrow symbol.

// anonymous
var anon= function(){
    // statement
}

// arrow
var arrow = () => {
    // statement
}

//Question-2

 var add=(a, b)=>a + b
 console.log(add(2,4))

//Question-3

 var square=n=> n * n;
 console.log(square(4)) 

//Question-4

 var function_name=a=>a*a

//Question-5

 var cube=a=>a**3
 console.log(cube(2))

 var cube1=a=>{
    return a**3
 }
 console.log(cube1(4))

//Question-6

 var diff=(a,b)=>a-b
 console.log(diff(2,3))

 var sub1 = (a,b) => {
    return a-b
}
console.log(sub1(4,8))

//Question-7

 var pavani=()=>"hello world!"
 console.log(pavani())
