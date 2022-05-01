window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;



  var ball = particle.create(Math.random() * width, Math.random() * height, Math.random() * 5, Math.random() * Math.PI * 2);
  ball.radius = 10;
  ball.friction = 0.95;
  var k = 0.2;
  var length = 100;

  var springs = []


  for(var i = 0; i < 10; i++){
    var springPoint = {
      x:  width * Math.random() ,
      y:  height * Math.random()
    };
    ball.addSpring(springPoint, k, length);
    springs.push(springPoint);
  }

  var isDragging = false;

  document.addEventListener("mousemove", function(event){
    if(pointInCircle(ball, event.clientX, event.clientY)){
      context.fillStyle = "#f00";
      context.strokeStyle = "#f00";
    } else {
      context.fillStyle = "#000"
      context.strokeStyle = "#000";
    }
  });

  document.addEventListener("mousedown", function(event){
    if(pointInCircle(ball, event.clientX, event.clientY)){
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
    }
  });

  function mouseMove(){
    isDragging = true;
    ball.x = event.clientX;
    ball.y = event.clientY;
  }

  function mouseUp(){
    isDragging = false;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    if(!isDragging){
      ball.update();
    }

    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();

    for(var i = 0; i < springs.length; i++){
      var springPoint = springs[i];
      context.beginPath();
      context.arc(springPoint.x, springPoint.y, 5, 0, Math.PI * 2, false);
      context.fill();

      context.beginPath();
      context.moveTo(springPoint.x, springPoint.y);
      context.lineTo(ball.x, ball.y);
      context.stroke();
    }

    requestAnimationFrame(update);
  }

  function pointInCircle(c0, x, y){
    var dx = c0.x - x,
        dy = c0.y - y,
        distance = Math.sqrt(dx * dx + dy * dy);
    return (distance <= c0.radius);
  }

};
