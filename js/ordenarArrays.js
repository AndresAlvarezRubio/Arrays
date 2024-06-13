let arrayCoches = ["Opel","Mazda","Citroen","Seat","Ford","audi"];

arrayCoches.sort();

for (let i = 0; i < arrayCoches.length; i++) {
    
    console.log(arrayCoches[i]);
    
}

// for (let i = 0; i < arrayCoches.length; i++) {
    
//     arrayCoches[i]=arrayCoches[i].toUpperCase;
//     console.log(arrayCoches[i]);
    
// }


let otrosCoches=["Lexus","Tesla","MG"];

let todosCoches = otrosCoches.concat(arrayCoches);

todosCoches.sort();
console.log(todosCoches);