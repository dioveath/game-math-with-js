window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var sun = particle.create(width/2 - 200, height/2 - 100, 0, 0);
  sun.mass = 20000;
  sun.radius = 20;

  var sun2 = particle.create(width - 500, height - 300, 0, 0);
  sun2.mass = 30000;
  sun2.radius = 20;

  var sun3 = particle.create(width - 200, 100, 0, 0);
  sun3.mass = 40000;
  sun3.radius = 20;

  var emitter = {
    x: 100,
    y: 0
  };

  var planets = [];

  for(var i = 0; i < 100; i++){
    //var planet = particle.create(emitter.x, emitter.y, Math.random() * 5 + 5, Math.PI / 2 );
    var planet = particle.create(emitter.x, emitter.y, 0, 0);
    planet.setSpeed(Math.random() * 5 + 5);
    planet.setHeading( Math.PI / 2 + Math.random() * 1 - 0.5);
    planet.radius = 5;
    planet.addGravity(sun);
    planet.addGravity(sun2);
    planet.addGravity(sun3);
    planets.push(planet);
  }



  update();

  function update(){
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#555";
    context.fillRect(0, 0, width, height);

    draw(sun, "#fff");
    draw(sun2, "#fff");
    draw(sun3, "#fff");

    for(var i = 0; i < planets.length; i++){
      var p = planets[i];
      p.update();
      draw(p, "#000");
      if(p.x > width ||
      p.x < 0 ||
      p.y > height ||
      p.y < 0){
        p.x = emitter.x;
        p.y = emitter.y;
        p.setSpeed(Math.random() * 5 + 5);
        p.setHeading( Math.PI / 2 + Math.random() * 1 - 0.5);
      }
    }


    requestAnimationFrame(update)
  }

  function draw(p, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    context.fill();
  }

};
