class Select {
  constructor({ label, options, onChange }) {
    const selectElement = document.createElement('select');
    const labelElement = document.createElement('label');

    labelElement.innerText = label;

    options.map((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.innerText = `${option.displayValue}`;
      selectElement.appendChild(optionElement);

      if (option.selected) {
        optionElement.selected = true;
      }
    });

    selectElement.addEventListener('change', onChange);

    const container = document.createElement('div');
    container.classList.add('select-container');
    container.append(labelElement, selectElement);
    this.element = container;
  }
}

export { Select };
