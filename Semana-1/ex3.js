function soma(a, b) {
    return a + b;
}
let soma2 = (a,b) => {return a + b};
console.log("Usando function: " + soma(2,3)+"\n");
console.log("Usando function: " + soma(5,7)+"\n");

console.log("Usando arrow function: " + soma2(2,3)+"\n");
console.log("Usando arrow function: " + soma2(5,7)+"\n");
