import { createUseStyles } from 'react-jss';

const SearchStyle = ({ typography, palette }) => ({
  input: {
    width: '400px',
    height: '35px',
    borderStyle: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: typography.fontSizeNormal,
    padding: '10px',
  },
  button: {
    width: '70px',
    height: '35px',
    borderStyle: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
    backgroundColor: palette.primary.dark,
    color: palette.common.white,
  },
  inputWrap: {
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'auto',
  },
});

export default createUseStyles(SearchStyle);
