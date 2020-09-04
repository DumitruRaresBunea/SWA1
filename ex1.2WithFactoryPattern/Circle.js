const Circle = function (center, radius) {
  const circle = {
    center,
    radius,
  };

  circle.getCenter = function () {
    return this.center;
  };

  circle.getRadius = function () {
    return this.radius;
  };

  circle.moveTo = function (x, y) {
    this.center.moveTo(x, y);
  };

  circle.toString = function () {
    return (
      "center is at: " +
      this.center.toString() +
      " with a radius of: " +
      this.radius
    );
  };

  return circle;
};

export default Circle;
