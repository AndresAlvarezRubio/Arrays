/**
 * Una aplicación de análisis de datos en la que estás trabajando necesita 
 * crear una estructura que almacene 10 múltiplos de 5 aleatorios de 0 a
 * 100. Además, el primer elemento debe ser mayor de 50 y el último menor 
 * de 50
 */


let array= [];

for (let i = 0; i < 10; i++) { array[i] = parseInt(Math.random()*21)*5; }
while (array[0]<=50) { array[0] = parseInt(Math.random()*21)*5; }
while (array[9]>=50) { array[9] = parseInt(Math.random()*21)*5; }

console.log(array);