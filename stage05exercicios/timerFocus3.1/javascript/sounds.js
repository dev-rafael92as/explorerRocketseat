export default function() {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const coffeshopSounds = new Audio('Cafeteria.wav')
    const rainSounds = new Audio('Chuva.wav')
    const forestSounds = new Audio('Floresta.wav')
    const fireplaceSounds = new Audio('Lareira.wav')

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function soundCoffeshop() {
        coffeshopSounds.play()
    }

    function soundRain() {
        rainSounds.play()
    }

    function soundForest() {
        forestSounds.play()
    }

    function soundFireplace() {
        fireplaceSounds.play()
    }

    function stopSounds() {
        fireplaceSounds.pause()
        forestSounds.pause()
        rainSounds.pause()
        coffeshopSounds.pause()
    }

    return {
        pressButton,
        timeEnd,
        soundFireplace,
        soundCoffeshop,
        soundForest,
        soundRain,
        stopSounds,
        forestSounds,
        coffeshopSounds,
        rainSounds,
        fireplaceSounds
    }

}