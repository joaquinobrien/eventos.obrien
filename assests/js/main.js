// aca arranca mi simulador 

let nombre;
function pedirnombre() {
    alert ("Bienvenido a Eventos OBrien");
    let nombre = prompt ("ingrese su nombre");

    while (nombre === "") {
        nombre = prompt ("ingrese su nombre");
    }


    let edad = parseInt(prompt("¿cual es tu edad?"));

    if ( edad >= 18) {
        console.log ("Cumplis el requisito. Busque su evento soñado");
     
        } else {
            console.log ("No cumplis el requesito por menor de edad. Lo lamentamos!.")


        }











}