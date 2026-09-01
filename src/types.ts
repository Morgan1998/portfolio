export type ViewFactory = () => HTMLElement;

export type Routes = Record<string, ViewFactory>;
