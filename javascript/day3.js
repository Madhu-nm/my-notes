//control statement or decision statement or condition statement

//if, if..else , nested if .. else, ladder if

age=19
if (age>=18) {
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}

num1=7
num2=83

if (num1>num2) {
    console.log("Num1 is greatest number")
}
else{
    console.log("Num1 is greatest number")
}
//odd or even
num=50
if (num%2==0) {
    console.log("Num is even number")
} else {
    console.log("Num is odd number")
}

//ladder if else 

//greater in 3 numbers
num1=7
num2=83
num3 =680

if (num1>num2&&num1>num3) {
    console.log("Num1 is greatest number")
}
else if (num2>num3 && num2>num1) {
    console.log("Num2 is greatest number")
}
else{
    console.log("Num3 is greatest number")
}

//=VE,-VE OR zero
num=-10
if (num>0) {
    console.log("number is positive")
    
} else if (num<0){
    console.log("number is negative")
}
else{
    console.log("number is zero")
}

//nested if else

//greatest of 3 numbers
num1=9
num2=40
num3=200
if (num1>num2) {
    
    if (num1>num3) {
        console.log("Num1 is greatest number")
    } 
    
    else {console.log("Num3 is greatest number")
    
    }
    
}
else
 { if (num2>num3) 
    {
     console.log("Num2 is greatest number")
     } 
     else {
    console.log("Num3 is greatest number")
 }
 }

 num1=9
num2=40
num3=200
if (num1>num2) {
    
    if (num1>num3) {
        console.log("Num1 is greatest number")
    } 
    
    else {console.log("Num3 is greatest number")
    
    }
    
}
else if (num2>num3) 
    {
     console.log("Num2 is greatest number")
     } 
     else {
    console.log("Num3 is greatest number")
 }
 
 //switch case

 day=3

 switch (day) {
     case 1:
         console.log("mon")
         break;
     case 2:
            console.log("tue")
            break;
            case 3:
                console.log("wed")
                break;
                case 4:
                console.log("thur")
                break;
                case 5:
                console.log("fri")
                break;
                case 6:
                console.log("sat")
                break;
                case 7:
                console.log("sun")
                break;
 
     default:
         console.log("Enter the number between 1 to 7")
         break;
 }
 //looping case

 //do while
 i = 1
 do {
     console.log(i)
     i++
 } while (i<=4);



 i = 1
 do {
     i++
     console.log(i)
 } while (i<=4);

 
 //while
i=1
 while (i<=4) {
    console.log(i)
    i++
 }

i=1
 while (i<=4) {
    i++
    console.log(i)
 }

 i=1
 while(i<=100)
 {
    i++
    console.log(i)
 }

 //for loop
 
     for (i=1; i>=5; i++)
     {  console.log(i)}
 
 
//nested loop
                           
for (i=1; i<=5;i++)
     {  
         console.log(i)
         if (i==5) {
             break
         }
        }

 for (i=1; i<=50;i++)
        {  
            if (i==5) {
                break
            }
            console.log(i)
           }