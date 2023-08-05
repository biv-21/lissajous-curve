class Circle {
  constructor({ x, y, radius, color = 'black' }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  drawOn(canvas) {
    const ctx = canvas.getContext();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  // update() {
  //   if (this.frame % 2 === 0) {
  //     const k = frequencyA / frequencyB;
  //     this.x =
  //       Math.sin(frequencyA * this.angle + phaseShift) * (canvasWidth * 0.4) +
  //       canvasWidth * 0.5;
  //     this.y =
  //       Math.sin(frequencyB * this.angle) * (canvasHeight * 0.4) +
  //       canvasHeight * 0.5;

  //     this.angle = this.angle + Math.PI / 144;

  //     if (this.angle > Math.PI * 2) {
  //       this.angle = 0;
  //     }
  //   }

  //   this.frame++;
  // }
}

export { Circle };
