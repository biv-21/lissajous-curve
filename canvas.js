class Canvas {
  #widthFraction = 16;
  #heightFraction = 9;
  #width = 0;
  #height = 0;
  #canvas = undefined;
  #ctx = undefined;
  #container = undefined;

  constructor(container) {
    const canvas = (this.#canvas = document.createElement('canvas'));
    this.#ctx = canvas.getContext('2d');
    this.#container = container;

    container.appendChild(canvas);
    this.resize(container);

    canvas.style.backgroundColor = 'white';
  }

  #calcSize(container) {
    const { width: containerWidth, top: containerTop } =
      container.getBoundingClientRect();
    const bottomPadding = 8;

    let width = containerWidth;
    let height = Math.floor(
      (this.#heightFraction * width) / this.#widthFraction
    );

    if (Math.floor(containerTop + height) > window.innerHeight) {
      height = Math.floor(window.innerHeight - (containerTop + bottomPadding));
      width = Math.floor((this.#widthFraction * height) / this.#heightFraction);
    }

    return {
      width,
      height,
    };
  }

  #setSize(width, height) {
    this.#width = this.#canvas.width = width;
    this.#height = this.#canvas.height = height;
  }

  resize() {
    const { width, height } = this.#calcSize(this.#container);
    this.#setSize(width, height);
  }

  getSize() {
    return {
      width: this.#width,
      height: this.#height,
    };
  }

  getContext() {
    return this.#ctx;
  }

  clear() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
  }
}

export { Canvas };
