
const h1 = document.querySelector('h1')

let i = 0;
const sentence = 'prout'

const myInterval = setInterval(() => {
    console.log('interval appelée')
    h1.innerHTML += sentence.charAt(i)
    i++

    if(i > sentence.length - 1)
        clearInterval(myInterval)
}, 1000)