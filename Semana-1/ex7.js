let findMaior = (a) => {
let maior = a[0];
a.forEach(num => {
    if(num>maior){
        maior = num;
    }
})
console.log("O maior número é: " + maior);
}
let lista=[];
for (let i = 0; i <= 5; i++) {
    let num = Number.parseInt(Math.random()*10);
    lista.push(num)
}
console.log(lista);
findMaior(lista);