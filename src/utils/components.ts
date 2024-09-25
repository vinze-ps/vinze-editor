export class ComponentsUtils {
  constructor() {}

  createToolbar(container: HTMLElement): HTMLElement {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    container.appendChild(toolbar);
    return toolbar;
  }
}
