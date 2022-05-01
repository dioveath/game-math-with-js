window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var springPoint = {
    x: width/2,
    y: height/2
  };
  var springLength = 100;

  var ball = particle.create(Math.random() * width, Math.random() * height, 0, 0, 2);
  ball.radius = 20;
  ball.friction = 0.97;
  k = 0.2;

  document.addEventListener("mousemove", function(event){
    springPoint.x = (event.clientX);
//    springPoint.setY(event.clientY);
  });

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    ball.springTo(springPoint, k, springLength);

    ball.update();

    context.beginPath();
    context.arc(springPoint.x, springPoint.y, 5, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(springPoint.x, springPoint.y);
    context.stroke();

    requestAnimationFrame(update);
  }


};
