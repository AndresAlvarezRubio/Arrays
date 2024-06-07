/*
Actividad Propuesta 3.3

Crear un array con 100 valores aleatorios y mostrar solo pares
Utilizar recorrido for-in

*/

let array = new Array(100);

for (let i = 0; i < array.length; i++) {
    
    array[i]=parseInt(Math.random()*1000+1);
    
}
//Recorrido FOR-IN -> Se tiene en cuenta el índice
for (let i in array){
    
    if (array[i]%2==0) {
        console.log(`Número par con i->${i} con valor ${array[i]}`); 
    }


}

//Recorrido FOR-OF -> Se tiene en cuenta el contenido
let arrayMascota =["Perro","Gato","tortuga"]

for (let mascota of arrayMascota) {

    console.log(mascota);

}


let matriz = [[5,1,2],[6,4,3],[5,2,1],[1,5,7]];

console.log(matriz.length); //Resultado -> 4  -  Se cuentan solo las filas

//recorrer el array bidimensional de otra manera
for (let f = 0; f < matriz.length; f++) { //Lo recorre 4 veces

    for (let c = 0; c < matriz[f].length; c++) {
        
        console.log(`Valor de la fila ${f} y columna ${c} es de -> ${matriz[f][c]}`);

    }
    
}


let matrizDiagonal = [[1,2,3],[4,5,6],[7,8,9]];

for (let f = 0; f < matrizDiagonal.length; f++) {
    
    for (let c = 0; c < matrizDiagonal[f].length; c++) {
        
        if (f==c) {

            console.log(matrizDiagonal[f][c]);

        }

    }

}



/*Tabla en HTML y mostrar solo la diagonal*/

let arrayTabla = new Array(3);

for (let i = 0; i < arrayTabla.length; i++) {
    
    arrayTabla[i] = new Array(3);

    for (let y = 0; y < arrayTabla[i].length; y++) {
        
        arrayTabla[i][y] = parseInt(Math.random()*100+1);

        document.getElementById("d" + i + y).innerHTML=arrayTabla[i][y];

        if (i==y) {

            document.getElementById("d" + i + y).style.color="pink";

        }

    }
}