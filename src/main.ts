import './style.css';
import { VEComponents, VEOptions } from './types';
import {Errors} from "./lib/errors.ts";
import {ComponentsFactory} from "./lib/componentsFactory.ts";

/**
 * Class representing the VinzeEditor text editor.
 */
export class VinzeEditor {
  // Editor components
  components: VEComponents;
  options?: VEOptions;

  /**
   * Creates an instance of VinzeEditor.
   * @param container - The container element where the editor will be initialized.
   * @param options - Optional configuration settings.
   */
  constructor(container: HTMLElement, options?: VEOptions) {
    if (!container) {
      Errors.containerWasNotSpecified();
    }

    this.components = { container };
    this.options = options;

    this.init();
  }

  /**
   * Initializes the editor.
   */
  private init() {
    this.components.container.classList.add('container');
    this.createComponents();
  }

  /**
   * Creates the editor components.
   */
  private createComponents() {
    const { container } = this.components;

    this.components.editor = ComponentsFactory.createEditor(this.options);
    this.components.toolbar = ComponentsFactory.createToolbar(this.components.editor, this.options);

    container.appendChild(this.components.toolbar);
    container.appendChild(this.components.editor);
  }

  /**
   * Sets the content of the editor.
   * @param content - The content to set in the editor.
   */
  public setContent(content: string) {
    if (this.components.editor) {
      this.components.editor.innerHTML = content;
    }
  }

  /**
   * Gets the content of the editor.
   * @returns The editor's content as a string.
   */
  public getContent(): string {
    return this.components.editor?.innerHTML || '';
  }

  /**
   * Destroys the editor instance.
   */
  public destroy() {
    if (this.components.container) {
      this.components.container.innerHTML = '';
    }
    // Additional cleanup if necessary
  }
}
