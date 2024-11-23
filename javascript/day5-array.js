// const array = ["madhu","ammu","thagapula"]
// const array2 =new Array(" madhu","ammu","thagapula")
// console.log(array.concat(array2))
// console.log(array + array2)
// console.log(array[2])
// console.log(array.length)

//accessing the array elements

//pop remove last element

var sample = ["html","css","bs","js","react"]
// console.log(sample)
// console.log(sample.pop())
// console.log(sample)

// // push add new in last
// console.log(sample.push("redux"))
// console.log(sample)

//to string-no effect in original
// console.log(sample.toString())

//join-no effect in original
// console.log(sample.join("*"))

//splice
// console.log(sample.splice(2,0,"tailwind"))
// console.log(sample)

// sort 
// console.log(sample.sort())
// console.log(sample)

// shift
// console.log(sample.shift())
// console.log(sample)

//unshift
// console.log(sample.unshift("Front-end"))
// console.log(sample)

//reverse
// console.log(sample.reverse())

num=[1,2,3,5,7,4,8,6]
// console.log(num.sort())
// console.log(num.reverse())

// slice-no effect in og
// console.log(sample.slice(2))
// console.log(sample.slice(2,4))
// console.log(sample)

// map-important-no effect in og
console.log(num.map(e=>e*2))

//filter-important-no effect in og
price=[300,400,800,1200,1000,250,480,970,836,746,876]
console.log(price.filter(e=>e>=499))
console.log(price)

//include, index of,for each-(e=>console.log(e*2))-map like same