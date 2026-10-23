const nombre = prompt("¡Bienvenido a Mar Bárbaro! ¿Cómo te llamás?");

const categoria = parseInt(prompt(
    "Hola " + nombre + ", ¿qué categoría querés explorar?\n" +
    "1 - Ceniceros\n" +
    "2 - Cuencos\n" +
    "3 - Deco\n" +
    "4 - Macetas\n" +
    "5 - Mates\n" +
    "6 - Portasahumerios\n" +
    "7 - Tazas\n" +
    "8 - Teteras"
));

let producto;

if (categoria === 1) {
    producto = parseInt(prompt(
        "Elegiste Ceniceros. ¿Cuál querés comprar?\n" +
        "1 - Cenicero Bruma: $8500\n" +
        "2 - Cenicero Eclipse: $9200\n" +
        "3 - Cenicero Terracota: $8900\n" +
        "4 - Cenicero Volcán: $10500"
    ));

} else if (categoria === 2) {
    producto = parseInt(prompt(
        "Elegiste Cuencos. ¿Cuál querés comprar?\n" +
        "1 - Cuenco Aurora: $16500\n" +
        "2 - Cuenco Raíz: $18000\n" +
        "3 - Cuenco Marea: $17200\n" +
        "4 - Cuenco Nativo: $19500"
    ));

} else if (categoria === 3) {
    producto = parseInt(prompt(
        "Elegiste Deco. ¿Cuál querés comprar?\n" +
        "1 - Deco Silvestre: $13500\n" +
        "2 - Deco Horizonte: $15800\n" +
        "3 - Deco Lumbre: $14200\n" +
        "4 - Deco Esencia: $17000"
    ));

} else if (categoria === 4) {
    producto = parseInt(prompt(
        "Elegiste Macetas. ¿Cuál querés comprar?\n" +
        "1 - Maceta Brote: $12500\n" +
        "2 - Maceta Selva: $15000\n" +
        "3 - Maceta Musgo: $13800\n" +
        "4 - Maceta Tierra: $16500"
    ));

} else if (categoria === 5) {
    producto = parseInt(prompt(
        "Elegiste Mates. ¿Cuál querés comprar?\n" +
        "1 - Mate Calma: $14500\n" +
        "2 - Mate Amanecer: $15800\n" +
        "3 - Mate Sendero: $16200\n" +
        "4 - Mate Refugio: $17500"
    ));

} else if (categoria === 6) {
    producto = parseInt(prompt(
        "Elegiste Portasahumerios. ¿Cuál querés comprar?\n" +
        "1 - Portasahumerio Zen: $7500\n" +
        "2 - Portasahumerio Ritual: $8200\n" +
        "3 - Portasahumerio Aire: $8900\n" +
        "4 - Portasahumerio Alma: $9500"
    ));

} else if (categoria === 7) {
    producto = parseInt(prompt(
        "Elegiste Tazas. ¿Cuál querés comprar?\n" +
        "1 - Taza Niebla: $13500\n" +
        "2 - Taza Canela: $14200\n" +
        "3 - Taza Rocío: $15000\n" +
        "4 - Taza Abrazo: $16500"
    ));

} else if (categoria === 8) {
    producto = parseInt(prompt(
        "Elegiste Teteras. ¿Cuál querés comprar?\n" +
        "1 - Tetera Magnolia: $32000\n" +
        "2 - Tetera Ámbar: $35500\n" +
        "3 - Tetera Boreal: $38000\n" +
        "4 - Tetera Serena: $42000"
    ));

} else {
    alert("La categoría ingresada no es válida.");
}

let nombreProducto = "";
let precio = 0;


