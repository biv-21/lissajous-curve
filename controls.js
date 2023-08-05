import { Select } from './select.js';

class Controls {
  constructor({
    container,
    frequencyAOnChange,
    frequencyBOnChange,
    phaseShiftOnChange,
    numberOfPointsOnChange,
  }) {
    this.#initControls({
      container,
      frequencyAOnChange,
      frequencyBOnChange,
      phaseShiftOnChange,
      numberOfPointsOnChange,
    });
  }

  #initControls({
    container,
    frequencyAOnChange,
    frequencyBOnChange,
    phaseShiftOnChange,
    numberOfPointsOnChange,
  }) {
    const frequencyASelect = new Select({
      label: 'frequency A:',
      options: [...new Array(10)].map((_, index) => ({
        value: index + 1,
        displayValue: index + 1,
        selected: index + 1 === 5,
      })),
      onChange: ({ target }) => {
        const { value } = target;
        frequencyAOnChange(Number(value));
      },
    });

    const frequencyBSelect = new Select({
      label: 'frequency B:',
      options: [...new Array(10)].map((_, index) => ({
        value: index + 1,
        displayValue: index + 1,
        selected: index + 1 === 4,
      })),
      onChange: ({ target }) => {
        const { value } = target;
        frequencyBOnChange(Number(value));
      },
    });

    const phaseShiftSelect = new Select({
      label: 'phase shift:',
      options: [
        { value: 0, displayValue: '0' },
        { value: Math.PI * 0.25, displayValue: 'π/4' },
        { value: Math.PI * 0.5, displayValue: 'π/2', selected: true },
        { value: Math.PI * 0.75, displayValue: '3π/4' },
        { value: Math.PI, displayValue: 'π' },
      ],
      onChange: ({ target }) => {
        const { value } = target;
        phaseShiftOnChange(Number(value));
      },
    });

    const numberOfPointsSelect = new Select({
      label: 'number of points:',
      options: [
        { value: 10, displayValue: '10' },
        { value: 25, displayValue: '25' },
        { value: 90, displayValue: '90' },
        { value: 300, displayValue: '300', selected: true },
        { value: 1000, displayValue: '1000' },
      ],
      onChange: ({ target }) => {
        const { value } = target;
        numberOfPointsOnChange(Number(value));
      },
    });

    container.append(
      frequencyASelect.element,
      frequencyBSelect.element,
      phaseShiftSelect.element,
      numberOfPointsSelect.element
    );
  }
}

export { Controls };
