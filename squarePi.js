function squarePi(digits){
    if(!digits) return 0
    const aHundredPiDigit = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"

    //Code probably goes here
    return Math.ceil(Math.sqrt(aHundredPiDigit.slice(0, digits).split("").map(el => Number(el) * Number(el)).reduce((a, b) => a + b)));
  }


console.log(squarePi(0))