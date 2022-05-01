window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = canvas.width = window.innerWidth,
  height =canvas.height = window.innerHeight;

  var particleA = particle.create(utils.randomRange(0, width),
                                  utils.randomRange(0, height),
                                  utils.randomRange(5, 10),
                                  utils.randomRange(0, Math.PI * 2), 0);

  var particleB = particle.create(utils.randomRange(0, width),
                                  utils.randomRange(0, height),
                                  utils.randomRange(5, 10),
                                  utils.randomRange(0, Math.PI * 2), 0);

  var particleC = particle.create(utils.randomRange(0, width),
                                  utils.randomRange(0, height),
                                  utils.randomRange(5, 10),
                                  utils.randomRange(0, Math.PI * 2), 0);

  var particleD = particle.create(utils.randomRange(0, width),
                                  utils.randomRange(0, height),
                                  utils.randomRange(5, 10),
                                  utils.randomRange(0, Math.PI * 2), 0);

  var particleE = particle.create(utils.randomRange(0, width),
                                  utils.randomRange(0, height),
                                  utils.randomRange(5, 10),
                                  utils.randomRange(0, Math.PI * 2), 0);


  particleA.friction = 0.9;
  particleB.friction = 0.9;
  particleC.friction = 0.9;
  particleD.friction = 0.9;
  particleE.friction = 0.9;

  document.addEventListener("mousemove", function(event){
    particleE.x = event.clientX;
    particleE.y = event.clientY;
  });

  var k = 0.1,
      separation = 100;

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    particleA.springTo(particleB, k, separation);
    particleB.springTo(particleC, k, separation);
    particleA.springTo(particleC, k, separation);
    particleB.springTo(particleD, k, separation);
    particleC.springTo(particleD, k, separation);
    particleD.springTo(particleA, k, separation);
    particleE.springTo(particleA, k, separation);
    particleE.springTo(particleB, k, separation);
    particleE.springTo(particleC, k, separation);
    particleE.springTo(particleD, k, separation);


    particleA.update();
    particleB.update();
    particleC.update();
    particleD.update();
    particleE.update();

    context.beginPath();
    context.arc(particleA.x, particleA.y, particleA.radius, 0, Math.PI * 2, false);
    context.fill();

    context.beginPath();
    context.arc(particleB.x, particleB.y, particleB.radius, 0, Math.PI * 2, false);
    context.fill();
    context.beginPath();
    context.arc(particleC.x, particleC.y, particleC.radius, 0, Math.PI * 2, false);
    context.fill();
    context.beginPath();
    context.arc(particleD.x, particleD.y, particleD.radius, 0, Math.PI * 2, false);
    context.fill();
    context.beginPath();
    context.arc(particleE.x, particleE.y, particleE.radius, 0, Math.PI * 2, false);
    context.fill();



    context.beginPath();
    context.moveTo(particleA.x, particleA.y);
    context.lineTo(particleB.x, particleB.y);
    context.lineTo(particleC.x, particleC.y);
    context.lineTo(particleD.x, particleD.y);
    context.lineTo(particleA.x, particleA.y);
    context.lineTo(particleC.x, particleC.y);
    context.moveTo(particleB.x, particleB.y);
    context.lineTo(particleD.x, particleD.y);

    context.stroke();

    requestAnimationFrame(update);
  }

};
