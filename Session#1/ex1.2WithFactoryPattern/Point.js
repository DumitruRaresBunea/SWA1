const Point =  (x, y) => {
  const point = {
    x,
    y,
  };
  point.getX = () => x;

  point.getY = () => y;

  point.moveTo = (x, y) => {
    point.x = x;
    point.y = y;
  };

  point.toString = () => "x is: " + point.x + ", y is: " + point.y;

  point.copy = () => point;

  return point;
};

export default Point;
