import React from 'react';

import useStyles from '../styles/components/Loader';

import withDisplay from '../HOCs/withDisplay';


const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.Loader}>
      <div className={classes.Loader__child}>Loading...</div>
    </div>
  );
};

Loader.displayName = 'Loader';

export default withDisplay(Loader);
