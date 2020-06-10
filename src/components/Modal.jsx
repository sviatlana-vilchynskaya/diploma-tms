import React from 'react';
import { array, func } from 'prop-types';

import useStyles from '../styles/components/Modal';
import WithDisplay from '../HOCs/withDisplay';

const Modal = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <>
      <div role="document" onClick={onClick} className={classes.modal_background}>
        <div className={classes.modal_root}>
          <p className={classes.modal_rootText}>Favorites</p>
          {children}
        </div>
      </div>
    </>
  );
};


Modal.propTypes = {
  children: array.isRequired,
  onClick: func.isRequired,
};

export default WithDisplay(Modal);
