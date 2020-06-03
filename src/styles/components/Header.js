import { createUseStyles } from 'react-jss';

const HeaderStyle = ({ palette }) => ({
  Header__block: {
    width: '100%',
    background: palette.background.header,
    marginBottom: '15px',
  },

  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: palette.common.white,
  },

  header__logo: {
    color: palette.common.white,
  },

  basket_text: {
    color: palette.common.black,
    padding: '20px',
    textAlign: 'center',
  },
});

export default createUseStyles(HeaderStyle);
