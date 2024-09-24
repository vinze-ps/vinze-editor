export class TextFormatter {
  static bold(text: string): string {
    return `<b>${text}</b>`;
  }

  static italic(text: string): string {
    return `<i>${text}</i>`;
  }
}

export function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>?/gm, '');
}
