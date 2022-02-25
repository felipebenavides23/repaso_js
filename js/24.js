
const heading = document.querySelector('.heading')

heading.addEventListener('click', () => {
    heading.textContent = "nuevo texto al dar click"
})



const enlaces = document.querySelectorAll('.navegacion a ')

enlaces.forEach(enlaces => {
    enlaces.addEventListener('click', () => {
        console.log('diste click en un enlace ')
    })
})