const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "felipe",
    premium: true
}


// const nuevoObjeto= Object.assign(producto,cliente)  no 

const nuevoObjeto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}

console.log(nuevoObjeto2)
console.log(producto)
console.log(cliente)