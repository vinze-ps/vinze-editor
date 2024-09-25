export class Helpers {
  public static getCurrentSelectionInfo(): { selection: Selection | null; range: Range | null } {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0) ?? null;
    return { selection, range };
  }
}
