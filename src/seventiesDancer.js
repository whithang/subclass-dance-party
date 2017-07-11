var make70sDancer = function( top, left, timeBetweenSteps ) {
  makeDancer.call( this, top, left, timeBetweenSteps );
  this.$node = $('<span class="seventiesDancer"></span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

make70sDancer.prototype = Object.create( makeDancer.prototype );
make70sDancer.prototype.constructor = make70sDancer;

make70sDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  makeDancer.prototype.step.call( this );
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //this.setPosition( $('body').height() * Math.random(), $('body').width() * Math.random());
  /*this.$node.animate({
    marginLeft: "+=250px"}, 1000);*/
};

/*make70sDancer.prototype.flip = function() {
  $('.seventiesDancer').css({'transform': 'rotate(-180deg)'});
};*/