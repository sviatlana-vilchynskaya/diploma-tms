import { createUseStyles } from 'react-jss';

const HeaderStyle = ({ palette }) => ({
  Header__block: {
    width: '100%',
    background: palette.background.header,
    marginBottom: '15px',
    boxShadow: '0 0 3px rgba(0,0,0,0.5)',

  },
  element: {
    padding: '10px',
    marginLeft: '-16px',
    cursor: 'pointer',
    opacity: '1',
    textDecoration: 'none',
    color: palette.common.white,
    '&:hover': {
      opacity: '0.8',
    },
  },

  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: palette.common.white,
  },

  block: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default createUseStyles(HeaderStyle);
