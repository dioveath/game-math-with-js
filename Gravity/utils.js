var utils = {

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
  }

};
