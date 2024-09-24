import './style.css';

class TextEditor {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.init();
  }

  init() {
    this.container.contentEditable = 'true';
    this.container.classList.add('text-editor-content');
  }

  format(command: string, value: string | null = null) {
    console.log(command, value);
    // document.execCommand(command, false, value);
  }
}

export default TextEditor;
