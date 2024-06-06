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