//Conjunto
let coleccion1 = new Set([1,2,3,4,5,1]);


console.log(coleccion1);
console.log(coleccion1.size);

//Mapa
let mapa1 = new Map([[1,"irina"],[2,"manuel"],[3,"Pedro"],[4,"Wey"],[5,"yuuu"]]);

console.log(mapa1);


//Recorrer mapa                         -->     Correcto
console.log("");

for (let [indice,valor] of mapa1) {
    
    console.log(`El indice es ${indice} y el nombre es ${valor}`);
    
}


//Recorrer mapa (Prueba solo índice)    -->     Incorrecto
console.log("");

for (let indice of mapa1) {
    
    console.log(`El nombre es ${indice}`);
    
}


//Insertar un elemento al mapa
console.log("");
mapa1.set(4,"Pedrito");

for (let [indice,valor] of mapa1) {
    
    console.log(`El indice es ${indice} y el nombre es ${valor}`);
    
}


//Borrar elemento
console.log("");
mapa1.delete(1)

for (let [indice,valor] of mapa1) {
    
    console.log(`El indice es ${indice} y el nombre es ${valor}`);
    
}


//Buscar elemento
console.log("");

if (mapa1.has(3)) {  console.log("Encontró el 3");     }
else              {  console.log("No encontró el 3");  }
