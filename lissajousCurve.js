import { Circle } from './circle.js';

class LissajousCurvePoint extends Circle {
  constructor({ x, y, radius, angle, color }) {
    super({ x, y, radius, color });
    this.angle = angle;
  }
}

class LissajousCurve {
  constructor({
    frequencyA,
    frequencyB,
    phaseShift,
    numberOfPoints,
    width,
    height,
  }) {
    this.frequencyA = frequencyA;
    this.frequencyB = frequencyB;
    this.phaseShift = phaseShift;
    this.width = width;
    this.height = height;
    this.#createPoints(numberOfPoints);
  }

  #getPosition(angle) {
    const x =
      Math.sin(this.frequencyA * angle + this.phaseShift) * (this.width * 0.4) +
      this.width * 0.5;
    const y =
      Math.sin(this.frequencyB * angle) * (this.height * 0.4) +
      this.height * 0.5;

    return {
      x,
      y,
    };
  }

  #createPoints(num) {
    this.points = [...new Array(num)].map((_, index) => {
      const angle = Math.PI / 360 + (index * Math.PI) / 360;
      const { x, y } = this.#getPosition(angle);
      return new LissajousCurvePoint({
        x,
        y,
        radius: 5,
        color: `rgba(0, 0, 255, ${(1 / num) * (index + 1)})`,
        angle,
      });
    });
  }

  drawOn(canvas) {
    this.points.forEach((point) => point.drawOn(canvas));
  }

  update() {
    this.points.forEach((point) => {
      const angle = point.angle + Math.PI / 360;
      const { x, y } = this.#getPosition(angle);

      point.angle = angle;
      point.x = x;
      point.y = y;
    });
  }
}

export { LissajousCurve };
