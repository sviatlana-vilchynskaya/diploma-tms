import { createUseStyles } from 'react-jss';

const MainBodyStyle = ({ palette }) => ({
  MainBody: {
  },

  container: {
    flexWrap: 'wrap',
    display: 'flex',
    maxWidth: '900px',
    justifyContent: 'center',
    margin: '0 auto',
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
