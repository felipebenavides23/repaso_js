const heading = document.querySelector('.heading')
heading.textContent = 'nuevo texto'

const inputnombre = document.querySelector('#nombre')
inputnombre.value = ' un valor prederteminado '


const enlace = document.querySelectorAll('.navegacion a')

const a = 0
enlace.forEach(enlace => enlace.textContent = "nuevo enlace")