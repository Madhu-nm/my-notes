// //hoisting

// console.log(wed)
// var wed;

// // default parameter
// display= (c="Welcome you") =>{
//     console.log(c)
// }
// display() 
// // default parameter ilana undefined varum
// display("hi")

// //template literal - same format varum spacing yela same a irukum ad line by line pota kuda varum
// tam="complete your course"
// // console.log("HI MADHU"+ tam)
// console.log( `Hi
//  madhu ${tam}`)

// //spread operator -like concat and assign - work only object and array - ...
// odd=[1,3,5,7,9]
// even=[2,4,6,8,0]
// ans=[...odd,...even]
// console.log(ans)

// //rest parameter - pack - ... -function la used - last a use pananum
// rest=(a,b,...c)=>
// {
//     console.log(a) 
//     console.log(b)
//     console.log(c)
// }

// rest(1,2,5,6,7,4,3,2,8,9,7)
// /* o/p - 
// a=1 b=2 c=[5, 6, 7, 4, 3, 2, 8, 9, 7]*/

// //destructuring

// value=[1,3,5,7,8]
// let [x,y,z,a]=value

// console.log(x)
// console.log(a)