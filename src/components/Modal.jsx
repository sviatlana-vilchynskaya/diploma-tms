import React from 'react';
import { array, func } from 'prop-types';

import useStyles from '../styles/components/Modal';
import WithDisplay from '../HOCs/withDisplay';

const Modal = ({ onClick, children }) => {
  const classes = useStyles();

  return (
    <>
      <div role="document" className={classes.modal_background}>
        <div className={classes.modal_root}>
          <a href="#" className={classes.close_btn} onClick={onClick}>×</a>
          <p className={classes.modal_rootText}>Basket</p>
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
