$(document).ready(function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =
    h + ":" + m 
    var t = setTimeout(startTime, 500);
});

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

/*
function timedText() {
    setTimeout(myTimeout1, 2000) 
    setTimeout(myTimeout2, 4000) 
    setTimeout(myTimeout3, 6000) 
}
function myTimeout1() {
    document.getElementById("demo").innerHTML = "2 seconds";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "4 seconds";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "6 seconds";
}*/