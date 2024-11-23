marks={
    tam:89,eng:85,maths:100,science:98,ss:92
}

//accessing

//dot notation -most used
console.log(marks.tam)
//bracket notation
console.log(marks["eng"])

//nested object
const students={
    name:"ram",
    age:18,
    marks:{
        tam:97,
        math:100,

    }
}
//object method

//1.object kula function podala

// person={
//     fname:"m",
//     greet:function() {console.log("HELLO")}
// }
// person.greet()

//2.this keyword
// lname="s"
// person={
//     fname:"m",
//     greet:function() {
//         console.log("HELLO "+ this.fname + lname)
//     }
// }
// person.greet()

//3.keys and values

console.log(Object.keys(students))
console.log(Object.values(students))
console.log(Object.values(students.marks))

//4.assign-like joining
details={
    name:"rani",
    class:"2nd"
}
marks={
    tam:89,eng:85,maths:100,science:98,ss:92
}
console.log(Object.assign(details,marks))

//for in and for of
for (const x in students) {
 console.log(x)
    }
    price=[300,400,800,1200,1000,250,480,970,836,746,876]
    for (const x of price) {
        console.log(x*2)
           }
        //    console.log(price.map(e=>e*2)) - diff yena na return as array
       
