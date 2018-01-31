$( ".food" ).draggable();

$( ".microwave" ).droppable({
  drop: function() {
    console.log("heating");
  }
});

$( ".freezer" ).droppable({
  drop: function() {
    console.log( "freezing" );
  }
});

$( ".fridge" ).droppable({
  drop: function() {
    console.log( "chilling" );
  }
});