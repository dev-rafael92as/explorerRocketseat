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

buttonDarkMode.addEventListener('click', function() {
    sound.pressButton()
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')
    settingBgMode.classList.remove('dark-mode')
    settingBgMode.classList.add('light-mode')

    document.querySelector('.container-display').classList.remove('dark-font')

    buttonCardForest.classList.add('buttonThreeLight')
    buttonCardCoffeshop.classList.add('buttonStoreLight')
    buttonCardFireplace.classList.add('buttonFireLight')
    buttonCardRain.classList.add('buttonCloudLight')

    buttonPlay.classList.add('buttonPlayLight')
    buttonStop.classList.add('buttonStopLight')
    buttonPlus.classList.add('buttonPlusLight')
    buttonSub.classList.add('buttonSubLight')

    switch (buttonCardForest.classList.contains('card-active')) {
        case true:
            buttonCardForest.classList.remove('card-active')
            buttonCardForest.classList.add('card-active-light')
            break;
        default:
            break;
    }

    switch (buttonCardFireplace.classList.contains('card-active')) {
        case true:
            buttonCardFireplace.classList.remove('card-active')
            buttonCardFireplace.classList.add('card-active-light')
            break;
        default:
            break;
    }

    switch (buttonCardCoffeshop.classList.contains('card-active')) {
        case true:
            buttonCardCoffeshop.classList.remove('card-active')
            buttonCardCoffeshop.classList.add('card-active-light')
            break;
        default:
            break;
    }

    switch (buttonCardRain.classList.contains('card-active')) {
        case true:
            buttonCardRain.classList.remove('card-active')
            buttonCardRain.classList.add('card-active-light')
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

    buttonCardForest.classList.remove('buttonThreeLight')
    buttonCardCoffeshop.classList.remove('buttonStoreLight')
    buttonCardFireplace.classList.remove('buttonFireLight')
    buttonCardRain.classList.remove('buttonCloudLight')

    buttonPlay.classList.remove('buttonPlayLight')
    buttonStop.classList.remove('buttonStopLight')
    buttonPlus.classList.remove('buttonPlusLight')
    buttonSub.classList.remove('buttonSubLight')

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

let volumeForest = document.querySelector('.volForest')
let volumeRain = document.querySelector('.volRain')
let volumeCoffeshop = document.querySelector('.volCoffeshop')
let voluemFireplace = document.querySelector('.volFireplace')

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

voluemFireplace.addEventListener('click', function() {
    let valueVolume = voluemFireplace.value / 100
    sound.fireplaceSounds.volume = valueVolume
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