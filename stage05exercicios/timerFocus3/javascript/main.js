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
        controls.resetColorsActiveCardsLightMode()
        volumeCoffeshop.classList.remove('volumeLight')
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
        controls.resetColorsActiveCardsLightMode()
        volumeFireplace.classList.remove('volumeLight')
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
        controls.resetColorsActiveCardsLightMode()
        volumeForest.classList.remove('volumeLight')
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
        controls.resetColorsActiveCardsLightMode()
        volumeRain.classList.remove('volumeLight')
    } else {
        buttonCardRain.classList.add('card-active')
    }
    sound.soundRain()
})

buttonDarkMode.addEventListener('click', function() {
    sound.pressButton()
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')
    settingBgMode.classList.remove('dark-mode')
    settingBgMode.classList.add('light-mode')

    document.querySelector('.container-display').classList.remove('dark-font')

    controls.addButtonCardLight()
    controls.addStyleButtonTimerLight()
    controls.resetColorsActiveCardsLightMode()
    

    switch (buttonCardForest.classList.contains('card-active')) {
        case true:
            buttonCardForest.classList.remove('card-active')
            buttonCardForest.classList.add('card-active-light')
            volumeForest.classList.remove('volumeLight')
            break;
        default:
            break;
    }

    switch (buttonCardFireplace.classList.contains('card-active')) {
        case true:
            buttonCardFireplace.classList.remove('card-active')
            buttonCardFireplace.classList.add('card-active-light')
            volumeFireplace.classList.remove('volumeLight')
            break;
        default:
            break;
    }

    switch (buttonCardCoffeshop.classList.contains('card-active')) {
        case true:
            buttonCardCoffeshop.classList.remove('card-active')
            buttonCardCoffeshop.classList.add('card-active-light')
            volumeCoffeshop.classList.remove('volumeLight')
            break;
        default:
            break;
    }

    switch (buttonCardRain.classList.contains('card-active')) {
        case true:
            buttonCardRain.classList.remove('card-active')
            buttonCardRain.classList.add('card-active-light')
            volumeRain.classList.remove('volumeLight')
            break;
        default:
            break;
    }
})

buttonLightMode.addEventListener('click', function() {
    sound.pressButton()
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    settingBgMode.classList.remove('light-mode')
    settingBgMode.classList.add('dark-mode')

    document.querySelector('.container-display').classList.add('dark-font')

    controls.removeButtonCardLight()
    controls.addButtonCard()
    controls.removeStyleButtonTimerLight()
    controls.removeStyleVolumeLight()
    

    switch (buttonCardForest.classList.contains('card-active-light')) {
        case true:
            buttonCardForest.classList.remove('card-active-light')
            buttonCardForest.classList.add('card-active')
            break;
        default:
            break;
    }

    switch (buttonCardRain.classList.contains('card-active-light')) {
        case true:
            buttonCardRain.classList.remove('card-active-light')
            buttonCardRain.classList.add('card-active')
            break;
        default:
            break;
    }

    switch (buttonCardCoffeshop.classList.contains('card-active-light')) {
        case true:
            buttonCardCoffeshop.classList.remove('card-active-light')
            buttonCardCoffeshop.classList.add('card-active')
            break;
        default:
            break;
    }

    switch (buttonCardFireplace.classList.contains('card-active-light')) {
        case true:
            buttonCardFireplace.classList.remove('card-active-light')
            buttonCardFireplace.classList.add('card-active')
            break;
        default:
            break;
    }
})

volumeForest.addEventListener('click', function() {
    let valueVolume = volumeForest.value / 100
    sound.forestSounds.volume = valueVolume
})

volumeRain.addEventListener('click', function() {
    let valueVolume = volumeRain.value / 100
    sound.rainSounds.volume = valueVolume
})

volumeCoffeshop.addEventListener('click', function() {
    let valueVolume = volumeCoffeshop.value / 100
    sound.coffeshopSounds.volume = valueVolume
})

volumeFireplace.addEventListener('click', function() {
    let valueVolume = volumeFireplace.value / 100
    sound.fireplaceSounds.volume = valueVolume
})