import type { CSSProperties } from 'vue';

export interface IMainLayoutProps {
  title: String;
  switchThemeMain: CSSProperties;
  switchThemeHeaderFooter: CSSProperties;
}

export interface IHeaderProps {
  title: String;
}

export interface IFooterProps {
  title: String;
}
