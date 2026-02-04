import type { CSSProperties } from 'vue';

export interface IMainLayoutProps {
  switchThemeMain: CSSProperties;
  switchThemeHeaderFooter: CSSProperties;
}

export interface IHeaderProps {
  title: string;
}

export interface IFooterProps {
  title: string;
}

export interface IIsDarkEmit {
  toggleTheme: [value: boolean];
}
