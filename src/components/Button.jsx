import React, { useState, useEffect } from 'react';
import { object, func } from 'prop-types';
import classNames from 'classnames';
// HOCs
import { connect } from 'react-redux';
// action
import {
  addToBasket,
  removeFromBasket,
} from '../actions/basketAction';
// style
import useStyles from '../styles/components/Button';

const Button = ({
  product,
  basket,
  ...props
}) => {
  const [active, stateActive] = useState({ status: true, loader: false });

  const classes = useStyles();

  useEffect(() => {
    if (basket.productsID.find((item) => item === product.id)) {
      stateActive({ status: true, loader: false });
    } else {
      stateActive({ status: false, loader: false });
    }
  }, []);

  useEffect(() => {
    if (active.loader) {
      if (active.status) {
        props.addToBasket({ productsID: product.id});
      } else {
        props.removeFromBasket({ productsID: product.id});
      }
    }
  }, [active.status]);

  const handleClick = (event) => {
    event.preventDefault();
    stateActive((prevState) => ({ status: !prevState.status, loader: true }));
  };

  const activeStatus = basket.productsID.includes(product.id);

  const text = activeStatus ? 'Remove from Basket' : 'Add to Basket';

  return (
    <a onClick={handleClick} href="#">
      {
        activeStatus
        ? (
          <svg className={classes.icon} viewBox="0 0 576 512">
            <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
          </svg>
        )
        : (
            <svg className={classes.icon} viewBox="0 0 576 512">
              <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
            </svg>
        )
      }

    </a>
  );
};

Button.displayName = 'Button';

const mapStateToProps = (state) => ({
  basket: state.basket,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

Button.propTypes = {
  basket: object.isRequired,
  product: object.isRequired,
  addToBasket: func.isRequired,
  removeFromBasket: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
