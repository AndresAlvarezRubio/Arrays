let arrayCoches = ["Opel","Mazda","Citroen","Seat","Ford","Audi","Alfa Romeo"];
let otrosCoches=["Lexus","Tesla","MG"];


let indiceBuscado = arrayCoches.indexOf("Seat");
//Posición en el array
console.log(indiceBuscado);


//Si lo que busca como resultado es si existe o no
console.log(arrayCoches.includes("Mercedes"));
console.log(arrayCoches.includes("Ford"));
console.log(arrayCoches.includes("ford")); // --> Sensible a mayúsculas


let numeros = [1,2,3,4,5,6,4,5,2,10,11,15];
console.log(numeros);
console.log(numeros.lastIndexOf(2)); // Se busca el último con el valor del paréntesis
console.log(numeros.indexOf(2));     // Se busca el primer con el valor del paréntesis