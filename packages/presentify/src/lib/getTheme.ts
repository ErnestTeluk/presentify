import github from 'prism-react-renderer/themes/github';
import vsDark from 'prism-react-renderer/themes/vsDark';

export const getTheme = (theme: 'dark' | 'light' | undefined) =>
  theme === 'dark' ? vsDark : github;
