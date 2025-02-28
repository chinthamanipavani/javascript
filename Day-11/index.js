
//Q1

function findLargest(num1,num2,callback){
   return callback(num1,num2)+5
}
console.log(findLargest(12,20,(num1,num2)=>{
    if(num1>num2){
        return num1
    }
    return num2
}

))
//Q2

function calculate(num1,num2,callback){
 return callback(num1,num2)*3
}
console.log(calculate(10,5,(num1,num2)=>{
    if (num1>num2){
        return num1+num2
    }
    else if(num1<num2){
    return num1-num2
    }
    else{
        return "both numbers are equal"
    }
}))

//Q3

function checkEvenOdd(num, callback){
    return callback(num)
}
console.log(checkEvenOdd(11, (num)=>{
    if(num%2==0){
        return "even"
    }
    return "odd"

})
)

//Q4

function checkSign(num, callback){
   return  callback(num)
}
console.log(checkSign((-5),(num)=>{
    if(num>0){
        return "Positive"
    }
    else if(num<0){
        return "Negative"
    }
    else{
        return "Zero"
    }
}))

//Q5

function multiplyConditionally(num1, num2, callback){
    return callback(num1,num2)
}
console.log(multiplyConditionally(2,-4,(num1,num2)=>{
    if(num1>num2){
        return num1*num2
    }
    else if(num1<num2){
        return num1+num2
    }
    else{
        return num1
    }
}))