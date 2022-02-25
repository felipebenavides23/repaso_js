

const url = 'https://jsonplaceholder.typicode.com/comments'


const consumirApi = () => {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            resultado.forEach((comentario) => {
                console.log(comentario)
            });
        })

}

consumirApi()

