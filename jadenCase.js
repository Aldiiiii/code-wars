String.prototype.toJadenCase = function () {
    console.log(this.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "))
};


console.log("How can mirrors be real if our eyes aren't real".toJadenCase())
