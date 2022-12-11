"use strict";
let min = 0;
let sec = 0;
let millisec = 0;
var interval;
let minH = document.getElementById("min");
let secH = document.getElementById("sec");
let millisecH = document.getElementById("millisec");
function watch() {
    millisec++;
    millisecH.innerHTML = millisec;
    if (millisec >= 100) {
        sec++;
        secH.innerHTML = sec;
        millisec = 0;
    }
    else if (sec >= 10) {
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
