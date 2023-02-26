let svg

function replaceImgTagsBySvg() {
    document.querySelectorAll('img').forEach(async el => {
        if (el.src.includes('.svg')) {
            svg = await fetch(el.src).then(resp => resp.text())
            el.outerHTML = svg
        }
    })
}

window.onload = () => {
    setTimeout(replaceImgTagsBySvg, 0)
}