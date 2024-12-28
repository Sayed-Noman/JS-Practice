// Document Object
console.dir(document)
console.log(document.children)
console.log(document.children[0])
console.log(document.children[0].children[0])
console.log(document.children[0].children[1])
console.log(document.body)
console.dir(document.body)
console.log(document.body.children)
console.log(document.body.children[0])
console.log(document.body.children[1])
console.log(document.body.children[2])

document.body.children[0].children[0].innerHTML = 'Inner html Added inside <i>Header</i> <i>h1</i>' 
console.log(document.body.children[1].children[0])
console.log(document.body.children[1].children[0].innerText)
document.body.children[1].children[0].innerText = "Innter text Added inside <p> </p>"
console.log(document.body.children[1].children[0].textContent)
console.log(document.body.children[1].children[1])
console.log(document.body.children[1].children[1].src)
document.body.children[1].children[1].src = 'http://127.0.0.1:5500/Basics/21_DOM/dummy_02.png'
console.log(document.body.children[2])
const footerParagraph = document.body.children[2].children[0]
footerParagraph.innerText = '2025 My Simple Page'















