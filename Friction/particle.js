var particle = {

	position: null,
	velocity: null,
	gravity: null,
	radius: 20,
	bounce: -0.9,
	friction: 1,

	create: function(x, y, speed, direction, grav){
		var obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		this.gravity = vector.create(0, grav || 0);
		return obj;
	},

	accelerate: function(accel){
		this.velocity.addTo(accel);
	},

	update: function(){
		this.velocity.multiplyBy(this.friction);
		this.position.addTo(this.velocity);
		this.velocity.addTo(this.gravity);
	}

}