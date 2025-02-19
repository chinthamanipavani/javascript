/*Question-1*/

function processNumbers(a,b,anonymous){
return  anonymous(a,b)
}
var resul=processNumbers(10,20,function (x,y){
    return x+y
})
console.log ("sum:" + resul)


/*Question-2*/

function greet(callback){
console.log(callback("alice"))
}
var result=greet(function (name){
  return "hello " +name +"!"
})
console.log(result)


/*Question-3*/

function calculate(a, b,callback){
 console.log(callback(a,b))
}
var res=calculate(10,20,function(x,y){
    return "Difference is "+ (x-y)
})
console.log(res)
