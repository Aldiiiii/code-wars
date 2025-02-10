//    /\   
//   /  \  
//  /    \ 
// /______\  number of floors 3
// |      |
// |      |
// |______|

//   /\  
//  /  \ 
// /____\
// |    |   2 floors
// |____|

//  /\ 
// /__\    1 floor
// |__|

function myCrib(n) {
    let width = n * 2 + 2
    let house = ""

    // roof
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < width; j++) {
            if (j === width / 2 - 1 - i) {
                house += "/"
            } else if (j === width / 2 + i) {
                house += "\\"
            } else {
                if (i === n) {
                    house += "_"
                } else {
                    house += " "
                }
            }

        }
        house += "\n"
    }

    //base
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < width; y++) {
            if (y === 0 || y === width - 1) {
                house += "|"
            } else {
                if (x === n - 1) {
                    house += "_"
                } else {
                    house += " "
                }
            }
        }
        if (x !== n - 1) {
            house += "\n"
        }
    }
    return house
}

console.log(myCrib(3))
