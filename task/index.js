//Q1

/*
for(var i=1;i<=10;i++){
    console.log(i)
}

*/

//Q2

/*
function sum(n){
    var sum=0
    for(var i=1;i<n;i++){
        sum=sum+i
        console.log(sum)
    }
}
sum(100)

*/

//Q3

/*
function mul(n){
    for (var i=1;i<=10;i++){
         res=n*i
         console.log(`${n} * ${i} = ${res}`)
    }
}
mul(7)

*/

// Q4

/*

function even(n){
    for(var i=2 ;i<=n;i+=2){
        console.log(i)
    }
}
even(20)

*/

//Q5

/*
fact=1
function  factorial(n){
    if (n>0){
    for(i=1;i<=n;i++){
        fact=fact*i
    }
    console.log(fact)
 }
 else{
    console.log("1")
 }
} 
factorial(6)

*/


// Q6

/*
function power(n,m){
    for(var i=1;i<=m;i++){
        p=i**n
        console.log(p)
    }
}
power(4,10)
power(2,5)

*/

// Q7 


function odd(n){
    for (var i=n;i>0;i--){
        if(i%2!=0){
            console.log(i)
        }
    }
}
odd(20)
// odd(40)










