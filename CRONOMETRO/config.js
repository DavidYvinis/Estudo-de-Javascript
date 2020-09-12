//"use strict"

var hor = 0;
var min = 0;
var seg = 0;

var tempo = 1000;//milesimos de seg
var crono;

function start(){
    crono = setInterval(() => {timer();}, tempo);
}

function pause(){
    clearInterval(crono);
}

function stop(){
    clearInterval(crono);
    hor = 0;
    min = 0;
    seg = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer(){
    seg++;

    if(seg == 60){
        seg = 0;
        min++;

        if(min == 60){
            min = 0;
            hor++;
        }
    }

    var format = (hor < 10 ? '0' + hor : hor) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format;

}

