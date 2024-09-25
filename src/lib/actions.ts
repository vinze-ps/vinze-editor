import {Helpers} from "./helpers.ts";

/**
 * A class that contains methods for applying formatting to text.
 */
export class Actions {
  /**
   * Applies formatting based on the type using the Selection and Range APIs.
   * @param type - The formatting type (e.g., 'bold', 'italic').
   */
  public static applyFormatting(type: string): void {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    console.log(Helpers.getCurrentSelectionInfo().selection);
    console.log(Helpers.getCurrentSelectionInfo().range);

    if (type === 'bold') {
      this.wrapSelectionInTag(range, 'b');
    } else if (type === 'italic') {
      this.wrapSelectionInTag(range, 'i');
    } else if (type === 'underline') {
      this.wrapSelectionInTag(range, 'u');
    }
  }

  /**
   * Wraps the selected text in a specific HTML tag.
   * @param range - The range of the current selection.
   * @param tagName - The tag name to wrap the selected content with.
   */
  private static wrapSelectionInTag(range: Range, tagName: string): void {
    const wrapper = document.createElement(tagName);
    wrapper.appendChild(range.extractContents());
    range.insertNode(wrapper);

    // Optionally, move the selection inside the newly created wrapper.
    const selection = window.getSelection();
    selection?.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    selection?.addRange(newRange);
  }
}