const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])
console.log(t[0])
console.log(t[5])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5, 4, 7, 9);

console.log(t);
console.log(t2);

const m1 = t.map(value => value*2)
console.log(m1)

const m2 = t.map(value => "<l1>" + value + "</li>")
console.log(m2)
