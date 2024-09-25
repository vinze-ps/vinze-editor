export class ComponentsUtils {
  editor: {
    create: () => HTMLElement;
  }

  toolbar: {
    create: () => HTMLElement;
    components: {
      bold: {
        create: () => HTMLElement;
      }
    }
  }

  constructor() {
    this.editor = {
      create: this._createEditor,
    };

    this.toolbar = {
      create: this._createToolbar,
      components: {
        bold: {
          create: this._createBoldButton,
        },
      },
    };
  }

  _createEditor(): HTMLElement {
    const editor = document.createElement('div');
    editor.classList.add('editor');
    editor.contentEditable = 'true';
    return editor;
  }

  _createToolbar(): HTMLElement {
    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    return toolbar;
  }

  _createBoldButton(): HTMLElement {
    const button = document.createElement('button');
    button.classList.add('toolbar__button');
    button.innerHTML = 'B';
    return button;
  }
}
