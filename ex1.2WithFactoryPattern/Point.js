const Point = function (x, y) {
  const point = {
    x,
    y,
  };
  point.getX = function () {
    return x;
  };
  point.getY = function () {
    return y;
  };
  point.moveTo = function (x, y) {
    this.x = x;
    this.y = y;
  };
  point.toString = function () {
    return "x is: " + this.x + ", y is: " + this.y;
  };
  point.copy = function () {
    return this;
  };
  return point;
};

export default Point;
