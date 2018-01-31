$( ".food" ).draggable();

$( ".microwave" ).droppable({
  drop: function() {
    alert( "heating" );
  }
});

$( ".freezer" ).droppable({
  drop: function() {
    alert( "freezing" );
  }
});

$( ".fridge" ).droppable({
  drop: function() {
    alert( "chilling" );
  }
});