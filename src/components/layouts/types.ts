import type { CSSProperties } from 'vue';

export interface IMainLayoutProps {
  switchThemeMain: CSSProperties;
  statusDark: boolean;
}

export interface IHeaderProps {
  title: string;
}

export interface IFooterProps {
  title: string;
  statusDark: boolean;
}

export interface IIsDarkEmit {
  toggleTheme: [value: boolean];
}
