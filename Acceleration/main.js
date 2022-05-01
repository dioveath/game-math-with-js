window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var ship = particle.create(width/2, height/2, 0, 0);
  var angle = 0,
      thrust = vector.create(0, 0);

  var isThrusting = false,
      isTurningleft = false,
      isTurningright = false,
      isFiring = false,
      isFired = false;

  var bullets = [];

  var enemies = [];
  for(var i = 0; i < 10; i++){
    var enemy = particle.create(utils.randomRange(20, width - 20), utils.randomRange(20, height - 20), 0, 0 );
    enemy.radius = utils.normDist(10, 40, 2);
    enemies.push(enemy);
  }


  document.addEventListener("keydown", function(event){
    switch(event.keyCode){
      case 37: // left
      isTurningleft = true;
      break;
      case 39: // right
      isTurningright = true;
      break;
      case 38: // up
      isThrusting = true;
      break;
      case 32:
      isFiring = true;
      break;
    }
  });

  document.addEventListener("keyup", function(event){
    switch(event.keyCode){
      case 37: // left
      isTurningleft = false;
      break;
      case 39: // right
      isTurningright = false;
      break;
      case 38: // up
      isThrusting = false ;
      break;
      case 32:
      isFiring = false;
      isFired = false;
      break;
    }
  });

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    if(isTurningleft){
      angle -= .1;
    }
    if(isTurningright){
      angle += .1;
    }
    if(isThrusting){
      thrust.setLength(.1);
      thrust.setAngle(angle);
      ship.accelerate(thrust);
    } else {
      thrust.setLength(0);
    }

    if(isFiring && !isFired){
      var bullet = particle.create(ship.position.getX(), ship.position.getY(), 15, angle);
      bullets.push(bullet);
      isFired = true;
    }

    ship.velocity._x = Math.min(5, Math.max(ship.velocity._x, -5));
    ship.velocity._y = Math.min(5, Math.max(ship.velocity._y, -5));

    ship.update();

    context.save();
    context.translate(ship.position.getX(), ship.position.getY());
    context.rotate(angle);
    context.beginPath();
    context.moveTo(10, 0);
    context.lineTo(-10,-5);
    context.lineTo(-10, 5);
    context.lineTo(10, 0);
    if(isThrusting){
      context.moveTo(-10, 0);
      context.lineTo(-15, 0);
    }

    context.stroke();
    context.restore();

    //bullets
    for(var i = 0; i < bullets.length; i++){
      var b = bullets[i];
      b.update();
      context.beginPath();
      context.arc(b.position.getX(), b.position.getY(), 2, 0, Math.PI * 2, false);
      context.stroke();
    }

    if(ship.position.getX() > width + 5){
      ship.position.setX(-5);
    }
    if(ship.position.getX() < -5){
      ship.position.setX(width + 5)
    }

    if(ship.position.getY() > height + 5){
      ship.position.setY(-5);
    }
    if(ship.position.getY() < -5){
      ship.position.setY(height + 5);
    }

    //enemies
    for(var i = 0; i< enemies.length; i++){
      var e = enemies[i];
      context.beginPath();

      context.arc(e.position.getX(), e.position.getY(), e.radius, 0, Math.PI * 2, false);
      context.stroke();
    }
    checkEnemies();




    removeDeadParticles();

    requestAnimationFrame(update);
  }

  function removeDeadParticles(){
    for(var i = bullets.length - 1; i >= 0; i--){
      var bullet = bullets[i];
      if(bullet.position.getX() > width){
        bullets.splice(i, 1);
      }
    }
  }

  function checkEnemies(){
    for(var i = enemies.length - 1; i >= 0; i--){
      var e = enemies[i];
      for(var j = bullets.length - 1; j >= 0; j--){
        var b = bullets[j];
        console.log(b);
        if(utils.circleCollision(e, b)){
          enemies.splice(i, 1);
          bullets.splice(j, 1);
          break;
        }
      }
    }
  }

};
