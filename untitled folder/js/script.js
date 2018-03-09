$(document).ready(function(){

    $(document).ready(function() {
     var colors = ["#E0FFFF", "#AFEEEE", "#40E0D0", "#5F9EA0"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel').css("background", colors[rand]);
     //$('#refresh-button').css("fill", colors[rand]);
     $('#intro-arrow-1').css("fill", colors[rand]);
     $('#intro-arrow-3').css("fill", colors[rand]); 
     $('a').css("color", colors[rand]);
     $('#list-arrow-2').css("fill", colors[rand]);
     $('#list-arrow-4').css("fill", colors[rand]);
     $('#moreInfoButtonColor').css("fill", colors[rand]);
     $('#resizeTipButtonColor').css("fill", colors[rand]);


     var colors = ["#0d75ff", "#196fd1", "aa9581"]; //blue blue brown
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(3n+0)').css("background", colors[rand]);

     var colors = ["#badbad", "#a0e26a", "#b2a95c", "#4a6361"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(odd)').css("background", colors[rand]);
     //$('#list-arrow-2').css("fill", colors[rand]);

     //$('#a2').css("color", colors[rand]);

     var colors = ['#fffbec', '#a87a34'];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(6n+0)').css("background", colors[rand]);

     var colors = ["#E0FFFF", "#AFEEEE", "#40E0D0", "#5F9EA0"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(7n+0)').css("background", colors[rand]);
    //$('#a4').css("color", colors[rand]);

     var colors = ["#054c3a", "#78aec0", "#cdff6c", "#95dab0", "#ff5e5e"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(8n+1)').css("background", colors[rand]);
    // $('#list-arrow-4').css("fill", colors[rand]);

     //$('a:hover').css("color", colors[rand]);
     //$('a:visited').css("color", colors[rand]);
    // $('a:active').css("color", colors[rand]);


     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(9n+0)').css("background", colors[rand]);
     $('#intro-arrow-2').css("fill", colors[rand]);
     $('#intro-arrow-4').css("fill", colors[rand]); 
     $('#list-arrow-1').css("fill", colors[rand]);
     $('#list-arrow-3').css("fill", colors[rand]);
     $('#list-arrow-5').css("fill", colors[rand]);
     $('#refresh-button').css("fill", colors[rand]);
     $('#moreCodeButtonColor').css("fill", colors[rand]);


     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(11n+0)').css("background", colors[rand]);
     //$('#list-arrow-3').css("fill", colors[rand]);

     //$('#a3').css("color", colors[rand]);

     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(13n+1)').css("background", colors[rand]);
     //$('#list-arrow-5').css("fill", colors[rand]);

    /*var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.work:hover').css("color", colors[rand]);*/

    $('.refresh').click(function(){ 
        location.reload(true); 
    });

    $('#moreInfoButton').click(function(){
        $('.moreInfoTextBox').toggle();
    });

    $('#moreCodeButton').click(function(){
        $('.moreCodeBox').toggle();
    });

   $('#resizeTipButton').click(function(){
        $('.resizeTipBox').toggle();
    });

});

    
    });
