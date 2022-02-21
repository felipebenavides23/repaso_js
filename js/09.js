const Tecnologias = ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT"]

// añadir elementos 
//  Modifica el array original 
// Tecnologias.push('graphql') // no agrega al afinal del array
// Tecnologias.unshift("graphql")// no agrega al inicio del array 

// metodo para react sin que modifique el array original

// const nuevoArray = [...Tecnologias, 'node.js']
// const nuevoArray = ['node.js', ...Tecnologias]

// ELIMINAR DATOS DEL ARRAY

// Tecnologias.pop() elimina el ultimo valor del array ( altera el original )
// Tecnologias.shift() elimina el primer valor del array ( altera el original )
// Tecnologias.splice(2, 2) elimina el valor de un espacio determinado y una calidad de terminada ( altera el original )

// metodo sin modificar array para react 

// const nuevoArray = Tecnologias.filter(
//     function (tech) {
//         return tech != "CSS"
//     }
// )
//  MODIFICAR VALORES ENE EL ARRAY 
// 
// Tecnologias[0] = "GRAPHQL" MODIFICAR EL VALOR ( altera el original )

const nuevoArray = Tecnologias.map(function (tech) {
    if (tech === "CSS") {
        return "graphql"
    } else {
        return tech
    }
})

console.log(Tecnologias)
console.log(nuevoArray)