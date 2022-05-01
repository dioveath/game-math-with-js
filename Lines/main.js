window.onload = function(){
	
	var canvas = document.getElementById("canvas"), 
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	
	for(var i = 0; i < 1000; i++){
		context.beginPath();
		context.moveTo(Math.random() * width, Math.random() * height);
		context.lineTo(Math.random() * width, Math.random() * height);
		context.stroke();
	}

};