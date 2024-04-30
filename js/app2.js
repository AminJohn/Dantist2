const allDomains = ["google","yandex","mail", "gmail"]
const eyeShow = document.querySelector('.eye_show')
const eyeHide = document.querySelector('.eye_hide')

function validation(form) {
// Убераем ошибку
    function removeError(input) {
        const parent = input.parentNode

        if(parent.classList.contains('error')){
            parent.querySelector('.error_label').remove()
            parent.classList.remove('error')
        }
    }
// Сооздаём ошибку
    function createError(input, text) {
        const parent = input.parentNode
        const errorLabel = document.createElement('label')
        errorLabel.classList.add('error_label')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }



    let result = true

    const allInputs = document.querySelectorAll('input')
// Проверяем поля
    for(const input of allInputs){

        removeError(input)
        if(input.dataset.email){
           if(!input.value.includes('@')) {
                createError(input,"Вы ввели не правильно" )
                result = false
            }else {
                const domain = input.value.split('@')[1].split('.')[0] //yandex,google
                // console.log(domain)
                if(!allDomains.includes(domain)) {
                    createError(input,"Недопустимый домен почты")
                    result = false
                }
            }
        }

        if(input.dataset.minLength){
           
            if(input.value.length <= input.dataset.minLength){
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }
        if(input.dataset.maxLength){
           
            if(input.value.length > input.dataset.maxLength){
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }
        if(input.dataset.required == "true"){
            if(input.value == ""){
                removeError(input)
                createError(input, 'Поле не заполнено')
                result = false
            }
        }
        if (input.dataset.password) {
            const allline = document.querySelectorAll('.line')
            for (const line of allline) {
                if (line.dataset.countLength) {
                    if (input.value.length <= line.dataset.countLength) {
                        line.classList.add('passValid')
                        line.classList.remove('rightPass')
                    }
                    else{
                        line.classList.add('rightPass')
                       
                    }
                }
                if (line.dataset.uppercase) {
                    const uppercase = new RegExp('(?=.*[A-Z])')
                    if (uppercase.test(input.value)){
                        line.classList.add('rightPass')
                        
                    }
                    else{
                        line.classList.remove('rightPass')
                        line.classList.add('passValid')
                       
                    }
                }
                if (line.dataset.number) {
                    const numbers = new RegExp('(?=.*[0-9])')
                    if (numbers.test(input.value)) {
                        line.classList.add('rightPass')
                       
                    }
                    else{
                        line.classList.add('passValid')
                        line.classList.remove('rightPass')
                    }
                }
                if (line.dataset.symbol) {
                    const symbols = new RegExp('(?=.*[!@\$%\^&\*])')
                    if (symbols.test(input.value)) {
                        line.classList.add('rightPass')
                
                    }
                    else{
                        line.classList.add('passValid')
                        line.classList.remove('rightPass')
                    }
                }
            }
        }
    }

    return result
    
}
// Кнопка показывать и скрывать пароль старт
var passwordEl = document.querySelector('.passwordEl')
btn = document.querySelector('.password_eye')

btn.onclick = function(){
    
    if(passwordEl.getAttribute('type') === 'password'){
        
        passwordEl.setAttribute('type','text')
        eyeShow.style.display = 'block'
        eyeHide.style.display = 'none'
    }else{
        passwordEl.setAttribute('type','password')
        eyeShow.style.display = 'none'
        eyeHide.style.display = 'block'
    }
}
// Кнопка показывать и скрывать пароль конец

const passValidation = document.querySelector('.validation')



document.getElementById('add_form').addEventListener('submit', function (event) {
    
    event.preventDefault()
    if(validation(this) ==true){
        alert("Форма успешно отправлено")
    }
})