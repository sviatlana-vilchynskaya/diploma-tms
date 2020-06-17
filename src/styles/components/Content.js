import { createUseStyles } from 'react-jss';

const ContentStyle = ({ palette, typography }) => ({
  Root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(30.3%, 1fr))',
    gridColumnGap: '20px',
    gridRowGap: '20px',
    padding: '20px 0',
  },
  root_cart: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30.3%, 1fr))',
    gridColumnGap: '10px',
    gridRowGap: '10px',
    paddingTop: '20px',
  },
  content_cart: {
    backgroundColor: palette.background.cart,
    borderRadius: '4px',
    width: '260px',
    height: '160px',
    flexWrap: 'wrap',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    gridTemplateColumns: '1fr',
    gridColumnGap: 'unset',
    gridRowGap: 'unset',
    padding: '15px',
    marginLeft: '15px',
  },
  content: {
    backgroundColor: palette.background.cart,
    borderRadius: '4px',
    width: '260px',
    height: '160px',
    flexWrap: 'wrap',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    gridTemplateColumns: '1fr',
    gridColumnGap: 'unset',
    gridRowGap: 'unset',
    padding: '15px',
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
    marginLeft: '15px',

  },
  img: {
    height: '100px',
    width: '60px',
    objectFit: 'contain',
    marginTop: '10px',
  },
  product__text: {
    display: 'flex',
    flexDirection: 'column',
    color: palette.common.black,
  },
  product__description: {
    paddingTop: '5px',
    fontSize: typography.fontSizeNormal,
    display: '-webkit-box',
    maxWidth: '200px',
    '-webkit-line-clamp': '5',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      overflowY: 'auto',
    },
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
