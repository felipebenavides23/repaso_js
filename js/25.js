

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function (e) {
    console.log(e.target.value)
})


const inputPasswor = document.querySelector('#password')

inputPasswor.addEventListener('input', cambioType)

function cambioType(e) {
    inputPasswor.type = "text"

    setTimeout(() => {
        inputPasswor.type = "password"
    }, 200)

}