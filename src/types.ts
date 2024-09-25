export interface VEOptions {
  initialContent?: string;
  toolbarButtons?: string[]; // e.g., ['bold', 'italic', 'underline']
}

export interface VEComponents {
  container: HTMLElement;
  editor?: HTMLElement;
  toolbar?: HTMLElement;
}

export interface EditorComponent {
  create: () => HTMLElement;
}

export interface ToolbarComponent {
  create: () => HTMLElement;
}
