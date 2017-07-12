$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      ( $('body').height() - 200 ) * Math.random(),
      ( $('body').width() - 200 ) * Math.random(),
      Math.random() * 1000
    );  

    $('body').append(dancer.$node);
  });

  $('.lineUpDancerButton').on('click', function() {
    var bottom = $('body').height() / 2;
    var left = 0;
    var addLeft = $('body').width() / (window.dancers.length + 1);

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition( bottom, left);
      left += addLeft;
    } 
  });
});