// //even numbers
//   for (i=1; i<=100; i++)
//     {  
//         while (i%2==0) {
//             console.log(i)
//             i++
//         }
//         }
// //odd numbers
// for (i=1; i<=100; i++)
//      {  
//          while (i%2!=0) {
//             console.log(i)
//             i++
//         }
//         }
// // prime number

// for(i=2; i<=100; i++){
//     if(i==2 || i==3 || i==5 || i==7){
//         console.log(i)
//     }
// else if (i%3!=0 && i%2!=0 && i%5!=0 && i%7!=0) {
//     console.log(i)
// } }

//factorial
let n = 7
let f = 1

for (let i = n; i >= 1; i--) {
    f *= i;  
}
    
console.log(f)

// tables
for (n=1; n<=10; n++){

for (i=1; i<=10; i++)
     {  
    console.log( n + " * " + i + " = " + i*n )
   
     }
    }

    for (n=1; n<=10; n++){

        for (i=1; i<=10; i++)
             {  
            console.log( n + " + " + i + " = " + i+n )
           
             }
            }
 for (n=1; n<=10; n++)
 {
    for (i=1; i<=10; i++)
    {  
        console.log( n + " - " + i + " = " + (n-i) )          
        }
                }
 for (n=1; n<=10; n++){

                for (i=1; i<=10; i++)
               {  
                console.log( n + " / " + i + " = " + i/n )      
                }
                     }
