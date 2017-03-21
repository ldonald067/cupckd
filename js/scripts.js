$(document).ready(function(){

  $("button#button1").click(function() {
    $("span.newone").removeClass();
    $("span.lastguy").removeClass();
    $("span.heyhey").addClass("heyhey");
  });

  $("button#button2").click(function() {
    $("span").removeClass();
    $("span").addClass("newone");
  });

  $("button#button3").click(function() {
    $("span").removeClass();
    $("span").addClass("lastguy");
  });


});
