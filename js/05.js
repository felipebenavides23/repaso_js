const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto)  no deja modificar, agregar ni eliminar valores del objeto 
// Object.seal(producto) solo deja modificar pero no agregar ni liminar valores del objeto  
// modificar 
producto.nombre = "pc gamer"
// agregar
producto.imagen = "imagen.jpg"
// eliminar 
delete producto.precio

console.log(producto)
