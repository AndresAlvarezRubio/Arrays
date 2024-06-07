//Variables -> Utiliza un espacio de memoria para guardar un valor

// let name1="Juan Perez";
// let name2="Marina Torres";
// let name3="Pedro Picapiedra";

//What is this shit, look how you can do this



//declarar Array

//1.Primera manera <3
let bookOfNames = ["Juan Rodriguez" , "Marina Torres" , "Pedro Picapiedra" , "Tania Pinero" , "Sergio Castro",]; 

//2.Segunda manera :c
// let bookOfNamesMeh=new Array("Juan Rodriguez" , "Marina Torres" , "Pedro Picapiedra" , "Tania Pinero" , "Sergio Castro");

//(+1)Se añade contenido al array 
bookOfNames[5]="Supulero";

//Mostrar nuevo y Array
// console.log(bookOfNames[5]);
// console.log(bookOfNames);

//Cambiar contenido del especificado
// bookOfNames[5]="Suspulero Petrovich";
// console.log(bookOfNames[5]);



/**
 * Actividad Resuelta 3.1
 * Crear un Array con 5 localidades y mostrar solo las de posiciones impares 
 */

let sitiosBonitos=["Acantilado Bruja Cuervo" , "Riften" , "Cauce Boscoso" , "Helgen" , "Markarth" , "Los Pinares"];

let indice=0;



//nombreArray.length -> 

// console.log("\nMostrar impares\n");

while (indice < sitiosBonitos.length) {
    
    if(indice%2!=0) {
        
        // console.log(sitiosBonitos[indice]);
        
    }
    
    indice++;
    
}




//Recorrer Array

console.log("\nMostrar Todos\n");

for (let index = 0; index < sitiosBonitos.length; index++) {

    // console.log(sitiosBonitos[index]);

}






//Crear un Array Bidimensional con valores random del 1 al 10.
//5 filas y 4 columnas
let arrayFC = new Array(5);

for (let i = 0; i < array.length; i++) {

    arrayFC[i] = new Array(4);

    for (let y = 0; y < array.length; y++) {
        
        arrayFC[i][y] = parseInt(Math.random()*10);

    }
    
}

//***********//
//Según libro//
//***********//

// tablaNotas[0][0] = 1 //Fila 0 - Columna 0
// tablaNotas[0][1] = 2 //Fila 0 - Columna 1
// tablaNotas[0][2] = 3 //Fila 0 - Columna 2
// tablaNotas[1][0] = 4 //Fila 1 - Columna 0
// tablaNotas[1][1] = 5 //Fila 1 - Columna 1
// tablaNotas[1][2] = 6 //Fila 1 - Columna 2
//** Pereza este de arriba **/

let tablaNotas = new Array(2);
tablaNotas[0] = new Array(2);
tablaNotas[1] = new Array(3);

for (let i = 0; i < tablaNotas[0].length; i++) {
    
    for (let x = 0; x < tablaNotas[1].length; x++) {
        
        aleatoryNumber = parseInt(Math.random()*10)

        tablaNotas[i][x] = aleatoryNumber;
        
    }
    
}
