
//Set Timer Interval
let SetTimerInterval = setInterval(myTimer, 1000);

//Stop The Timer Function
function StopTimer() {
    clearInterval(SetTimerInterval);
}

//Timer Function
function myTimer() {
    let Min = document.getElementById('Minute').innerText;
    let Sec = document.getElementById('Second').innerText;
    if (parseInt(Sec) === 59) {
        let newMinute = parseInt(Min) + 1;
        if (newMinute < 10) {
            newMinute = "0" + newMinute;
            document.getElementById('Minute').innerHTML = newMinute;
            document.getElementById('Second').innerHTML = "00";
        }
    }
    else {
        let newSecond = (parseInt(Sec) + 1).toString();
        if (newSecond < 10)
            newSecond = "0" + newSecond;
        document.getElementById('Second').innerHTML = newSecond;

    }
}

