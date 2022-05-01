var utils = {

  distanceXY: function(x0, y0, x1, y1){
    var dx = x1 - x0,
        dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  distanceP: function(p1, p2){
    var dx = p2.position.getX() - p1.position.getX(),
        dy = p2.position.getY() - p1.position.getY();
    return Math.sqrt(dx * dx + dy * dy);
  },

  angleTo: function(p1, p2){
    var dx = p2.position.getX() - p1.position.getX(),
        dy = p2.position.getY() - p1.position.getY();

    return Math.atan2(dy, dx);
  },

  randomRange: function(min, max){
    return min + Math.random() * (max - min);
  },

  randomDist: function(min, max, iteration){
    var total = 0;
    for(var i = 0; i < iteration; i++){
      total += utils.randomRange(min, max);
    }

    return Math.floor(total /iteration);
  }

};
