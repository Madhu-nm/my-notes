// // function-4 types

// // 1. without augment and no return
// function age(){
//     console.log("18")
// }
// age()

// //2. with augment and no return
// function sum(a,b){
//     console.log(a*b)
// }
// sum(5,3)

// //3. without augment and with return

// function sums(){
//     a=5
//     b=12
//     return (a+b)
// }
// console.log(sums())

//  //4. with both augment an return
//  function cal(c,d) {
//     return c*d
//  }
//  console.log(cal(3,4))

//  //ES-5- Variable expression of function

//  add= function(){
//      a=10
//      b=23
//      console.log(a+b)
//  }
//  add()

// //  same 4 types

// //es-6

// sub =(w,v)=>
// {
//     console.log(w-v)
// }
// sub(90,70)

// //string

// const strg="hello ammu"
// console.log(strg.length)
// console.log(strg.endsWith("o"))
// console.log(strg.startsWith("h"))
// console.log(strg.includes("h"))
// console.log(strg.indexOf("l"))
// console.log(strg.lastIndexOf("l"))
// console.log(strg.repeat( "3" ))
// console.log(strg.replace( "hello", "man"))
// console.log(strg.slice( 3 ))
// console.log(strg.split("e" ))
// console.log(strg[8])
// console.log(strg.toUpperCase())
// console.log(strg.trim())

// //math

// console.log(Math.max(4,5,6))
// console.log(Math.min(4,5,6))

// //otp generator
// 
// otp = () =>{
// console.log(Math.floor(Math.random() * (100-50)+ 50))
// }

// otp()

//password generator

const len =12
const num = "0123456789"
const symbol = "/*-+~!@#$%^&*()_:;'|\/?`"
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const upperalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allchar = num + symbol + alphabet + upperalphabet

function pass () {
    let password = ""
    password += alphabet[Math.floor(Math.random() * alphabet.length )]
    password += upperalphabet[Math.floor(Math.random() * upperalphabet.length )]
    password += symbol[Math.floor(Math.random() * symbol.length )]
    password += num[Math.floor(Math.random() * num.length )]

    while (len > password.length) {
        password+=allchar[Math.floor(Math.random() * allchar.length )]
        
    }
    console.log(password)
}

pass()

