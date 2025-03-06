 //Objects 

//CREATION

// var refvar= {}
var obj1={
    name:"pavani",
    id:1,
    $:123,
    phno:9874352873,
    email:"pavani@gmail.com",
    name:"ram",
    name:"kavya",
    // "123":2334
}  


//ACCESSING

//  (.)-dot notation
console.table(obj1)
console.log(obj1.name)
console.log(typeof(obj1.$))
console.log(obj1.$)

//["keyname"]- square notation
console.log(obj1["id"])
console.log(obj1["$"])
console.log(obj1["email"])
console.clear()
//object.values
var h=Object.values(obj1)
console.log(h[0])             //it can access the last keyvalue
console.log(h[1])             // it can access the 2nd keyvalue from last

   
//UPDATE

obj1.id=100
console.table(obj1)
obj1.address="chennai"
console.table(obj1)

// DELETE

delete obj1.name
console.table(obj1)
console.log(obj1.name)         //undefined

console.clear()

var obj2={

    "stNmame":"pavani",
    "stImage":["img1","img2","img3"],
    "stbike":[ {
        "name":"pulser",
        "cc":"220",
        "color":"black"
         },
         {
            "name":"honda",
            "cc":"223",
            "color":"blue"
         },
         {
            "name":"scooty",
            "cc":"455",
            "color":"white"
         }
    ]
}


console.log(obj2.stbike[1].name)
console.log(obj2.stImage[1])
console.log(obj2.stbike.name)

console.log(`${obj2.stbike[0].name} 
${obj2.stbike[1].name} 
${obj2.stbike[2].name}`)

for(var ele of obj2.stbike){
    // console.log(ele.name)
    console.log(ele.color)

}
