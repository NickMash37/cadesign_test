const objectsSvg = document.querySelectorAll('object')
const textInObject = document.querySelectorAll('.preferences__text')

objectsSvg.forEach((el, idx) => {
    el.addEventListener('mouseenter', (event) => {
        console.log(event[idx])
    })
})