window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var springPoint = vector.create(width/2, height/2);
  springPoint.radius = 5;

  var ball = particle.create(utils.randomRange(0, width), utils.randomRange(0, height), 0, 0);
  ball.radius = 30;
  ball.friction = 0.97;

  var k = 0.1;

  document.addEventListener("mousemove", function(event){
    springPoint.setX(event.clientX);
    springPoint.setY(event.clientY);
  });

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    var force = springPoint.subtract(ball.position);
    force.multiplyBy(k);
    //var force = ball.position.subtract(springPoint).multiply(k);

    console.log(force);

    ball.accelerate(force);
    ball.update();

    context.beginPath();
    context.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.arc(springPoint.getX(), springPoint.getY(), springPoint.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.moveTo(springPoint.getX(), springPoint.getY());
    context.lineTo(ball.position.getX(), ball.position.getY());
    context.stroke();


    requestAnimationFrame(update);
  }

};
