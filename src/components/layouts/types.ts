import type { CSSProperties } from 'vue';

export interface IMainLayoutProps {
  title: string;
  switchThemeMain: CSSProperties;
  switchThemeHeaderFooter: CSSProperties;
}

export interface IHeaderProps {
  title: string;
}

export interface IFooterProps {
  title: string;
}
