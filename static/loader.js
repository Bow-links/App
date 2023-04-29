import replaceImgTagsBySvg from "/static/icons.js"

const wrapper = document.querySelector('.wrapper')
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
    replaceImgTagsBySvg().then(() => {
        loader.classList.add('disabled')
        wrapper.classList.remove('disabled')
    })
})
