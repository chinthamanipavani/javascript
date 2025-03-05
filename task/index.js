//Q1


q=[1,2,3,4,5]
console.log(q)
/*

// Method-2

for (var index=0;index<=q.length-1;index++){
    console.log(q[index])
}
//Method-3

for(element in q ){
    console.log(q[element])
}

*/


//Q2


//Method-1

arr2 =[55,23,45,6,9]
console.log(arr2[2])

/*
//Method-2
for (var index=0;index<=arr2.length;index++){
    if(index==2){
        console.log(arr2[index])
    }
}

//Method-3

for(element of arr2){
    if(element === arr2[2])
        console.log(element)
}
*/

//Q3

//Method-3

arr3=[4,6,7,8,19]
arr3[2]=10
console.log(arr3[2])


//Method-2
/*

for (var index=0;index<=arr3.length-1;index++){

       if (arr3[index]==arr3[2]){
           arr3[index]=20
           console.log(arr3[index])
       }
}
       */

//Method-3

/*

for (ele of arr3){
    if(ele=== arr3[2]){
        ele=30
        console.log(ele)
    }
}

*/

//Q4

 var num=[1,6,5,5,4,"hai",9,233]
 console.log(num.length)
 
//Q5

a1=[2,4,6,"kalyani",9]
a1[a1.length+1]=1
a1[5]=999
console.log(a1)

/*
//Methid-2

a[5]=100
console.log(a)
a.push('200')
console.log(a)

//Method-3

a.unshift("kalyani")
console.log(a)
*/

//Q6

a2=[2,4,6,"pavani",9]
console.log(a2)
//Methid-1
a2.pop()
console.log(a2)


/*
//Method-2

a.shift("kalyani")
console.log(a)

*/


//Q7

a=[10,20,30,40,50,60,70,11,2,233,55,99]
// Method-1

for(ind=0;ind<=a.length-1;ind++){
    console.log(a[ind])
}

/*
//Method-2
for(ele of a){
    console.log(ele)
}
*/

//Q8

function exist(n){
    arr=[3,6,7,8,93,7,3]
    for (ind=0;ind<arr.length-1;ind++){
        if(ind==n){
            console.log(n)
        }
    }
}
exist(3)

//Q9

var original_arr=[13,23,55,77,99]
console.log(original_arr)
//Method-1
copyArray=original_arr.slice()
console.log(copyArray)

/*
//Method-2

var copy_arr=[...original_arr]    //spread operator(...)
console.log(copy_arr)
*/

//Q10

fruits=["apple","banana","mango","orange"]
result=fruits.join(" - ")
console.log(result)

// res=fruits.join()
// console.log(res)