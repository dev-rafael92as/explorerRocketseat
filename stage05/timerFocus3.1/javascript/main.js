import Controls from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sounds.js"

let buttonPlay = document.querySelector('.btnPlay')
let buttonStop = document.querySelector('.btnStop')
let buttonPlus = document.querySelector('.btnPlus')
let buttonSub = document.querySelector('.btnSub')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let buttonCardForest = document.querySelector('.btnForest')
let buttonCardRain = document.querySelector('.btnRain')
let buttonCardCoffeshop = document.querySelector('.btnCoffeShop')
let buttonCardFireplace = document.querySelector('.btnFireplace')

let buttonDarkMode = document.querySelector('.dark-mode-button')
let buttonLightMode = document.querySelector('.light-mode-button')
let settingBgMode = document.querySelector('.bg-mode')

let volumeForest = document.querySelector('.volForest')
let volumeRain = document.querySelector('.volRain')
let volumeCoffeshop = document.querySelector('.volCoffeshop')
let volumeFireplace = document.querySelector('.volFireplace')

const sound = Sounds()

const controls = Controls({
    buttonCardCoffeshop,
    buttonCardForest,
    buttonCardFireplace,
    buttonCardRain,

    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonSub,

    volumeForest,
    volumeRain,
    volumeCoffeshop,
    volumeFireplace
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

buttonStop.addEventListener('click', function() {
    timer.reset()
    sound.pressButton()
})

buttonPlus.addEventListener("click", function() {
    sound.pressButton()
    timer.plusTimer()
})

buttonSub.addEventListener("click", function() {
    sound.pressButton()
    timer.subTimer()
})

buttonCardCoffeshop.addEventListener('click', function() {
    sound.pressButton()
    sound.stopSounds()
    controls.removeActive()
    if (buttonCardCoffeshop.classList.contains('buttonStoreLight')) {
        buttonCardCoffeshop.classList.add('card-active-light')
    } else {
        buttonCardCoffeshop.classList.add('card-active')
    }
    sound.soundCoffeshop()
})

buttonCardFireplace.addEventListener('click', function() {
    sound.pressButton()
    sound.stopSounds()
    controls.removeActive()
    if (buttonCardFireplace.classList.contains('buttonFireLight')) {
        buttonCardFireplace.classList.add('card-active-light')
    } else {
        buttonCardFireplace.classList.add('card-active')
    }
    sound.soundFireplace()
})

buttonCardForest.addEventListener('click', function() {
    sound.pressButton()
    sound.stopSounds()
    controls.removeActive()
    if (buttonCardForest.classList.contains('buttonThreeLight')) {
        buttonCardForest.classList.add('card-active-light')
    } else {
        buttonCardForest.classList.add('card-active')
    }
    sound.soundForest()
})

buttonCardRain.addEventListener('click', function() {
    sound.pressButton()
    sound.stopSounds()
    controls.removeActive()
    if (buttonCardRain.classList.contains('buttonCloudLight')) {
        buttonCardRain.classList.add('card-active-light')
    } else {
        buttonCardRain.classList.add('card-active')
    }
    sound.soundRain()
})