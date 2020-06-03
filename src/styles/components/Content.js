import { createUseStyles } from 'react-jss';

const ContentStyle = ({ palette, typography }) => ({
  content: {
    backgroundColor: palette.background.cart,
    borderRadius: '7px',
    padding: '15px',
    width: '260px',
    height: '160px',
    margin: '0',
    flexWrap: 'wrap',
  },

  content_wrap: {
    width: '870px',
    margin: '0',
    display: 'flex',
  },

  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: palette.common.white,
    borderRadius: '4px',
  },
  title: {
    color: palette.text.primary,
    height: '97px',
    width: '150px',
    paddingTop: '10px',
    fontSize: typography.fontSizeNormal,
    marginLeft: '40px',

  },
  img: {
    height: '80px',
    width: '50px',
    objectFit: 'contain',
    alignItems: 'center',
  },
  product__text: {
    display: 'flex',
    flexDirection: 'column',
  },
  product__description: {
    paddingTop: '5px',
    fontSize: typography.fontSizeNormal,
    display: 'inline-block',
    maxWidth: '130px',
    maxHeight: '90px',
    overflow: 'hidden',
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


});
export default createUseStyles(ContentStyle);
