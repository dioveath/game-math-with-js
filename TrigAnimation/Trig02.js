window.onload = function(){

	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	var centerX = width * 0.5,
	centerY = height * 0.5,
	baseRadius = 100,
	baseAlpha = 0.5,
	offsetRadius = 50,
	offsetAlpha = 0.5,
	speed = 0.1,
	angle = 0;

	render();

	function render(){
		var radius = baseRadius + Math.sin(angle) * offsetRadius;
		var alpha = baseAlpha + Math.sin(angle) * offsetAlpha;

		context.fillStyle = "rgba(0, 0, 0," + alpha + ")";
		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;

		requestAnimationFrame(render);
	}

};
