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
  springs: null,
  gravitations: null,


  create: function(x, y, speed, direction, grav){
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    obj.vx = Math.cos(direction) * speed;
    obj.vy = Math.sin(direction) * speed;
    obj.gravity = grav || 0;
    obj.springs = [];
    obj.gravitations = [];
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

  setHeading: function(angle){
    var speed = this.getSpeed();
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  },

  addSpring: function(point, k, length){
    this.removeSpring(point);
    this.springs.push({
      point: point,
      k: k,
      length: length || 0
    });
  },

  removeSpring: function(point){
    for(var i = 0; i < this.springs.length; i++){
      if(this.springs[i].point === point){
        this.springs.splice(i, 1);
        return;
      }
    }
  },

  addGravity: function(p2){
    this.removeGravity(p2);
    this.gravitations.push(p2);
  },

  removeGravity: function(p2){
    for(var i = 0; i < this.gravitations.length; i++){
      if(p2 === this.gravitations[i]){
        this.gravitations.splice(i, 1);
      }
    }
  },

  update: function(){
    //Need to fix the removeSpring
    this.handleSprings();
    this.handleGravity();
    this.vy += this.gravity;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
  },

  handleSprings: function(){
    for(var i = 0; i < this.springs.length; i++){
      var spring = this.springs[i];
      this.springTo(spring.point, spring.k, spring.length);
    }
  },

  handleGravity: function(){
    for(var i = 0; i < this.gravitations.length; i++){
      this.gravitateTo(this.gravitations[i]);
    }
  },

  gravitateTo: function(p2){
    var dx = p2.x - this.x,
        dy = p2.y - this.y,
        distSQ = dx * dx + dy * dy,
        dist = Math.sqrt(distSQ),
        force = p2.mass / distSQ;

    this.vx += dx / dist * force;
    this.vy += dy / dist * force;
  },

  springTo: function(point, k, length){
    var dx = point.x - this.x,
        dy = point.y - this.y,
        distance = Math.sqrt(dx * dx + dy * dy),
        force = (distance - (length || 0)) * k;
    this.vx += dx / distance * force;
    this.vy += dy / distance * force;
  }

};
