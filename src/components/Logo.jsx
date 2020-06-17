import React from 'react';

// Styles (hooks)
import useStyles from '../styles/components/Logo';

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>Beans Love Bears</div>
  );
};

Logo.displayName = 'Logo';

export default Logo;
