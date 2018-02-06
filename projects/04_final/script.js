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

if (t < 5) {
	document.getElementById("demo").innerHTML = "do you know what time it is?";
    morning.style.display = "none";
    midday.style.display = "none";
    night.style.display = "block";
} else if (t < 11) {
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
    $( ".bmuffin6" ).draggable();
    $( ".bmuffin7" ).draggable();
    $( ".muffin" ).draggable();
    $( ".pbj" ).draggable();
    $( ".pizza" ).draggable();
    $( ".banana" ).draggable();

    // make everything off/closed at first
    $( "#microwave" ).hide();
    $( "#freezer" ).hide();
    $( "#fridge" ).hide();

    //open/activate with a click
    $( ".microwave" ).click(function() {
        $(this).hide();
        $("#microwave").show();
    });
    $( ".freezer" ).click(function() {
        $(this).hide();
        $("#freezer").show();
    });
    $( ".fridge" ).click(function() {
        $(this).hide();
        $("#fridge").show();
    });

    //close/turn off with a click
    $( "#microwave" ).click(function() {
        $(this).hide();
        $(".microwave").show();
    });
    $( "#freezer" ).click(function() {
        $(this).hide();
        $(".freezer").show();
    });
    $( "#fridge" ).click(function() {
        $(this).hide();
        $(".fridge").show();
    });

    $( "#freezer" ).hide();
    $( "#fridge" ).hide();
    $(".description1").hide(); //banana muffin
    $(".description2").hide(); //pbj
    $(".description3").hide(); // muffin part 2
    $(".description4").hide(); // pizza 
    $(".description5").hide(); // banana 
    $(".explanation").hide(); // i ate it
    $(".no1").hide(); // muffin no
    $(".no2").hide(); // banana no

    /* nom nom */
    $( ".bmuffin1" ).dblclick(function() {
        $(".description1").hide();
        $(this).fadeOut('fast');
        $(".explanation").show();
        });
    $( ".bmuffin2" ).dblclick(function() {
        $(".description1").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".bmuffin3" ).dblclick(function() {
        $(".description1").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".bmuffin4" ).dblclick(function() {
        $(".description1").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".bmuffin5" ).dblclick(function() {
        $(".description1").hide();
        $(this).fadeOut('fast');
        $(".explanation").show();
        });
    $( ".bmuffin6" ).dblclick(function() {
        $(".description1").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".bmuffin7" ).dblclick(function() {
        $(".description1").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".muffin" ).dblclick(function() {
        $(".description3").hide();
        $(".no1").show();
        });
    $( ".pbj" ).dblclick(function() {
        $(".description2").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".pizza" ).dblclick(function() {
        $(".description4").hide();
        $(".explanation").show();
        $(this).fadeOut('fast');
        });
    $( ".banana" ).dblclick(function() {
        $(".description5").hide();
        $(".no2").show();
        });

    /* description? */
    $( ".bmuffin4" ).hover(function() {
        $(".description1").show();
        $('.description1').delay(5000).fadeOut(400);
        $(".explanation").hide();
        });
    $( ".pbj" ).hover(function() {
        $(".description2").show();
        $('.description2').delay(5000).fadeOut(400);
        $(".description3").hide();
        $(".explanation").hide();
        });
    $( ".muffin" ).hover(function() {
        $(".description3").show();
        $('.description3').delay(5000).fadeOut(400);
        $(".description2").hide();
        $(".no1").hide();
        });
    $( ".pizza" ).hover(function() {
        $(".description4").show();
        $('.description4').delay(5000).fadeOut(400);
        $(".description5").hide();
        $(".explanation").hide();
        });
    $( ".banana" ).hover(function() {
        $(".description5").show();
        $('.description5').delay(5000).fadeOut(400);
        $(".description4").hide();
        $(".no2").hide();
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
