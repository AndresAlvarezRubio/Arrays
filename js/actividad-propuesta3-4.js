/**
 * Quieres crear una estructura de datos que almacene la tabla de 
 * clasificación de una liga local de futbol con estos datos
 * 
 *      La liga la disputan 10 equipos y cada 
 *      equipo tiene los siguientes datos:
 * 
 *         - Nombre
 *         - Puntos
 *         - Partidos jugados
 *         - Partidos ganados
 *         - Partidos empatados
 *         - Partidos perdidos
 *         - Goles a favor
 *         - Goles en contra
 * 
 * Crea la estructura de datos que consideres más útil, rellénala con datos * coherentes y muestra en pantalla toda la información de la clasificación * del equipo ganador
 * 
 * 
 */
let ganador = "";
let puntuacion = 0;
let array = [
    ["Equipo1", 22, 10, 5, 4, 1, 15, 5],
    ["Equipo2", 11, 5, 3, 1, 1, 6, 3],
    ["Equipo3", 19, 7, 0, 3, 0, 19, 5],
    ["Equipo4", 15, 8, 7, 1, 0, 14, 5],
    ["Equipo5", 25, 10, 7, 1, 2, 20, 8],
    ["Equipo6", 14, 10, 4, 3, 3, 6, 5],
    ["Equipo7", 14, 10, 4, 3, 3, 5, 3],
    ["Equipo8", 12, 3, 3, 0, 0, 5, 1],
    ["Equipo9", 22, 10, 7, 1, 2, 13, 5],
    ["Equipo10", 2, 10, 1, 1, 8, 2, 10]
];

for (let i = 0; i < array.length; i++) {

    for (let y = 0; y < array[i].length; y++) {

        if (i >= 0) {

            if (array[i][1] > puntuacion) {

                puntuacion = array[i][1];
                ganador = array[i][0];
            }
        }
    }
}




for (let i = 0; i < array.length; i++) {

    for (let y = 0; y < array[i].length; y++) {

        let tableD = document.createElement("tr")

        tableD.textContent = array[i][y];
        tableD.setAttribute("name", array[i][y])
        tableD.setAttribute("value", array[i][y])
        document.querySelector(`#e${(i + 1)}`).appendChild(tableD);

    }
}

document.querySelector(".winner").innerHTML = `<p>El ganador es ${ganador} con una puntuación de -> ${puntuacion}</p>`;