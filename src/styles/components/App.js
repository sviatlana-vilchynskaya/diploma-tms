import { createUseStyles } from 'react-jss';

const AppStyle = ({ palette }) => ({
  root: {
    backgroundColor: palette.background.default,
    height: '110vh',
  },
  a: {
    textDecoration: 'none',
    color: palette.text.primary,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },

});
export default createUseStyles(AppStyle);
