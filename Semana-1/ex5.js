let lista =[];
for (let i = 1; i <= 20; i++) {
    lista.push(i);
}
lista.forEach(num => {
    if (num % 2 === 0) {
        console.log(num + " é par");
    }
        
})