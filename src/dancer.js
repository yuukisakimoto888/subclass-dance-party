// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.sound = '';

};

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    console.log('Dancer step');
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
    
};
  
makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top + 'px',
      left: left + 'px'
    };
    this.$node.css(styleSettings);
  };

makeDancer.prototype._randomColor = function (){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
//makeDancer.prototype.setPosition(20, 20);


