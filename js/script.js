// ! ============  Javascript plugin  =================
wow = new WOW(
  {
  boxClass:     'wow',     
  animateClass: 'animated',
  offset:       0,         
  mobile:       true,      
  live:         true       
}
)
wow.init();




// ! ================  Jquery plugin  =============================
$(document).ready(function(){



// *counter 
$('.counter').counterUp({
    delay: 10,
    time: 3000
});


// *counter--2 
$('.counter2').counterUp({
    delay: 10,
    time: 3000
});


// ! JQ END------------
  });