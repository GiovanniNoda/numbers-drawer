const drawerForm = document.getElementById('drawer-form')
const resetForm = document.getElementById('reset-form')
const amountNumbers = document.getElementById('amount-numbers')
const firstNumber = document.getElementById('first-number')
const lastNumber = document.getElementById('last-number')
const repeatNumberCheckbox = document.getElementById('repeat-number-checkbox')
const drawerAside = document.querySelector('.drawer-aside')
const resultAside = document.querySelector('.result-aside')
const numberResultDiv = document.querySelector('.number-result')

drawerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    drawerAside.style.display = 'none'
    resultAside.style.display = 'flex'

    const min = parseInt(firstNumber.value) 
    const max = parseInt(lastNumber.value)
    const totalNumbersDrawer = parseInt(amountNumbers.value)

    const numbers = []

    for (let i = 0; i < totalNumbersDrawer; i++) {
        let numberChoice
    
        if(repeatNumberCheckbox.checked) {
            do {
                numberChoice = drawerNumber(min, max)
            } while (numbers.includes(numberChoice))
        
            numbers.push(numberChoice)
        } else {
            numberChoice = drawerNumber(min, max)
            numbers.push(numberChoice)
        }
        

        const strong = document.createElement('strong')
        strong.textContent = numberChoice
        numberResultDiv.appendChild(strong)
    }
})

function drawerNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


resetForm.addEventListener('submit', function(event) {
    event.preventDefault()

    amountNumbers.value = ''
    firstNumber.value = ''
    lastNumber.value = ''

    drawerAside.style.display = 'flex'
    resultAside.style.display = 'none'

    numberResultDiv.innerHTML = ''
})

