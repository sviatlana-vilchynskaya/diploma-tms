import { createUseStyles } from 'react-jss';

const MainBodyHeaderStyle = ({ palette, typography }) => ({
  Products__sort_wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.background.cart,
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '30px',
  },

  Products__sort_value: {
    display: 'block',
    fontSize: '1.17em',
    marginInlineStart: '0',
    marginInlineEnd: '0',
    fontWeight: typography.fontWeightRegular,
  },
});
export default createUseStyles(MainBodyHeaderStyle);
