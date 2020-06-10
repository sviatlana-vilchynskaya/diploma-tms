import { createUseStyles } from 'react-jss';

const BasketStyle = ({ palette, typography }) => ({
  basket__count: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '15px',
    height: '15px',
    fill: 'currentColor',
    cursor: 'pointer',
  },
  icon: {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
  },

  count: {
    display: 'inline-flex',
    fontWeight: typography.fontWeightRegular,
    textTransform: typography.fontSizeSmall,
    color: 'black',
  },

});
export default createUseStyles(BasketStyle);
