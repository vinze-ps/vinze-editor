import './style.css';

class TextEditor {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  init() {
    this.container.contentEditable = 'true';
    this.container.classList.add('border', 'p-2', 'min-h-[200px]');
  }

  // format(command: string, value: string | null = null) {
  //   document.execCommand(command, false, value);
  // }
}

export default TextEditor;