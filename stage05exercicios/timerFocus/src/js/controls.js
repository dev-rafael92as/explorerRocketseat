export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSetting,
    buttonStoping
}) {
    
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSetting.classList.add('hide')
        buttonStoping.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSetting.classList.remove('hide')
        buttonStoping.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos? (Escolha de 1 a 60)')
        if(!newMinutes) {
            return false
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
             return newMinutes
        // }
    }
    return {
        reset,
        play,
        pause,
        getMinutes
    }
}