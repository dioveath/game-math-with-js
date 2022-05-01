window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var particles = [],
	numParticles = 200;

	for(var i = 0; i < numParticles; i++){
		var p = particle.create(width/2, height, Math.random() * 5 + 5, -Math.PI /2 + Math.random() * .2 - .1, .1);
		p.radius = Math.random() * 5 + 3;
		particles.push(p);
	}

	update();

	function update(){
		context.clearRect(0, 0, width, height);

		for(var i = 0; i < particles.length; i++){
			var p = particles[i];
			p.update();
			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
			context.fill();			
		}
		
		reincarnate();

		requestAnimationFrame(update);
	}

	function reincarnate(){
		for(var i = 0; i < particles.length; i++){
			var p = particles[i];
			if(p.position.getY() > height){
				p.position.setX(width/2);
				p.position.setY(height);
				p.velocity.setLength(Math.random() * 5 + 3);
				p.velocity.setAngle(-Math.PI /2 + Math.random() * .2 - .1);
			}
		}
	}

};