export default function Controls({
    buttonCardCoffeshop,
    buttonCardFireplace,
    buttonCardForest,
    buttonCardRain,
    
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonSub,
}) {

    function removeActive() {
        buttonCardCoffeshop.classList.remove('card-active')
        buttonCardFireplace.classList.remove('card-active')
        buttonCardForest.classList.remove('card-active')
        buttonCardRain.classList.remove('card-active')

        buttonCardCoffeshop.classList.remove('card-active-light')
        buttonCardFireplace.classList.remove('card-active-light')
        buttonCardForest.classList.remove('card-active-light')
        buttonCardRain.classList.remove('card-active-light')
    }

    function reset() {
    }

    function removeStyleButtonTimerLight () {
        buttonPlay.classList.remove('buttonPlayLight')
        buttonStop.classList.remove('buttonStopLight')
        buttonPlus.classList.remove('buttonPlusLight')
        buttonSub.classList.remove('buttonSubLight')
    }

    function addStyleButtonTimerLight () {
        buttonPlay.classList.add('buttonPlayLight')
        buttonStop.classList.add('buttonStopLight')
        buttonPlus.classList.add('buttonPlusLight')
        buttonSub.classList.add('buttonSubLight')
    }

    function addButtonCardLight() {
        buttonCardForest.classList.add('buttonThreeLight')
        buttonCardCoffeshop.classList.add('buttonStoreLight')
        buttonCardFireplace.classList.add('buttonFireLight')
        buttonCardRain.classList.add('buttonCloudLight')
    }

    function removeButtonCardLight() {
        buttonCardForest.classList.remove('buttonThreeLight')
        buttonCardCoffeshop.classList.remove('buttonStoreLight')
        buttonCardFireplace.classList.remove('buttonFireLight')
        buttonCardRain.classList.remove('buttonCloudLight')
    }

    function addButtonCard() {
        buttonCardForest.classList.add('buttonThree')
        buttonCardCoffeshop.classList.add('buttonStore')
        buttonCardFireplace.classList.add('buttonFire')
        buttonCardRain.classList.add('buttonCloud')
    }

    return {
        reset,
        removeActive,
        removeStyleButtonTimerLight,
        addStyleButtonTimerLight,
        addButtonCardLight,
        removeButtonCardLight,
        addButtonCard
    }
}