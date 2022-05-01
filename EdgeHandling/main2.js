window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),	
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var particles = [],
	numParticles = 5000;

	for(var i = 0; i < numParticles; i++){
		particles.push(particle.create(width/2, height/2, Math.random() * 10, Math.random() * Math.PI * 2));
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
		removeParticles();
		console.log(particles.length);
		
		requestAnimationFrame(update);
	}

	function removeParticles(){
		for(var i = particles.length - 1; i >= 0; i--){
			var p = particles[i];
			if(p.position.getX() < -p.radius || 
			p.position.getX() > width + p.radius ||
			p.position.getY() < -p.radius || 
			p.position.getY() > height + p.radius){
				particles.splice(i, 1);
			}
		}
	}

};