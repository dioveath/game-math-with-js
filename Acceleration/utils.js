var utils = {

  randomRange: function(min, max){
    return (min + Math.random() * (max - min));
  },

  normDist: function(min, max, iteration){
    var total = 0;
    for(var i = 0; i < iteration; i++){
      total += utils.randomRange(min, max);
    }

    return Math.floor(total / iteration);
  },

  distanceXY: function(x0, y0, x1, y1){
    var dx = x1 - x0,
        dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  circleCollision: function(c1, c2){
    return utils.distanceXY(c1.position.getX(), c1.position.getY(), c2.position.getX(), c2.position.getY()) < (c1.radius + c2.radius);
  }


};
