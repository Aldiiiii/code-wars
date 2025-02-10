// Make a square box!
function box(n) {
    //your code here
    const res = []

    // iterate row
    for (let i = 0; i < n; i++) {
        // iterate col
        let str = ""
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                str += "-"
            } else {
                if (j === 0 || j === n - 1) {
                    str += "-"
                } else {
                    str += " "
                }
            }
        }
        res.push(str)
    }
    return res
}

// console.log(box(5))



function box2(n) {
    const outB = '-'.repeat(n);
    const inB = `-${' '.repeat(n - 2)}-`;

    return [outB, ...Array(n - 2).fill(inB), outB];
}
