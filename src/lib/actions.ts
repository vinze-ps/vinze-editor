import {Helpers} from "./helpers.ts";
import {VEToolbarButton} from "../types.ts";

/**
 * A class that contains methods for applying formatting to text.
 */
export class Actions {
  /**
   * Applies formatting based on the type using the Selection and Range APIs.
   * @param buttonType - The button type to apply formatting for.
   */
  public static applyFormatting(editor: HTMLElement, buttonType: VEToolbarButton) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);

    // Clone the selected content
    const content = range.cloneContents();

    const tagName = buttonType === "ITALIC" ? "i" : buttonType === "UNDERLINE" ? "u" : "b";

    console.log(selection, range, content, tagName);

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