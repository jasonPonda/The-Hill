const button = document.querySelector('button')
const name = document.getElementById('text')


const getName = async () => {
    const reponse = await fetch('https://api.agify.io?name=jason')
    const data = await reponse.json()
    console.log(data)
}


getName()