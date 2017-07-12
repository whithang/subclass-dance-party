var makeDancer = function( top, left, timeBetweenSteps ) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.step();

  this.setPosition( top, left );
  window.dancers.push(this);
};

makeDancer.prototype.step = function() {
  
  setTimeout( this.step.bind( this ), this.timeBetweenSteps ); //10000);

  this.$node.unbind().mouseover( function() {
    $(this).animate( { bottom: '+=100' }, 'slow' ).animate( { bottom: '-=100' }, 'fast' );
  });

  for (var i = 0; i < window.dancers.length; i++) {
    var sideA2 = Math.pow(window.dancers[i].top - this.top, 2);
    var sideB2 = Math.pow(window.dancers[i].left - this.left, 2);
    var sideC = Math.sqrt(sideA2 + sideB2);

    if (sideC <= 150 && sideC > 0 ) {
      $(this.$node).unbind().animate( { left: '+=100' }, 'fast' ).animate( { left: '-=100' }, 'fast' );
    }
  }
};

makeDancer.prototype.setPosition = function( bottom, left ) {
  var styleSettings = {
    bottom: bottom,
    left: left
  };

  this.$node.css( styleSettings );
};