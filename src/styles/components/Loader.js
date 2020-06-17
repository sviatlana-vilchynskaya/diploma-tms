import { createUseStyles } from 'react-jss';

const LoaderStyle = ({ palette }) => ({
  Loader: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    backgroundColor: palette.text.secondary,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loader__child: {
    width: '120px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background.cart,
    color: palette.common.black,
    borderRadius: '4px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '.Loader.active': {
    display: 'flex',
  },
});

export default createUseStyles(LoaderStyle);
