/* get time */
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  m = m < 10 ? '0'+ m : m ;
  document.getElementById('txt').innerHTML = h + ':' + m + ' ' + ampm;
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
	document.getElementById("demo").innerHTML = "up early enough to get breakfast? good for you!";
    morning.style.display = "block";
    midday.style.display = "none";
    night.style.display = "none";
} else if (t < 20) {
    document.getElementById("demo").innerHTML = "it's a good time for a snack!";
    morning.style.display = "none";
    midday.style.display = "block";
    night.style.display = "none";
} else {
    document.getElementById("demo").innerHTML = "do you know what time it is?";
    morning.style.display = "none";
    midday.style.display = "none";
    night.style.display = "block";
}

$(document).ready(function(){
    startTime();
    /* be able to drag food */
    $( "#morning" ).draggable();
    $( "#midday" ).draggable();
    $( "#night" ).draggable();
    
    $( ".bmuffin1" ).draggable();
    $( ".bmuffin2" ).draggable();
    $( ".bmuffin3" ).draggable();
    $( ".bmuffin4" ).draggable();
    $( ".bmuffin5" ).draggable();
    $( ".muffin" ).draggable();
    $( ".pbj" ).draggable();
    $( ".pizza" ).draggable();

    // make everything off/closed at first
    $( "#microwave" ).hide();
    $( "#freezer" ).hide();
    $( "#fridge" ).hide();

    $( ".muffin" ).dblclick(function() {
        $(this).fadeOut('fast');
        });
    $( ".pbj" ).dblclick(function() {
        $(this).fadeOut('fast');
        });
    $( ".pizza" ).dblclick(function() {
        $(this).fadeOut('fast');
        });

    /* be able to drop foods into appliances */
    $( ".microwave" ).droppable({
      drop: function() {
        console.log("heating");
		$('#microwave').show();
		$('.microwave').hide();
		$('#freezer').hide();
		$('.freezer').show();
		$('#fridge').hide();
		$('.fridge').show();
      }
    });

    $( ".freezer" ).droppable({
      drop: function() {
        console.log( "freezing" );
        $('#microwave').hide();
        $('.microwave').show();
        $('#freezer').show();
        $('.freezer').hide();
        $('#fridge').hide();
        $('.fridge').show();
      }
    });

    $( ".fridge" ).droppable({
      drop: function() {
        console.log( "chilling" );
        $( "#microwave" ).hide();
        $('.microwave').show();
        $('#freezer').hide();
        $('.freezer').show();
        $('#fridge').show();
        $('.fridge').hide();
      }
    });
});