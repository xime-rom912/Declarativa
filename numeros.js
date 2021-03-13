for (let i = 1; i <= 10; ++i){ 
    console.log(i); 
    if (i == 5) 
        alert("Hola Mundo desde el numero 5");
}
suma();
function suma (){
    console.log("La suma de 2 y 3 es "+(2+3));
}

const suma2 = (a,b) => {
    let total = a + b;
    return total;
}
console.log(suma2(10,15));