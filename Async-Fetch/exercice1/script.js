const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    fetch('becode.json')
        .then(Response => Response.json())
        .then(json => {
            const ul = document.createElement('ul')
            
            for (let index = 0; index < json.length; index++) {
                const li = document.createElement('li')
                li.textContent = json[index];

                ul.appendChild(li)
            }
            document.body.appendChild(button)
            document.body.appendChild(ul)
            

            console.log(e)
        })
        .catch(Error => {
            console.log('there was an error!', Error)
        })
})