var particle = {

  position: null,
  velocity: null,
  gravity: null,
  mass: 1,
  radius: 5,
  friction: 1,

  create: function(x, y, speed, direction, grav){
    var obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);
    obj.gravity = vector.create(0, grav || 0);
    return obj;
  },

  accelerate: function(accel){
    this.velocity.addTo(accel);
  },

  update: function(){
    this.position.addTo(this.velocity);
    this.velocity.addTo(this.gravity);
    this.velocity.multiplyBy(this.friction);
  },

  gravitateTo: function(p2){
    var dist = utils.distanceP(this, p2);
    var gravity = vector.create(0, 0);
    gravity.setLength(this.mass * p2.mass / (dist * dist));
    gravity.setAngle(utils.angleTo(this, p2));
    this.velocity.addTo(gravity);
  }

};
