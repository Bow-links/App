export default replaceImgTagsBySvg

let svg
async function replaceImgTagsBySvg() {
    for (const el of document.querySelectorAll('img')) {
        if (el.src.includes('.svg')) {
            svg = await fetch(el.src).then(resp => resp.text())
            el.outerHTML = svg
        }
    }
}
