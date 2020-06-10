import React, { useState, useEffect } from 'react';
import { array, object } from 'prop-types';

import { useParams } from 'react-router-dom';
// components
import Button from './Button';
// styles
import useStyles from '../styles/components/Cart';


const Cart = ({ products, ...props }) => {
  const classes = useStyles();
  const [product = {}, setProduct] = useState({ price: {} });

  const params = useParams();

  useEffect(() => {
    const { id } = params;

    if (products.length && id) {
      const stateProduct = products.find((item) => item.id === id);

      setProduct(stateProduct);
    } else if (props.product) {
      setProduct(props.product);
    }
  }, []);


  return (
    <div id="Cart" className={classes.content}>
      <div className={classes.wrap}>
        <div className={classes.img}>
          <img src={product.image_url} alt="" />
        </div>
        <div className={classes.title}>
          <a className={classes.product__text} href="#">{product.name}</a>
          <p className={classes.product__description} dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div>
           <Button product={product} />
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
