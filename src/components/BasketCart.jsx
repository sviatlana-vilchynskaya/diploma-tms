import React from 'react';
import { object } from 'prop-types';

// Styles
import useStyles from '../styles/components/BasketCart';
// Components
import Button from './Button';


const BasketCart = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      <div id="Content" className="container">
        <div className={`${classes.content} row`}>
          <div className={classes.img}>
            <img src={product.image_url} alt="" />
          </div>
          <div className={classes.title}>
            <p className={classes.product__text}>{product.name}</p>
            <p
              className={classes.product__description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <Button product={product} />
        </div>
      </div>
    </>
  );
};

BasketCart.propTypes = {
  product: object.isRequired,
};
export default BasketCart;
