let nombre = prompt("¡Bienvenido a Mar Bárbaro! ¿Cómo te llamás?");

const producto = "Taza Niebla";
const precio = 13500;

let cantidad = parseInt(prompt("Hola " + nombre + ", ¿cuántas unidades de Taza Niebla querés comprar?"));

let envoltorio = prompt("¿Querés que preparemos tu compra para regalo? (Sí / No)");

const total = precio * cantidad;

alert(
    "¡Gracias por tu compra, " + nombre + "!\n\n" +
    "Producto: " + producto + "\n" +
    "Precio unitario: $" + precio + "\n" +
    "Cantidad: " + cantidad + "\n" +
    "Envoltorio para regalo: " + envoltorio + "\n\n" +
    "Total de la compra: $" + total
);
