const url = 'https://jsonplaceholder.typicode.com/comments'

const consumiApi = async () => {

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    console.log(resultado)

    resultado.forEach((informacion) => {
        console.log(informacion)
    })

}

consumiApi()