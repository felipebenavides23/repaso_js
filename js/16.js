const Tecnologias = ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT"]


const nuevoArray = Tecnologias.map(tech => {
    if (tech === "CSS") {
        return "graphql"
    } else {
        return tech
    }
})

const nuevoArray2 = Tecnologias.filter(tech => tech != "CSS")

console.log(nuevoArray)
console.log(nuevoArray2)
