import { createUseStyles } from 'react-jss';

const BasketCartStyle = ({ palette }) => ({
  content: {
    backgroundColor: palette.common.white,
    borderRadius: '7px',
    padding: '15px',
    margin: '20px 0 20px 0',
    display: 'flex',
  },
  title: {
    paddingTop: '10px',
    width: '377px',
    marginLeft: '23px',
    display: 'flex',
    flexDirection: 'column',
    height: '97px',
  },
  img: {
    height: '120px',
    width: '175px',
    objectFit: 'contain',
  },

  product__text: {
    display: 'flex',
    flexDirection: 'column',
    color: palette.common.black,
  },

  textWidth: {
    paddingTop: '10px',
    width: '377px',
  },
  product__description: {
    paddingTop: '20px',
    fontSize: '12px',
    color: palette.common.black,
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    }
  },
  product__price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    color: palette.common.black,
  },

});
export default createUseStyles(BasketCartStyle);
