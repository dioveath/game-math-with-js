window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var sun = particle.create(width/2, height/2, 0, 0);
  sun.mass = 20000;
  sun.radius = 20;

  var planets = [];


  for(var i = 0; i < 10; i++){
    var planet = particle.create(width/2 + utils.randomRange(100, 300), height/2, utils.randomRange(5, 10), -Math.PI /2);
    planets.push(planet);
  }

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    for(var i = 0; i< 10; i++){
      var planet = planets[i];
      planet.gravitateTo(sun);
      planet.update();
      context.fillStyle = "#00f";
      context.beginPath();
      context.arc(planet.position.getX(), planet.position.getY(), planet.radius, 0, Math.PI * 2, false);
      context.fill();
    }

    context.fillStyle = "#ff0";
    context.beginPath();
    context.arc(sun.position.getX(), sun.position.getY(), sun.radius, 0, Math.PI * 2, false);
    context.fill();


    requestAnimationFrame(update);
  }

};
