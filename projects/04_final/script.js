/* get time */


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =
    h + ":" + m 
    var t = setTimeout(startTime, 500);
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

/* change foods */

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

$(document).ready(function() {
	$('.fridge').mouseenter(function() {
		//$('.fridge').hide();
		$('#fridge').show();
		console.log('mouse detected')
	});
	$('.fridge').mouseleave(function() {
		//$('.fridge').show();
		$('#fridge').hide();
		console.log('mouse gone')
	})
});

$(document).ready(function() {
	$('.freezer').mouseenter(function() {
		//$('.fridge').hide();
		$('#freezer').show();
		console.log('mouse detected')
	});
	$('.freezer').mouseleave(function() {
		//$('.fridge').show();
		$('#freezer').hide();
		console.log('mouse gone')
	});
});

$(document).ready(function(){
    startTime();
    /* be able to drag food */
    $( "#morning" ).draggable();
    $( "#midday" ).draggable();
    $( "#night" ).draggable();
    $( "#microwave" ).hide();

    /* be able to drop foods into appliances */
    $( ".microwave" ).droppable({
      drop: function() {
        console.log("heating");
        $(this).hide();
		$('#microwave').show();
      }
    });

    $( ".freezer" ).droppable({
      drop: function() {
        console.log( "freezing" );
        $( "#microwave" ).hide();
        $('.microwave').show();
      }
    });

    $( ".fridge" ).droppable({
      drop: function() {
        console.log( "chilling" );
        $( "#microwave" ).hide();
        $('.microwave').show();
      }
    });
});


// popup window for each page end



