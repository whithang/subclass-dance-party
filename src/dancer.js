// Creates and returns a new dancer object that can step
var makeDancer = function( top, left, timeBetweenSteps ) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.step();

  this.setPosition( top, left );
  window.dancers.push(this);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout( this.step.bind( this ), this.timeBetweenSteps );

  this.$node.mouseover( function() {
    $(this).animate( { top: '+=100' }, 'fast' );
  } );
};

makeDancer.prototype.setPosition = function( top, left ) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    bottom: top,
    left: left
  };

  this.$node.css( styleSettings );
};