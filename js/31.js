

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

// const consumiApi = async () => {

//     const respuesta = await fetch(url)
//     const resultado = await respuesta.json()

//     console.log(resultado)

//     resultado.forEach((informacion) => {
//         console.log(informacion)
//     })

// }

// consumiApi()


const consumiApi2 = async () => {
    const [resultado, resultado2] = await Promise.all([fetch(url), fetch(url2)])

    const respuesta = await resultado.json()
    const respuesta2 = await resultado2.json()

    console.log(respuesta)
    console.log(respuesta2)
}

consumiApi2()