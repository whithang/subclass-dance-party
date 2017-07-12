var make70sDancer = function( top, left, timeBetweenSteps ) {
  makeDancer.call( this, top, left, timeBetweenSteps );
  this.$node = $('<span class="seventiesDancer"></span>');
  this.setPosition(top, left);
};

make70sDancer.prototype = Object.create( makeDancer.prototype );
make70sDancer.prototype.constructor = make70sDancer;

make70sDancer.prototype.step = function() {
  makeDancer.prototype.step.call( this );
};