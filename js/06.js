const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "felipe",
    premium: true
}


const { nombre } = producto
const { nombre: nombreCliente } = cliente

console.log(nombre)
console.log(nombreCliente)