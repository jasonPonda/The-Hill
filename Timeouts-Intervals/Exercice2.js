const h1 = document.querySelector('h1')
let seconds = 00
let minute = seconds / 60
const div = document.querySelector('div')

function func() {
    h1.innerHTML = minute + " minutes " + seconds++ + " secondes"
    if (seconds % 60 === 0) {
        seconds = 0
        h1.innerHTML = minute + " minutes " + seconds++ + " secondes"
    }

    div.innerHTML = minute + " minutes se sont écoulés "
    if (seconds === 60) {
        div.innerHTML = minute++ + " minutes se sont écoulés"
    }
}

setInterval(func, 1000)