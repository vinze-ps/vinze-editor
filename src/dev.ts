import './style.css';
import TextEditor from './main';

const editorContainer = document.createElement('div');
editorContainer.id = 'editor';
document.getElementById('app')?.appendChild(editorContainer);

const editor = new TextEditor(editorContainer);

const toolbar = document.createElement('div');
toolbar.className = 'text-editor-toolbar';

const boldButton = document.createElement('button');
boldButton.innerText = 'Bold';
boldButton.onclick = () => editor.format('bold');

const italicButton = document.createElement('button');
italicButton.innerText = 'Italic';
italicButton.onclick = () => editor.format('italic');

toolbar.appendChild(boldButton);
toolbar.appendChild(italicButton);

document.getElementById('app')?.insertBefore(toolbar, editorContainer);
