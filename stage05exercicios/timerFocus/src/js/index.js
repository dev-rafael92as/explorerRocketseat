import resetControls from "./controls.js"
import { Timer } from "./timer.js"

let buttonPlay = document.querySelector('.startCountdown')
let buttonPause = document.querySelector('.pauseCountdown')
let buttonStoping = document.querySelector('.stopCountdown')
let buttonSetting = document.querySelector('.settingCountdown')
let buttonStopMusic = document.querySelector('.stopMusic')
let buttonStartMusic = document.querySelector('.startMusic')
let minutesDisplay = document.querySelector('.minuts')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
})

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSetting.classList.add('hide')
    buttonStoping.classList.remove('hide')

    timer.countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
})

buttonStoping.addEventListener('click', function() {
    resetControls()
    timer.resetTimer()
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
        let newMinutes = Number(prompt('Quantos minutos? (Escolha de 1 a 60)'))
        if(!newMinutes) {
            timer.resetTimer()
            return
        }
        // if (newMinutes > 60) {
        //     alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        // } else if (newMinutes <= 0) {
        //     alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        // } else if (newMinutes === null) {
        //     alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        // } else if (isNaN(newMinutes)) {
        //     alert("Por favor escolha um número válido de 1 a 60 minutos")
            
        // } else {
             minutes = newMinutes
             updateTimerDisplay(minutes, 0)
        // }
})