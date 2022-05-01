window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;


  var springPoint = {
    x: width/2,
    y: height/2
  };

  var springPoint2 = {
    x: width/2 + 200,
    y: height/2
  };

  var isDragging = false;

  var ball = particle.create(Math.random() * width, Math.random() * height, 3, Math.random() * Math.PI * 2, 2);
  ball.friction = 0.95;
  var k = 0.05;

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

    ball.springTo(springPoint, k, springPoint.length);
    ball.springTo(springPoint2, k, springPoint2.length);

    if(!isDragging){
      ball.update();
    }

    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.moveTo(springPoint.x, springPoint.y);
    context.lineTo(ball.x, ball.y);
    context.lineTo(springPoint2.x, springPoint2.y);
    context.stroke();

    requestAnimationFrame(update);
  }

  function pointInCircle(c0, x, y){
    var dx = c0.x - x,
        dy = c0.y - y,
        distance = Math.sqrt(dx * dx + dy * dy);
    return (distance <= c0.radius);
  }


};
