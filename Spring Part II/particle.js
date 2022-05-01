var particle = {

  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  radius: 10,
  mass: 1,
  gravity: 0,
  friction: 1,
  bounce: -1,

  create: function(x, y, speed, direction, grav){
    var obj = Object.create(this);
    obj.x = x,
    obj.y = y,
    obj.vx = Math.cos(direction) * speed;
    obj.vy = Math.sin(direction) * speed;
    obj.gravity = grav || 0;
    return obj;
  },

  getSpeed: function(){
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  },

  setSpeed: function(speed){
    var angle = this.getHeading();
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  },

  getHeading: function(){
    return Math.atan2(this.vy, this.vx);
  },

  setHeading: function(){
    var speed = this.getSpeed();
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  },

  update: function(){
    this.vy += this.gravity;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
  },

  gravitateTo: function(p2){
    var dx = p2.x - this.x,
        dy = p2.y - this.y,
        distSQ = dx * dx + dy * dy,
        dist = Math.sqrt(distSQ),
        force = p2.mass / distSQ,
        ax = dx / dist * force,
        ay = dy / dist * force;
    this.vx += ax;
    this.vy += ay;
  },

  springTo: function(p2, k, offset){
    var dx = p2.x - this.x,
        dy = p2.y - this.y,
        distance = Math.sqrt(dx * dx + dy * dy),
        force = (distance - (offset || 0)) * k,
        ax = dx / distance * force,
        ay = dy / distance * force;
        console.log(distance);
    this.vx += ax;
    this.vy += ay;
    p2.vx -= ax;
    p2.vy -= ay;
  }

};
