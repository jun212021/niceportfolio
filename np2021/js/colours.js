$(document).ready(function(){

  var colors = ['skyblue','orange','mediumseagreen','lightcoral','gold','PALEGREEN','MEDIUMSLATEBLUE','PLUM'];
  
  $('.folioLink').each(function(){
    var new_color = colors[Math.floor(Math.random()*colors.length)];
    $(this).css('color',new_color);
  });
 
});  // End ready
