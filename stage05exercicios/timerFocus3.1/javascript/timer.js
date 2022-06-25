import Sounds from "./sounds.js"

export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateTimerDisplay(newMinutes, seconds) {
        
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function reset() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateTimerDisplay(minutes, 0)
            
            if (isFinished) {
                resetControls()
                updateTimerDisplay()
                Sounds().timeEnd()
                return
            }

            if( seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateTimerDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000);
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    function plusTimer() {
        let sum = Number(minutesDisplay.textContent) + 5

        if(sum > 60) {
            sum = 60
        } else {
            let newSum = sum.toString().padStart(2, '0')
            minutesDisplay.textContent = newSum
            minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        }
    }

    function subTimer() {
        let sub = Number(minutesDisplay.textContent) - 5

        if(sub < 0) {
            sub = 0
        } else {
        let newSub = sub.toString().padStart(2, '0')
        minutesDisplay.textContent = newSub
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        }
    }

    return {
        countdown,
        reset,
        updateTimerDisplay,
        updateMinutes,
        hold,
        plusTimer,
        subTimer
    }
}
