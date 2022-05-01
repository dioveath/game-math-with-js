window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var ship = particle.create(width/2, height/2, 0, 0),
	angle = 0,
	thrust = vector.create(0, 0),
	isThrusting = false,
	isTurningLeft = false,
	isTurningRight = false;
	
	ship.friction = .99;
	
	document.body.addEventListener("keydown", function(event){
		switch(event.keyCode){
		case 37: //left
			isTurningLeft = true;
		break;
		case 39: //right
			isTurningRight = true;
		break;
		case 38: //up
			isThrusting = true;
		break;
		}
	});

	document.body.addEventListener("keyup", function(event){
				switch(event.keyCode){
		case 37: //left
			isTurningLeft = false;
		break;
		case 39: //right
			isTurningRight = false;
		break;
		case 38: //up
			isThrusting = false;
		break;
		}			
	});	

	update();
		
	function update(){
		context.clearRect(0, 0, width, height);

		if(isTurningLeft){
			angle -= .1;
		}
		if(isTurningRight){
			angle += .1;
		}
		

		console.log(isThrusting);
		if(isThrusting){
			thrust.setLength(.1);
			thrust.setAngle(angle);
		} else {

			thrust.setLength(0);
		}
		ship.accelerate(thrust);
		ship.update();

		context.save();
		context.translate(ship.position.getX(), ship.position.getY());
		context.rotate(angle);
		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(-20, -10);
		context.lineTo(-20, 10);
		context.lineTo(20, 0);
		if(isThrusting){
			context.moveTo(-20, 0);
			context.lineTo(-30, 0);
			context.moveTo(-20, -3);
			context.lineTo(-30, -3);
			context.moveTo(-20, 3);
			context.lineTo(-30, 3);
		}
		context.stroke();
		context.restore();

		if(ship.position.getX() - 20 > width){
			ship.position.setX(-20);
		} else if(ship.position.getX() + 20 < 0){
			ship.position.setX(width + 20);
		}
	
		if(ship.position.getY() - 20 > height){
			ship.position.setY(-20);
		} else if(ship.position.getY() + 20 < 0){
			ship.position.setY(height + 20);
		}	

		requestAnimationFrame(update);
	}

};                                                                            