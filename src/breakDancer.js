var makeBreakDancer = function( top, left, timeBetweenSteps ) {
  makeDancer.call( this, top, left, timeBetweenSteps );
  this.$node = $('<span class="breakDancer"></span>');
  this.setPosition(top, left);
};

makeBreakDancer.prototype = Object.create( makeDancer.prototype );
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  makeDancer.prototype.step.call( this );
};