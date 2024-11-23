//session 22
//asychoronous-parallel running & synchronous-line by line running

//1.set timeout
console.log("hi")

greet=()=>{
    console.log("i am madhu")
}
setTimeout(greet,5000)

console.log("bye")

// 2. Callback - oru function a inoru function ku parameter use panuvom

demo=(name,newf)=>{
    console.log("hi"+ name)
    newf()
}
callme=()=>{console.log("madhu")}
demo()