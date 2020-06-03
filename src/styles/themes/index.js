import mainTheme from 'styles/themes/main';
import lightTheme from 'styles/themes/light';
import darkTheme from 'styles/themes/dark';

export default {
  light: {
    ...mainTheme,
    ...lightTheme,
  },
  dark: {
    ...mainTheme,
    ...darkTheme,
  },
};
