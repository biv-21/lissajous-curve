import { Canvas } from './canvas.js';
import { Controls } from './controls.js';
import { LissajousCurve } from './lissajousCurve.js';

const rootElelment = document.getElementById('root');

const controlsContainer = document.createElement('div');
controlsContainer.classList.add('controls-container');
rootElelment.appendChild(controlsContainer);

const controlsState = {
  frequencyA: 5,
  frequencyB: 4,
  phaseShift: Math.PI / 2,
  numberOfPoints: 300,
};

const controls = new Controls({
  container: controlsContainer,
  frequencyAOnChange: (value) => {
    controlsState.frequencyA = value;
    onChange();
  },
  frequencyBOnChange: (value) => {
    controlsState.frequencyB = value;
    onChange();
  },
  phaseShiftOnChange: (value) => {
    controlsState.phaseShift = value;
    onChange();
  },
  numberOfPointsOnChange: (value) => {
    controlsState.numberOfPoints = value;
    onChange();
  },
});

const canvasContainer = document.createElement('div');
canvasContainer.classList.add('canvas-container');
rootElelment.appendChild(canvasContainer);

const canvas = new Canvas(canvasContainer);
initResizer();

let lissajousCurve = undefined;
onChange();

const animate = () => {
  canvas.clear();

  lissajousCurve.drawOn(canvas);
  lissajousCurve.update();
  requestAnimationFrame(animate);
};

animate();

function initResizer() {
  const observer = new ResizeObserver(() => {
    canvas.resize();
    onChange();
  });

  observer.observe(canvasContainer);
}

function onChange() {
  const { height, width } = canvas.getSize();
  const { frequencyA, frequencyB, phaseShift, numberOfPoints } = controlsState;
  lissajousCurve = new LissajousCurve({
    frequencyA,
    frequencyB,
    phaseShift,
    height,
    width,
    numberOfPoints,
  });
}
