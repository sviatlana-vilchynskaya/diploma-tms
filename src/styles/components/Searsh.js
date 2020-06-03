import { createUseStyles } from 'react-jss';

const SearchStyle = ({ typography }) => ({
  input: {
    width: '400px',
    height: '35px',
    borderStyle: 'none',
    borderRadius: '4px 0 0 4px',
    fontSize: typography.fontSizeNormal,
    paddingLeft: '5px',
  },
  button: {
    width: '70px',
    height: '35px',
    borderStyle: 'none',
    borderRadius: '0 4px 4px 0',
  },
  inputWrap: {
    marginBlockEnd: '20px',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'auto',
}
});

export default createUseStyles(SearchStyle);
