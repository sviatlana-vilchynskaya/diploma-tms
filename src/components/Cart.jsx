import React from 'react';
import { array } from 'prop-types';

import { useParams } from 'react-router-dom';
// components
import Button from './Button';
// styles
import useStyles from '../styles/components/Cart';
// helpers
import viewNumber from '../helpers/viewNumber';


const Cart = ({ products }) => {
  const classes = useStyles();
  const params = useParams();

  const product = products.find((item) => item.id === params.id) || { price: {} };

  return (
    <div id="Content" className={classes.content}>
      <div className={classes.wrap}>
        <div className={classes.img}>
          <img src={product.image_url} alt="" />
        </div>
        <div className={classes.title}>
          <a className={classes.product__text} href="#">{product.name}</a>
          <p className={classes.product__description} dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div>
          {/*<Button product={product} />*/}
        </div>
      </div>
    </div>
  );
};
Cart.displayName = 'Cart';

Cart.propTypes = {
  products: array.isRequired,
};
export default Cart;
