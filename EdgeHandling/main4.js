window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var ball = particle.create(width/2, height/2, 4, Math.PI / 6, .1);
	ball.radius = 15;

	update();

	function update(){
		context.clearRect(0, 0, width, height);
		
		ball.update();
		context.beginPath();
		context.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI * 2, false);
		context.fill();

		if(ball.position.getX() + ball.radius > width || ball.position.getX() - ball.radius < 0){
			ball.velocity.setX(ball.velocity.getX() * ball.bounce);
		}

		if(ball.position.getY() + ball.radius > height || ball.position.getY() - ball.radius < 0){
			ball.position.setY(height-ball.radius);
			ball.velocity.setY(ball.velocity.getY() * ball.bounce);
			console.log(ball.velocity.getX(), ball.velocity.getY());
		}

		requestAnimationFrame(update);
	}
	
};