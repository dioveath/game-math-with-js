window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var centerX = width * .5,
	centerY = height * .5,
	radius = 100,
	angle = 0,
	speed = 0.04,
	x, y;

	render();
	
	function render(){
		context.clearRect(0, 0, width, height);
		x = centerX + Math.cos(angle) * radius*2;
		y = centerY + Math.sin(angle) * radius/2;
				
		context.beginPath();
		context.arc(x, y, 10, 0, Math.PI * 2, false);
		context.fill();
		
	
		angle += speed;
		requestAnimationFrame(render);
	}
	

};