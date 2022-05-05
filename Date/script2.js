let now = new Date('2022-05-05')
let myBirthday = new Date('1999-04-11')

console.log(now.getTime() - myBirthday.getTime() + ' days have passed since the date of my birth')

function daysLeft(date) {
    let current = new Date(date.getTime())
    let previous = new Date(date.getFullYear(), 0, 1)

    if (previous.getFullYear() < 1970) {
        return false
    }

    return Math.floor((current - previous)) 
}

console.log(daysLeft(new Date(1999, 04, 11)))