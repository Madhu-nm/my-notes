Salary=12000
pfpercentage=10/100 //1200
interest=10/100  //1200+120 =1320
increment=10/100 //13200
months=120

let epfBalance = 0

for (let i = 1; i <= months; i++) {
    contribution= (pfpercentage)*Salary
    epfBalance+=contribution
    console.log(epfBalance)

    if (i%12==0) {
        epfBalance=epfBalance*(1+interest)
    }
    if (i%12==0) {
        Salary=Salary*(1+increment)
    }

}
console.log(epfBalance)

