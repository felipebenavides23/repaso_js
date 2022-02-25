const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if (nombre === '' || password === '') {
        console.log("todos los campos son obligatorios")
    } else {
        console.log('todo bien, enviendo...')
    }

    console.log('enviaste formulario')
})