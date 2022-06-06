// let play = document.querySelector('.startCountdown')
// play.classList.add('hide')

// document.querySelector('.pauseCountdown').classList.remove('hide')

let buttonPlay = document.querySelector('.startCountdown')
let buttonPause = document.querySelector('.pauseCountdown')
let buttonStoping = document.querySelector('.stopCountdown')
let buttonSetting = document.querySelector('.settingCountdown')
let buttonStopMusic = document.querySelector('.stopMusic')
let buttonStartMusic = document.querySelector('.startMusic')
let minutes 
let minutesDisplay = document.querySelector('.minuts')
let secondsDisplay = document.querySelector('.seconds')

function countdown() {
    setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)

        if( seconds <= 0) {
            seconds = 60
        }

        secondsDisplay.textContent = seconds - 1

        countdown()
    }, 1000);
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSetting.classList.add('hide')
    buttonStoping.classList.remove('hide')

    countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStoping.addEventListener('click', function() {
    buttonStoping.classList.add('hide')
    buttonSetting.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStopMusic.addEventListener('click', function() {
    buttonStopMusic.classList.add('hide')
    buttonStartMusic.classList.remove('hide')
})

buttonStartMusic.addEventListener('click', function() {
    buttonStartMusic.classList.add('hide')
    buttonStopMusic.classList.remove('hide')
})

buttonSetting.addEventListener('click', function() {
        minutes = Number(prompt('Quantos minutos? (Escolha de 1 a 60)'))

        if (minutes > 60) {
            alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        } else if (minutes <= 0) {
            alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        } else if (minutes === null) {
            alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        } else if (minutes === NaN) {
            alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        } else {
            minutesDisplay.textContent = minutes
        }
})