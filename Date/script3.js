const section = document.createElement('section')
document.body.appendChild(section)

const currentDate = new Date()
const time = 80000 * 1000 * 3600

const result = currentDate.getTime() - time

console.log(result)

const label = document.createElement('label')
label.setAttribute('for', 'number')
section.appendChild(label)

const input = document.createElement('input')
input.setAttribute('type', 'number')
input.setAttribute('id', 'dateN')
input.setAttribute('name', 'dateN')
input.setAttribute('min', '0')
const button = document.createElement('button')
button.setAttribute('type', 'button')
button.innerHTML = 'convert'
label.appendChild(input)

label.appendChild(button)



