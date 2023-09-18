//Merubah tag title langsung dari js
document.title = "Belajar DOM"
console.log(document.title)

//Membuat tag baru di dalam html dari js
const body = document.body

// const h1 = document.createElement('h1')
// h1.innerHTML = "Belajar DOM"

// const h2 = document.createElement('h2')
// h2.innerText = "Dika Wicaksono"

// const h3 = document.createElement('h3')
// h3.textContent = "Javascript"

// body.append(h1)
// body.append(h2)
// body.append(h3)

//Data Selector
const addButton = document.getElementById('addButton')
addButton.style.background = "green"
addButton.style.color = "white"
addButton.style.padding = "16px"
addButton.style.border = "none"
console.log(addButton)

const removeButton = document.getElementById('removeButton')
removeButton.style.background = "red"
removeButton.style.color = "white"
removeButton.style.padding = "16px"
removeButton.style.border = "none"
console.log(removeButton)

// const btn2 = document.querySelector('.pencetSaya')
// console.log(btn2)

//Event Listener
const defaultText = 'Add'
addButton.textContent = defaultText

const defaultText2 = 'Style'
removeButton.textContent = defaultText2

function onClickAdd() {
  // addButton.style.background = "yellow"
  // addButton.style.color = "blue"
  const newText = document.createElement('h1')
  newText.classList.add('name')
  newText.textContent = 'Dika Wicaksono'
  body.append(newText)
  console.log(newText)
}

function onClickStyle() {
  const updateText = document.getElementsByClassName('name')
  for (i = 0; i < updateText.length; i++) {
    updateText[i].style.color = 'white'
    updateText[i].style.background = 'blue'
  }
  console.log(updateText)
}

function mouseEnter() {
  addButton.style.cursor = "pointer"
  removeButton.style.cursor = "pointer"
}