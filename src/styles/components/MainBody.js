import { createUseStyles } from 'react-jss';

const MainBodyStyle = ({ palette }) => ({
  MainBody: {
  },

  LastChild: {
    paddingBottom: '15px',
  },
  cart: {
    padding: '20px',
    backgroundColor: palette.background.cart,
    borderRadius: '4px',
  },
});
export default createUseStyles(MainBodyStyle);
