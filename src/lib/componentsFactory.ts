import {VEOptions} from "../types.ts";
import {Actions} from "./actions.ts";

/**
 * Class representing the components factory.
 */
export class ComponentsFactory {
  private options?: VEOptions;

  constructor(options?: VEOptions) {
    this.options = options;
  }

  /**
   * Creates the editor component.
   * @returns The editor HTMLElement.
   */
  public createEditor(): HTMLElement {
    const editor = document.createElement('div');
    editor.setAttribute("autocomplete", "off");
    editor.contentEditable = 'true';
    editor.autocapitalize = 'off';
    editor.spellcheck = false;
    editor.translate = false;
    editor.tabIndex = 0;
    editor.classList.add('editor');

    if (this.options?.initialContent) {
      editor.innerHTML = this.options.initialContent;
    }

    return editor;
  }

  /**
   * Creates the toolbar component.
   * @returns The toolbar HTMLElement.
   */
  public createToolbar(): HTMLElement {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    const buttons = this.options?.toolbarButtons || ['bold', 'italic', 'underline'];

    buttons.forEach((buttonType) => {
      const button = this.createToolbarButton(buttonType);
      toolbar.appendChild(button);
    });

    return toolbar;
  }

  /**
   * Creates a toolbar button based on the given type.
   * @param type - The type of the button (e.g., 'bold', 'italic').
   * @returns The button HTMLElement.
   */
  private createToolbarButton(type: string): HTMLElement {
    const button = document.createElement('button');
    button.classList.add('toolbar__button');
    button.innerHTML = this.getButtonIcon(type);

    button.addEventListener('click', () => {
      Actions.applyFormatting(type);
    });

    return button;
  }

  /**
   * Gets the button icon HTML based on the type.
   * @param type - The type of the button.
   * @returns The HTML string of the icon.
   */
  private getButtonIcon(type: string): string {
    const icons: { [key: string]: string } = {
      bold: '<b>B</b>',
      italic: '<i>I</i>',
      underline: '<u>U</u>',
    };
    return icons[type] || type;
  }
}
