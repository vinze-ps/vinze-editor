import {Helpers} from "./helpers.ts";

/**
 * A class that contains methods for applying formatting to text.
 */
export class Actions {
  /**
   * Applies formatting based on the type using the Selection and Range APIs.
   * @param type - The formatting type (e.g., 'bold', 'italic').
   */
  public static applyFormatting(editor: HTMLElement, tagName: string) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    // Clone the selected content
    const content = range.cloneContents();

    // Create a wrapper element
    const wrapper = document.createElement(tagName);

    // Append the content to the wrapper
    wrapper.appendChild(content);

    // Delete the original content
    range.deleteContents();

    // Insert the new formatted content
    range.insertNode(wrapper);

    // Adjust the selection to the new content
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    selection.addRange(newRange);

    // Normalize the editor content to remove redundant tags
    Helpers.normalizeEditorContent(editor);
  }
}