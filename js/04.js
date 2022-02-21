const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// desrtucturing 

const { nombre, precio, disponible } = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

// objet literal enhacement

const autenticado = true
const usuario = " felipe"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)