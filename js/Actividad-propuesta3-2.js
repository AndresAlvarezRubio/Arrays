let coloresRGB = ["#F39C12" , "#C0F312" , "#12F3E5" , "#F312AF" , "#F31212"];
let nombreRGB = ["Naranja" , "Lima" , "turquesa" , "Rosa" , "Rojo"];
let colores = document.querySelector("#colores");


for (let i = 0; i < nombreRGB.length; i++) {
    
    let opcion = document.createElement("option") //Se crea el option

    //Le indicas con textContent que muestra en el select por cada opcion
    opcion.textContent=nombreRGB[i];
    opcion.setAttribute("id",nombreRGB[i])
    opcion.setAttribute("name",nombreRGB[i])
    opcion.setAttribute("value",i)
    colores.appendChild(opcion);

}


let contenedor=document.querySelector(".color-picker");
//Escuchamos el evento de cambio dentro del select para que cambie el color de fondo


colores.addEventListener("change",function() {
    
    if (colores.value=="") {
        
        contenedor.style.backgroundColor="none";
        contenedor.style.backgroundImage="url('https://i.insider.com/663225050dfb1341e9010cb0?width=1136&format=jpeg')";
        
    } else {
        
        contenedor.style.backgroundColor=coloresRGB[colores.value];
        contenedor.style.backgroundImage="none";

    }

})