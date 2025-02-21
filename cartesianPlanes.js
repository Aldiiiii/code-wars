function sumin(n) {
  let result = 0
  for(let x = 1; x <= n; x++){
    for(let y = 1; y <= n; y++){
      result += Math.min(x,y)
    }
  }
return result
}

function sumax(n) {
      let result = 0
  for(let x = 1; x <= n; x++){
    for(let y = 1; y <= n; y++){
      result += Math.max(x,y)
    }
  }
return result
}

function sumsum(n) {
      let result = 0
  for(let x = 1; x <= n; x++){
    for(let y = 1; y <= n; y++){
      result += x +y
    }
  }
return result
}

//Functions of Integers on Cartesian Plane
