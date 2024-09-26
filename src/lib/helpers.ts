export class Helpers {
  public getSelectionDetails() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);
    const content = range.cloneContents();

    return {
      text: selection.toString(),
      html: content,
      startContainer: range.startContainer,
      endContainer: range.endContainer,
    };
  }

  public static normalizeEditorContent(editor: HTMLElement) {
    // Traverse the editor's child nodes
    const nodes = editor.querySelectorAll('*');

    nodes.forEach((node) => {
      // Remove empty formatting elements
      if (['B', 'I', 'U', 'SPAN'].includes(node.tagName) && node.textContent?.trim() === '') {
        node.parentNode?.removeChild(node);
        return;
      }

      // Merge adjacent identical elements
      let next = node.nextSibling as HTMLElement;
      while (next && next.nodeType === Node.ELEMENT_NODE && next.tagName === node.tagName) {
        // Move the content from the next node into the current node
        while (next.firstChild) {
          node.appendChild(next.firstChild);
        }
        // Remove the now-empty next node
        next.parentNode?.removeChild(next);
        next = node.nextSibling as HTMLElement;
      }
    });
  }
}
