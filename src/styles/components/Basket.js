import { createUseStyles } from 'react-jss';

const BasketStyle = ({ palette, typography }) => ({
  basket__count: {
    fontSize: typography.fontSizeSmall,
    fontWeight: typography.fontWeightRegular,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '15px',
    height: '15px',
    color: palette.common.white,
    background: palette.primary.main,
    transform: 'translateY(-7px)',
    borderRadius: '50%',
  },
  basket__amount: {
    fontSize: typography.fontSizeSmall,
    textTransform: 'lowercase',
    color: '#c1c1c2',
    cursor: 'pointer',
  },
  basket__amount_sum: {
    fontSize: typography.fontSizeSmall,
    cursor: 'pointer',
  },
});
export default createUseStyles(BasketStyle);
