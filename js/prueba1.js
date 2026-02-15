console.log(saludar("Mundo"));
let xx ="";
console.log(saludar(xx));   console.log("Hola, este es un mensaje de prueba en JavaScript.");

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
function saludar( claseSaludo, nombre) {
    if (claseSaludo === 1) {
        console.log("Clase de saludo: " + claseSaludo);
           return "Hola, " + nombre + "!"; 
    }

else {
        console.log("Clase de saludo: " + claseSaludo);
        return "¡Adiós, " + nombre + "!";
}
    
}   
console.log (saludar(1, "Mundillo"));
console.log (saludar(2, "Mundillo"));
