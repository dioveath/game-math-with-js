window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var ball = particle.create(width/2, height/2, 4, Math.PI /6);
	ball.radius = 20;

	update();

	function update(){
		context.clearRect(0, 0, width, height);

		ball.update();

		context.beginPath();
		context.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI * 2, false);
		context.fill();	

		if(ball.position.getX() - ball.radius > width){
			ball.position.setX(-ball.radius);
		} else if(ball.position.getX() + ball.radius < 0){
			ball.position.setX(width + ball.radius);
		}

		if(ball.position.getY() - ball.radius> height){
			ball.position.setY(-ball.radius);
		} else if(ball.position.getY() + ball.radius < 0){
			ball.position.setY(height + ball.radius);
		}
	
		requestAnimationFrame(update);
	}

};