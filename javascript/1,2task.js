tam=79
eng=98
math=99
sci=94
ss=89
total=tam+eng+math+sci+ss
avg=total/5
console.log("total is " + total)
console.log("avaerage is "+ avg)

//swap2 numbers
num1 = 5
num2 = 8
num1 = num1+num2
num2 = num1-num2
num1 = num1-num2
console.log(num1)
console.log(num2)


num1 = 5
num2 = 8
temp = num1 
num1= num2 
num2 = temp
console.log(num1)
console.log(num2)

//simple interest calculator

principal=10000
roi=5
yrs=2
interest=(principal*roi*yrs)/100
amount=principal+interest
console.log("pricipal is "+principal)
console.log("interest earned "+ interest)
console.log("final amount is "+ amount)

//salary calculator

salary=12000
monthly=salary/12
weekly=salary/52
daily=salary/260
hourly=salary/2080
minutes=salary/124800
seconds=salary/7488000
console.log("salary on monthly is " + monthly )
console.log("salary on weekly " + weekly )
console.log("salary on daily " + daily )
console.log("salary on hourly " + hourly) 
console.log("salary on minutes " + minutes) 
console.log("salary on seconds " + seconds)

// mile to km converter

mile=50
km=1.609344*mile
console.log("km is " + km)

//speed distance time calculator

distance=1000
time=3
speed=distance/time
console.log("speed is " + speed + " km/hr")

//shape calculator

shape ="rectangle"

if (shape==="circle") {
    r=5
    area=3.14*r**2
    console.log("Area of circle is " + area)
} 
 if (shape==="square") {
    l=7
    area=l**2
    console.log("Area of square is " + area)
}
else if (shape==="rectangle") {
    l=7
    b=4
    area=l*b
    console.log("Area of rectangle is " + area)
}
//pass fail

marks=7

if (marks>=40) {
    console.log("Pass")
}
else{
    console.log("Fail")
}

//odd or even

num=50
if (num%2==0) {
    console.log("Num is even number")
} else {
    console.log("Num is odd number")
}

//leap year

year= 2025
if (year%4==0) {
    console.log("year is leap year")
}
else{
    console.log("Not leap year")
}

//greater in 2 numbers
num1=7
num2=83

if (num1>num2) {
    console.log("Num1 is greatest number")
}
else{
    console.log("Num2 is greatest number")
}

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
//greater in 4 numbers
num1=7
num2=8
num3 =68
num4 =82

if (num1>num2&&num1>num3&&num1>num4) {
    console.log("Num1 is greatest number")
}
else if (num2>num3 && num2>num1 && num2>num4) {
    console.log("Num2 is greatest number")
}
else if (num3>num1 && num3>num2 && num3>num4) {
    console.log("Num3 is greatest number")
}
else{console.log("Num4 is greatest number")}

//num or not 

num=9

if (typeof num == 'number') {
    console.log("yes it number")
}
else{console.log("not a number")}

//eb bill calculator

units=930
if (units<=100) {
    console.log("No charges")
}
else if (units<=200) {
    amount=(units-100)*2.35
    console.log(amount)
}
else if (units<=400) {
    amount=235+(units-200)*4.70
    console.log(amount)
}
else if (units<=500) {
    amount=1175+(units-400)*6.30
    console.log(amount)
}
else if (units<=600) {
    amount= 2750+(units-500)*8.40
    console.log(amount)
}
else if (units<=800) {
    amount=2880+(units-600)*9.45
    console.log(amount)
}
else if (units<=1000) {
    amount=4770+(units-800)*10.50
    console.log(amount)
}
else if (units>=1000) {
    amount=6870+(units-1000)*11.55
    console.log(amount)
}
//grade system
marks=6
if (marks<49) {
    console.log("F grade")
}
else if (marks<54) {
    console.log("d grade")
}
else if (marks<64) {
    console.log("c grade")
}
else if (marks<79) {
    console.log("b grade")
}
else if (marks<100) {
    console.log("a grade")
}
//voter eligible
age=19
if (age>=18) {
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
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