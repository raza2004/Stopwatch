var min = 0;
var sec = 0;
var millisec = 0;
var interval;
var minH = document.getElementById("min");
var secH = document.getElementById("sec");
var millisecH = document.getElementById("millisec");
function watch() {
    millisec++;
    millisecH.innerHTML = millisec;
    if (millisec >= 100) {
        sec++;
        secH.innerHTML = sec;
        millisec = 0;
    }
    else if (sec >= 60) {
        min++;
        minH.innerHTML = min;
        sec = 0;
    }
}
function Start() {
    interval = setInterval(watch, 10);
}
function Stop() {
    clearInterval(interval);
}
function Reset() {
    min = 0;
    sec = 0;
    millisec = 0;
    minH.innerHTML = min;
    secH.innerHTML = sec;
    millisecH.innerHTML = millisec;
    Stop();
}
