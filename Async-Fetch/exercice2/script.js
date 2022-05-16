const myForm = document.querySelector('form')




const getName = async () => {

    const formData = new FormData(this);
    const reponse = await fetch('https://api.agify.io?name=${formData}')
    const data = await reponse.json()

    const div = document.createElement('div')
    div.textContent = formData
    
    document.body.appendChild(div)

    console.log(data)
}


myForm.addEventListener('submit', getName)