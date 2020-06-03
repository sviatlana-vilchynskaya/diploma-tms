import { createUseStyles } from 'react-jss';

const CartStyle = ({ palette, typography }) => ({
  content: {
    backgroundColor: palette.background.cart,
    borderRadius: '7px',
    padding: '15px',
    margin: '20px 0 20px 0',
  },
  title: {
    color: palette.text.primary,
    height: '97px',
    width: '377px',
    paddingTop: '10px',
  },
  img: {
    height: '120px',
    width: '175px',
    objectFit: 'contain',
  },
  product__text: {
    display: 'flex',
    flexDirection: 'column',
  },
  product__description: {
    paddingTop: '20px',
    fontSize: typography.fontSizeNormal,
  },
  product__price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  text_width: {
    paddingTop: '10px',
    width: '377px',
  },

  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.common.white,
    borderRadius: '4px',
  },
});
export default createUseStyles(CartStyle);
