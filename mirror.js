// Mirror, mirror, on the wall...

const mirror = (data) => {
    return [...data].sort((a, b) => a - b).concat([...data].sort((a, b) => a - b).join("*").split("*").filter((el, i) => i != data.length - 1 && el).map(el => Number(el)).reverse())
}

console.log(mirror([2, 1]))