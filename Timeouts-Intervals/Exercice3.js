const timeLeft = document.createElement('div')
timeLeft.id = "time-left"
timeLeft.innerText = '60'
document.body.appendChild(timeLeft)


/*Création du plateau de jeu*/
let plateau = []

const section = document.querySelector('section')
for (let i = 0; i < 12; i++) {
    let circle = document.createElement('div')
    circle.className = 'dot'

    section.appendChild(circle)
    plateau.push(circle)
}

const mole = document.querySelector('.mole')

const circle = document.querySelectorAll('.dot')

function randomCircle() {
    circle.forEach(dot => {
        dot.classList.remove('mole')
    })

    let randomPosition = circle[Math.floor(Math.random() * 12)]
    randomPosition.classList.add('mole')

    hitPosition = randomCircle.className
}


/*le score du jeu*/

let result = 0
let hitPosition
let currentTime = 60
let score = document.createElement('div')

score.innerText = "score : " + result
score.className = 'score'
section.appendChild(score)

circle.forEach(circle => {
    circle.addEventListener('click', () => {
        if (circle.className === hitPosition) {
            result++
            score.innerText = result
            
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomCircle, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0)
    clearInterval(countDownTimeId)
    //alert('GAME OVER YOUR FINAL SCORE IS ' + result)
}

let countDownTimeId = setInterval(countDown, 1000)

moveMole()
console.log(score)