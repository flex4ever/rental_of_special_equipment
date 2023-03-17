// button
const sendButton = document.getElementById('modal');
const exminationCheckbox = document.getElementById('cont');
exminationCheckbox.addEventListener('click', () => {
    if (exminationCheckbox.checked) {
        sendButton.disabled = false
        sendButton.setAttribute('enabled', 'enabled')

    } else {
        sendButton.setAttribute('disabled', 'disabled')
    }
})

const emailInput = document.getElementById('email-input')
emailInput.addEventListener('focus', () => {
    emailInput.placeholder = 'example@examp.com'
})
emailInput.addEventListener('blur', () => {
    emailInput.placeholder = 'Email'
})
const numberInput = document.getElementById('number-input')
let num 
numberInput.addEventListener('focus', () => {
    numberInput.placeholder = '+7 (123) 45 67'
    numberInput.value = '+7 '
})
numberInput.addEventListener('blur', () => {
    numberInput.placeholder = 'Номер'
    num = numberInput.value
    console.log(num)
})