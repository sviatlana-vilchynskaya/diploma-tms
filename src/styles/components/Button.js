import { createUseStyles } from 'react-jss';

const ButtonStyle = ({ palette }) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    borderRadius: '4px',
    padding: '0',
    cursor: 'pointer',
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
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

  active: {
    backgroundColor: 'grey',
  },
});
export default createUseStyles(ButtonStyle);
