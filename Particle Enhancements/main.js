window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;

  var sun = particle.create(width/2, height/2, 0, 0);
  sun.radius = 20;
  sun.mass = 20000;

  var planet = particle.create(width/2 + 200 , height/2, 10, Math.PI /2);
  planet.radius = 10;

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    planet.gravitateTo(sun);
    planet.update();

    context.beginPath();
    context.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2, false);
    context.fill();

    requestAnimationFrame(update);
  }

};
