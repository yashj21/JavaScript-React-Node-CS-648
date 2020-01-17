$( function() {
    $( document ).tooltip();
    $( "#accordion" ).accordion({
        heightStyle: "content"
      });
       $( "#mgmt" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#mgmt li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" ); 
  } );

  
  
  