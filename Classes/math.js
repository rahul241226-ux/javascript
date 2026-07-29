const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const math = {
    name: 'am',
    pricr: 2234,
    isAvailable: true

}
console.log(Object.getOwnPropertyDescriptor(Math, "name"));

Object.defineProperties(math, 'name', {

    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Math, "name"))

for (const [key, value] of Object.entries(math)) {

    if (typeof value !== 'function') {

        console.log(`${key}: ${value}`);
    }

}

