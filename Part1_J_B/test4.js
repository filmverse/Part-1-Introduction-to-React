// Functions

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2);
    return p1 + p2;
}

const result = sum(1, 5)
console.log(result)

const square = p => p * p

const t  = [1, 2, 3]
const tSquared = t.map(p => p * p)

function product(a, b) {
    return a * b    
}

const result1 = product(2, 6)
console.log(result1)

const average = function(a, b) {
    return (a + b) / 2
}

const result2 = average(2, 5)
console.log(result2)