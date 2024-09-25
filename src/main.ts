import './style.css';
import {VEComponents, VEOptions} from "./types";
import {ComponentsUtils} from "./utils/components.ts";

class TextEditor {
  // Editor
  components: VEComponents;
  options?: VEOptions;

  // Utils
  componentsUtils!: ComponentsUtils;

  constructor(container: HTMLElement, options?: VEOptions) {
    this.components = { container };
    this.options = options;
    this.init();
  }

  destroy() {
    this.components.container.innerHTML = '';
  }

  init() {
    this.components.container.classList.add('container');
    this.componentsUtils = new ComponentsUtils();
    this.createComponents();
  }

  createComponents() {
    const { container } = this.components;
    const { editor, toolbar } = this.componentsUtils;

    this.components.toolbar = container.appendChild(toolbar.create());
    this.components.editor = container.appendChild(editor.create());
  }
}

export { TextEditor };
