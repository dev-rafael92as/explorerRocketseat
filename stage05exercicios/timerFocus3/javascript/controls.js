export default function Controls({
    buttonCardCoffeshop,
    buttonCardFireplace,
    buttonCardForest,
    buttonCardRain,
    buttonPlay,
    // buttonSetting,
    buttonStoping
}) {

    function removeActive() {
        buttonCardCoffeshop.classList.remove('card-active')
        buttonCardFireplace.classList.remove('card-active')
        buttonCardForest.classList.remove('card-active')
        buttonCardRain.classList.remove('card-active')
    }
    // function play() {
    //     buttonPlay.classList.add('hide')
    //     buttonPause.classList.remove('hide')
    //     buttonSetting.classList.add('hide')
    //     buttonStoping.classList.remove('hide')
    // }

    // function pause() {
    //     buttonPause.classList.add('hide')
    //     buttonPlay.classList.remove('hide')
    // }

    function reset() {
    //     buttonPlay.classList.remove('hide')
    //     buttonPause.classList.add('hide')
    //     buttonSetting.classList.remove('hide')
    //     buttonStoping.classList.add('hide')
    }

    // function getMinutes() {
    //     let newMinutes = prompt('Quantos minutos? (Escolha de 1 a 60)')
    //     if(!newMinutes) {
    //         return false
    //     }
    //          return newMinutes
    // }
    return {
        reset,
        removeActive,
        // pause,
        // getMinutes
    }
}