import Controls from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sounds.js"

let buttonPlay = document.querySelector('.buttonPlay')
// let buttonPause = document.querySelector('.pauseCountdown')
let buttonStop = document.querySelector('.buttonStop')
// let buttonSetting = document.querySelector('.settingCountdown')
// let buttonStopMusic = document.querySelector('.stopMusic')
// let buttonStartMusic = document.querySelector('.startMusic')
let buttonPlus = document.querySelector('.buttonPlus')
let buttonSub = document.querySelector('.buttonSub')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let buttonCardForest = document.querySelector('.buttonThree')
let buttonCardRain = document.querySelector('.buttonCloud')
let buttonCardCoffeshop = document.querySelector('.buttonStore')
let buttonCardFireplace = document.querySelector('.buttonFire')

let buttonDarkMode = document.querySelector('.dark-mode-button')
let buttonLightMode = document.querySelector('.light-mode-button')
let settingBgMode = document.querySelector('.bg-mode')

const sound = Sounds()

const controls = Controls({
    buttonCardCoffeshop,
    buttonCardForest,
    buttonCardFireplace,
    buttonCardRain,
    buttonPlay,
    // buttonSetting,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

buttonPlay.addEventListener('click', function() {
    timer.countdown()
    sound.pressButton()
})

// buttonPause.addEventListener('click', function() {
//     controls.pause()
//     timer.hold()
//     sound.pressButton()
// })

buttonStop.addEventListener('click', function() {
    timer.reset()
    sound.pressButton()
})

buttonPlus.addEventListener("click", function() {
    let sum = Number(minutesDisplay.textContent) + 5

    if(sum > 60) {
        sum = 60
    } else {
    document.querySelector('.minutes').textContent = sum
    minutesDisplay.textContent = sum
}
})

buttonSub.addEventListener("click", function() {
    let sub = Number(minutesDisplay.textContent) - 5

    if(sub < 0) {
        sub = 0
    } else {
    document.querySelector('.minutes').textContent = sub
    minutesDisplay.textContent = sub
}
})

buttonCardCoffeshop.addEventListener('click', function() {
    sound.stopSounds()
    controls.removeActive()
    buttonCardCoffeshop.classList.add('card-active')
    sound.soundCoffeshop()
})

buttonCardFireplace.addEventListener('click', function() {
    sound.stopSounds()
    controls.removeActive()
    buttonCardFireplace.classList.add('card-active')
    sound.soundFireplace()
})

buttonCardForest.addEventListener('click', function() {
    sound.stopSounds()
    controls.removeActive()
    buttonCardForest.classList.add('card-active')
    sound.soundForest()
})

buttonCardRain.addEventListener('click', function() {
    sound.stopSounds()
    controls.removeActive()
    buttonCardRain.classList.add('card-active')
    sound.soundRain()
})

buttonDarkMode.addEventListener('click', function() {
    sound.pressButton()
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')
    settingBgMode.classList.remove('dark-mode')
    settingBgMode.classList.add('light-mode')
})

buttonLightMode.addEventListener('click', function() {
    sound.pressButton()
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    settingBgMode.classList.remove('light-mode')
    settingBgMode.classList.add('dark-mode')
})

// buttonStopMusic.addEventListener('click', function() {
//     buttonStopMusic.classList.add('hide')
//     buttonStartMusic.classList.remove('hide')
//     sound.bgAudio.pause()
// })

// buttonStartMusic.addEventListener('click', function() {
//     buttonStartMusic.classList.add('hide')
//     buttonStopMusic.classList.remove('hide')
//     sound.bgAudio.play()
// })

// buttonSetting.addEventListener('click', function() {
//     let newMinutes = controls.getMinutes()

//     if(!newMinutes) {
//         timer.reset()
//         return
//     }

//     timer.updateTimerDisplay(newMinutes, 0)
//     timer.updateMinutes(newMinutes)
// })