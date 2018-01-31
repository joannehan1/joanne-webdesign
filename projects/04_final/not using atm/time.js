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
var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
    if (document.body) {
        document.body.background = "http://itsnotch.com/tumblr/images/daytime_bg.jpg";
    }
}
else {
    if (document.body) {
        document.body.background = "http://itsnotch.com/tumblr/images/nighttime_bg.jpg";
    }
}
*/

var t = new Date().getHours();

var morning = document.getElementById("morning");
var midday = document.getElementById("midday");
var night = document.getElementById("night");

if (t < 10) {
    document.write("up early enough to get breakfast? good for you!");
    morning.style.display = "block";
    midday.style.display = "none";
    night.style.display = "none";
} else if (t < 20) {
    document.write("it's a good time for a snack!");
    morning.style.display = "none";
    midday.style.display = "block";
    night.style.display = "none";
} else {
    document.write("do you know what time it is?");
    morning.style.display = "none";
    midday.style.display = "none";
    night.style.display = "block";
}

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