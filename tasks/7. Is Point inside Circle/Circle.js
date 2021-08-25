import Point from './Point';

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      /**
       * Implement a function **that takes in a Point** and a **Circle**, 
       * and **returns true** if the given **Point is within** the area of the **Circle**.
       * 
       * 
      ## Tips & Tricks
      * Think about what does that mean when a point is tangential, and why it should be considered inside the circle.

      equation: (Px-Cx)^2 + (Py-Cx)^2 < radius^2
       */
      const xAxis = Point.x - center.x;
      const yAxis = Point.y - center.y;
      return Math.pow(xAxis, 2) + Math.pow(yAxis, 2) <= Math.pow(radius, 2);
    }
  }
}
