window.onload = function() {

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var ball = particle.create(width/2, height/2, 5, Math.random() * Math.PI * 2);
	ball.radius = 10;
	ball.friction = 0.97;

	update();

	function update(){
		context.clearRect(0, 0, width, height);
		
		ball.update();

		context.beginPath();
		context.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI * 2, false);
		context.fill();
	
		requestAnimationFrame(update);
	}

};