if (categoria === 1) {
    if (producto === 1) {
        nombreProducto = "Cenicero Bruma";
        precio = 8500;
    } else if (producto === 2) {
        nombreProducto = "Cenicero Eclipse";
        precio = 9200;
    } else if (producto === 3) {
        nombreProducto = "Cenicero Terracota";
        precio = 8900;
    } else if (producto === 4) {
        nombreProducto = "Cenicero Volcán";
        precio = 10500;
    }

} else if (categoria === 2) {
    if (producto === 1) {
        nombreProducto = "Cuenco Aurora";
        precio = 16500;
    } else if (producto === 2) {
        nombreProducto = "Cuenco Raíz";
        precio = 18000;
    } else if (producto === 3) {
        nombreProducto = "Cuenco Marea";
        precio = 17200;
    } else if (producto === 4) {
        nombreProducto = "Cuenco Nativo";
        precio = 19500;
    }

} else if (categoria === 3) {
    if (producto === 1) {
        nombreProducto = "Deco Silvestre";
        precio = 13500;
    } else if (producto === 2) {
        nombreProducto = "Deco Horizonte";
        precio = 15800;
    } else if (producto === 3) {
        nombreProducto = "Deco Lumbre";
        precio = 14200;
    } else if (producto === 4) {
        nombreProducto = "Deco Esencia";
        precio = 17000;
    }

} else if (categoria === 4) {
    if (producto === 1) {
        nombreProducto = "Maceta Brote";
        precio = 12500;
    } else if (producto === 2) {
        nombreProducto = "Maceta Selva";
        precio = 15000;
    } else if (producto === 3) {
        nombreProducto = "Maceta Musgo";
        precio = 13800;
    } else if (producto === 4) {
        nombreProducto = "Maceta Tierra";
        precio = 16500;
    }

} else if (categoria === 5) {
    if (producto === 1) {
        nombreProducto = "Mate Calma";
        precio = 14500;
    } else if (producto === 2) {
        nombreProducto = "Mate Amanecer";
        precio = 15800;
    } else if (producto === 3) {
        nombreProducto = "Mate Sendero";
        precio = 16200;
    } else if (producto === 4) {
        nombreProducto = "Mate Refugio";
        precio = 17500;
    }

} else if (categoria === 6) {
    if (producto === 1) {
        nombreProducto = "Portasahumerio Zen";
        precio = 7500;
    } else if (producto === 2) {
        nombreProducto = "Portasahumerio Ritual";
        precio = 8200;
    } else if (producto === 3) {
        nombreProducto = "Portasahumerio Aire";
        precio = 8900;
    } else if (producto === 4) {
        nombreProducto = "Portasahumerio Alma";
        precio = 9500;
    }

} else if (categoria === 7) {
    if (producto === 1) {
        nombreProducto = "Taza Niebla";
        precio = 13500;
    } else if (producto === 2) {
        nombreProducto = "Taza Canela";
        precio = 14200;
    } else if (producto === 3) {
        nombreProducto = "Taza Rocío";
        precio = 15000;
    } else if (producto === 4) {
        nombreProducto = "Taza Abrazo";
        precio = 16500;
    }

} else if (categoria === 8) {
    if (producto === 1) {
        nombreProducto = "Tetera Magnolia";
        precio = 32000;
    } else if (producto === 2) {
        nombreProducto = "Tetera Ámbar";
        precio = 35500;
    } else if (producto === 3) {
        nombreProducto = "Tetera Boreal";
        precio = 38000;
    } else if (producto === 4) {
        nombreProducto = "Tetera Serena";
        precio = 42000;
    }
}


if (precio > 0) {
    const cantidad = parseInt(prompt(
        "¿Cuántas unidades de " + nombreProducto + " querés comprar?"
    ));

    if (cantidad > 0) {
        const total = precio * cantidad;

        alert(
            "¡Gracias por tu compra, " + nombre + "!\n\n" +
            "Producto: " + nombreProducto + "\n" +
            "Precio unitario: $" + precio + "\n" +
            "Cantidad: " + cantidad + "\n" +
            "Total: $" + total
        );
    } else {
        alert("Ingresaste una cantidad inválida.");
    }
    
} else {
    alert("No seleccionaste un producto válido.");
}
