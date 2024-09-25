export class TextFormatterUtils {
  static bold(text: string): string {
    return `<b>${text}</b>`;
  }

  static italic(text: string): string {
    return `<i>${text}</i>`;
  }
}
