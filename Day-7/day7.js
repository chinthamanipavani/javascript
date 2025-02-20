
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