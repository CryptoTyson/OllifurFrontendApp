type HeaderType =
  | 'mixed'
  | 'droplist'
  | 'mega'
  | 'navscroll'
  | 'hamburger'
  | 'basic'
  | 'search';
type FooterType = 'basic' | 'blog' | 'contact' | 'sitemap';
type CornerType = 'chat' | 'nav';

interface UIState {
  header: HeaderType;
  footer: FooterType;
  corner: CornerType;
}

const uiState: UIState = {
  header: 'droplist',
  footer: 'basic',
  corner: 'nav',
};

export default uiState;
