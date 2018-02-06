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

if (t < 24) {
    document.getElementById("demo").innerHTML = "AKA the perfect time to learn something new!";
    midday.style.display = "block";
};

$(document).ready(function(){
    startTime();
    /* be able to drag food */
    $( ".hotdog" ).draggable();
    $( ".burger" ).draggable();

    // make everything off/closed at first
    $( ".intro" ).show();
    $( "#microwave" ).hide();
    $( "#freezer" ).hide();
    $( "#fridge" ).hide();
    $( ".mtext" ).hide();
    $( ".done" ).hide();
    $( ".fridgeinfo" ).hide();
    $( ".gone" ).hide();

    //open/activate with a click
    $( ".microwave" ).click(function() {
        $(this).hide();
        $("#microwave").show();
        $(".mtext").hide();
        $('#microwave').delay(2000).fadeOut('fast');
        $('.microwave').delay(2000).fadeIn('fast');
        $('.done').delay(2000).fadeIn('fast');
    });

    $( ".freezer" ).click(function() {
        $(this).hide();
        $("#freezer").show();
    });
    $( ".fridge" ).click(function() {
        $(this).hide();
        $("#fridge").show();
        $(".fridgeinfo").show();
        $( ".intro" ).hide();
        $( ".gone" ).hide();
    });

    //close/turn off with a click
    $( "#microwave" ).click(function() {
        $(this).hide();
        $(".microwave").show();
        $(".mtext").hide();
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

     /* nom nom */
    $( ".burger" ).dblclick(function() {
        $( ".intro" ).hide();
        $( ".fridgeinfo" ).hide();
        $(".mtext").hide();
        $(".done").hide();
        $(".gone").show();
        $(".skip").show();
        $(this).fadeOut('fast');
        });
    $( ".hotdog" ).dblclick(function() {
        $( ".intro" ).hide();
        $( ".fridgeinfo" ).hide();
        $(".mtext").hide();
        $(".done").hide();
        $(".gone").show();
        $(".skip").show();
        $(this).fadeOut('fast');
        });

    /* be able to drop foods into appliances */
    $( ".microwave" ).droppable({
      drop: function() {
        console.log("heating");
        $(".fridgeinfo").hide(); 
        $(".mtext").fadeIn("slow");
		$('#freezer').hide();
		$('.freezer').show();
		$('#fridge').hide();
		$('.fridge').show();
      }
    });

    $( ".freezer" ).droppable({
      drop: function() {
        console.log( "freezing" );
        $(".mtext").hide();
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
        $(".mtext").hide();
        $( "#microwave" ).hide();
        $('.microwave').show();
        $('#freezer').hide();
        $('.freezer').show();
        $('#fridge').show();
        $('.fridge').hide();
      }
    });
});
