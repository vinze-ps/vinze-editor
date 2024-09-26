export type VEToolbarButton = "BOLD" | "ITALIC" | "UNDERLINE";

export interface VEOptions {
  initialContent?: string;
  toolbarButtons?: VEToolbarButton[];
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
