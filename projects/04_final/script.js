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
	document.getElementById("demo").innerHTML = "Do you know what time it is?";
    morning.style.display = "none";
    midday.style.display = "none";
    night.style.display = "block";
} else if (t < 11) {
    document.getElementById("demo").innerHTML = "Up early enough to get breakfast? good for you!";
    morning.style.display = "block";
    midday.style.display = "none";
    night.style.display = "none";
} else if (t < 20) {
    document.getElementById("demo").innerHTML = "It's a good time for a snack!";
    morning.style.display = "none";
    midday.style.display = "block";
    night.style.display = "none";
} else {
    document.getElementById("demo").innerHTML = "Do you know what time it is?";
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
    $(".done").hide();

    //open/activate with a click
    $( ".microwave" ).click(function() {
        $(this).hide();
        $("#microwave").show();
        $('#microwave').delay(2000).fadeOut('fast');
        $('.done').delay(2000).fadeIn('fast');
        $('.microwave').delay(2000).fadeIn('fast');
        $('.done').delay(4000).fadeOut('fast');
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
    $(".bmuffinf").hide();
    $(".bmuffind").hide(); //banana muffin
    $(".pbjd").hide(); //pbj
    $(".muffind").hide(); // muffin part 2
    $(".pizzad").hide(); // pizza 
    $(".bananad").hide(); // banana 
    $(".gone").hide(); // i ate it
    $(".muffinno").hide(); // muffin no
    $(".bananano").hide(); // banana no

    /* nom nom */
    $( ".bmuffin1" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin2" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin3" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin4" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin5" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin6" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".bmuffin7" ).dblclick(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });

    $( ".muffin" ).dblclick(function() {
        $(".muffind").hide();
        $(".muffinno").show();
        });
    $( ".pbj" ).dblclick(function() {
        $(".pbjd").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });

    $( ".pizza" ).dblclick(function() {
        $(".pizzad").hide();
        $(this).fadeOut('fast');
        $(".gone").show();
        });
    $( ".banana" ).dblclick(function() {
        $(".bananad").hide();
        $(".bananano").show();
        });

    /* description? */
    $( ".bmuffin7" ).hover(function() {
        $(".bmuffind").hide();
        $(".bmuffinf").show();
        $(".gone").hide();
        });
    $( ".bmuffin1" ).hover(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").show();
        $(".gone").hide();
        });
    $( ".pbj" ).hover(function() {
        $(".pbjd").show();
        $(".muffind").hide();
        $(".gone").hide();
        });
    $( ".muffin" ).hover(function() {
        $(".muffind").show();
        $(".pbjd").hide();
        $(".gone").hide();
        $(".muffinno").hide();
        });
    $( ".pizza" ).hover(function() {
        $(".pizzad").show();
        $(".bananad").hide();
        $(".gone").hide();
        });
    $( ".banana" ).hover(function() {
        $(".bananad").show();
        $(".pizzad").hide();
        $(".bananano").hide();
        });
     $( ".microwave" ).hover(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide(); //banana muffin
        $(".pbjd").hide(); //pbj
        $(".muffind").hide(); // muffin part 2
        $(".pizzad").hide(); // pizza 
        $(".bananad").hide(); // banana 
        $(".explanation").hide(); // i ate it
        $(".muffinno").hide(); // muffin no
        $(".bananano").hide(); // banana no
        });
     $( "#fridge" ).hover(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide(); //banana muffin
        $(".pbjd").hide(); //pbj
        $(".muffind").hide(); // muffin part 2
        $(".pizzad").hide(); // pizza 
        $(".bananad").hide(); // banana 
        $(".explanation").hide(); // i ate it
        $(".muffinno").hide(); // muffin no
        $(".bananano").hide(); // banana no
        });
     $( "#freezer" ).hover(function() {
        $(".bmuffinf").hide();
        $(".bmuffind").hide(); //banana muffin
        $(".pbjd").hide(); //pbj
        $(".muffind").hide(); // muffin part 2
        $(".pizzad").hide(); // pizza 
        $(".bananad").hide(); // banana 
        $(".explanation").hide(); // i ate it
        $(".muffinno").hide(); // muffin no
        $(".bananano").hide(); // banana no
        });




    /* be able to drop foods into appliances */
    $( ".microwave" ).droppable({
      drop: function() {
        console.log("heating");
        $(".bmuffinf").hide();
        $(".bmuffind").hide(); //banana muffin
        $(".pbjd").hide(); //pbj
        $(".muffind").hide(); // muffin part 2
        $(".pizzad").hide(); // pizza 
        $(".bananad").hide(); // banana 
        $(".explanation").hide(); // i ate it
        $(".muffinno").hide(); // muffin no
        $(".bananano").hide(); // banana no
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
