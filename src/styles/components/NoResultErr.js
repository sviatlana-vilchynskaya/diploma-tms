import { createUseStyles } from 'react-jss';

const NoResultErrStyle = ({ palette, typography }) => ({

  imgErr: {
    height: '80px',
    width: '50px',
    objectFit: 'contain',
    alignItems: 'center',
  },
});

export default createUseStyles(NoResultErrStyle);
