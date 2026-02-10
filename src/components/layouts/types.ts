export interface IMainLayoutProps {
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
