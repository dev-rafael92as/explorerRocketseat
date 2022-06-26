
let minutesDisplay = document.querySelector('.minutes').textContent
let secondsDisplay = document.querySelector('.seconds').textContent
let buttonPlay = document.querySelector('.button-play')
let buttonStop = document.querySelector('.button-stop')
let buttonPlus = document.querySelector('.button-plus')
let buttonSub = document.querySelector('.button-sub')

let buttonThree = document.querySelector('.three')
let buttonCloud = document.querySelector('.cloud')
let buttonShop = document.querySelector('.shop')
let buttonFire = document.querySelector('.fire')

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }

buttonPlus.addEventListener("click", function() {
        let sum = Number(minutesDisplay) + 5

        if(sum > 60) {
            sum = 60
        } else {
        document.querySelector('.minutes').textContent = sum
        minutesDisplay = sum
    }
})

buttonSub.addEventListener("click", function() {
    let sum = Number(minutesDisplay) - 5

        if(sum < 0) {
            sum = 00
        } else {
        document.querySelector('.minutes').textContent = sum
        minutesDisplay = sum
    }
})


buttonPlay.addEventListener("click", function() {
    setInterval(
        function() {
            let newSecond = secondsDisplay - 1
            if (Number(secondsDisplay) === 00) {
                document.querySelector('.seconds').textContent = 3 //59
                secondsDisplay = 3 //59
            } else if (newSecond == 0) {
                if(minutesDisplay == 0) {
                    clearInterval(secondsDisplay)
                    document.querySelector('.seconds').textContent = 00
                } else {
                    let newMinute = minutesDisplay - 1
                    document.querySelector('.minutes').textContent = newMinute
                    minutesDisplay = newMinute
                    document.querySelector('.seconds').textContent = 3 //59
                    secondsDisplay = 3
                }
                
            } else {
                document.querySelector('.seconds').textContent = newSecond
                secondsDisplay = newSecond
            }
        },1000)
})
