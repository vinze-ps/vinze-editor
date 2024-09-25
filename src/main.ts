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

  init() {
    this.componentsUtils = new ComponentsUtils();
    this.components.toolbar = this.componentsUtils.createToolbar(this.components.container);
    this.components.container.classList.add('container');
    // this.container.contentEditable = 'true';
  }


}

export { TextEditor };
