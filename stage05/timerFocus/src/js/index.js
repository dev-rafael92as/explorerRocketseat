import Controls from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sounds.js"

let buttonPlay = document.querySelector('.startCountdown')
let buttonPause = document.querySelector('.pauseCountdown')
let buttonStoping = document.querySelector('.stopCountdown')
let buttonSetting = document.querySelector('.settingCountdown')
let buttonStopMusic = document.querySelector('.stopMusic')
let buttonStartMusic = document.querySelector('.startMusic')
let minutesDisplay = document.querySelector('.minuts')
let secondsDisplay = document.querySelector('.seconds')

const sound = Sounds()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSetting,
    buttonStoping
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset   
})

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStoping.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonStopMusic.addEventListener('click', function() {
    buttonStopMusic.classList.add('hide')
    buttonStartMusic.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonStartMusic.addEventListener('click', function() {
    buttonStartMusic.classList.add('hide')
    buttonStopMusic.classList.remove('hide')
    sound.bgAudio.play()
})

buttonSetting.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateTimerDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})