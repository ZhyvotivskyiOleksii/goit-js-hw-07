const categories = document.querySelector("#categories")

const categoriesChildren = [...categories.children]
const categoriesAmount = categoriesChildren.length;

console.log(`Categories: ${categoriesAmount}`);

categoriesChildren.forEach(item => {
    const titleText = item.querySelector("h2").textContent
    const elements = item.querySelector("ul").children.length

    console.log(`Category: ${titleText}`)
    console.log(`Elements: ${elements}`)
})