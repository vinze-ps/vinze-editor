import {Actions} from "./actions.ts";
import {VEOptions, VEToolbarButton} from "../types.ts";

/**
 * Class representing the components factory.
 */
export class ComponentsFactory {
  /**
   * Creates the editor component.
   * @returns The editor HTMLElement.
   */
  public static createEditor(options?: VEOptions): HTMLElement {
    const editor = document.createElement('div');
    editor.setAttribute("autocomplete", "off");
    editor.contentEditable = 'true';
    editor.autocapitalize = 'off';
    editor.spellcheck = false;
    editor.translate = false;
    editor.tabIndex = 0;
    editor.classList.add('editor');

    editor.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();

        // Create a new <p> element
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = '<br>'; // Ensures the cursor is inside the new <p>

        // Get the current selection
        const selection = window.getSelection();
        if (!selection) return;

        const range = selection.getRangeAt(0);
        range.deleteContents();

        // Insert the new <p> after the current block element
        range.collapse(false);
        // range.insertNode(newParagraph);

        // // Move the cursor inside the new <p>
        // selection.removeAllRanges();
        // const newRange = document.createRange();
        // newRange.setStart(newParagraph, 0);
        // newRange.collapse(true);
        // selection.addRange(newRange);
      }
    });

    function ensureMinimumContent() {
      if (editor.innerHTML.trim() === '') {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = '<br>';
        editor.appendChild(paragraph);
      }
    }

    editor.addEventListener('focus', ensureMinimumContent);
    editor.addEventListener('blur', ensureMinimumContent);

    if (options?.initialContent) {
      editor.innerHTML = options.initialContent;
    }

    return editor;
  }

  /**
   * Creates the toolbar component.
   * @returns The toolbar HTMLElement.
   */
  public static createToolbar(editor: HTMLElement, options?: VEOptions): HTMLElement {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    const buttons: VEToolbarButton[] = options?.toolbarButtons || ['BOLD', 'ITALIC', 'UNDERLINE'];

    buttons.forEach((buttonType) => {
      const button = this.createToolbarButton(editor, buttonType);
      toolbar.appendChild(button);
    });

    return toolbar;
  }

  /**
   * Creates a toolbar button based on the given type.
   * @param type - The type of the button (e.g., 'bold', 'italic').
   * @returns The button HTMLElement.
   */
  private static createToolbarButton(editor: HTMLElement, type: VEToolbarButton): HTMLElement {
    const button = document.createElement('button');
    button.classList.add('toolbar__button');
    button.innerHTML = this.getButtonIcon(type);

    button.addEventListener('click', () => {
      Actions.applyFormatting(editor, type);
    });

    return button;
  }

  /**
   * Gets the button icon HTML based on the type.
   * @param type - The type of the button.
   * @returns The HTML string of the icon.
   */
  private static getButtonIcon(type: string): string {
    const icons: { [key: string]: string } = {
      bold: '<b>B</b>',
      italic: '<i>I</i>',
      underline: '<u>U</u>',
    };
    return icons[type] || type;
  }
}
