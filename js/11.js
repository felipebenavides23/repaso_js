
// iteradores 

const Tecnologias = ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT"]


// iteracion con ForEach - accee a cada elemento del array 

Tecnologias.forEach(function (tech) {
    console.log(tech)
})


//  iteracion con map - crea un nuevo array 

const nuevoArray = Tecnologias.map(function (tech) {
    return tech
})

console.log(nuevoArray)