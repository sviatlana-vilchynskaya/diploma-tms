import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { array, object } from 'prop-types';
// hooks
import { connect } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
// components
import Button from './Button';
// styles
import useStyles from '../styles/components/Content';


const Cart = ({ beers = [], ...props }) => {
  const classes = useStyles();
  const [beer, setBeer] = useState({});

  const params = useParams();

  useEffect(() => {
    const { id } = params || {};

    if (beers.length && id) {
      const stateBeer = beers.find((item) => item.id === +id);

      setBeer(stateBeer);
    } else if (props.beer) {
      setBeer(props.beer);
    }
  }, [params]);


  return (
    <>
      <div className={classes.root_cart}>
        <div id="Cart" className={classes.content_cart}>
          <div className={classes.wrap}>
            <div className={classes.img}>
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className={classes.title}>
              <Link to={`/beer/${beer.id}`}>
                <p className={classes.product__text}>{beer.name}</p>
              </Link>
              <p
                className={classes.product__description}
                dangerouslySetInnerHTML={{ __html: beer.description }}
              />
            </div>
            <div>
              <Button beer={beer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cart.displayName = 'Cart';

const mapStateToProps = (state) => ({
  beers: state.beers,
});

Cart.propTypes = {
  beers: array.isRequired,
  beer: object.isRequired,
};
export default compose(
  connect(
    mapStateToProps,
  ),
)(Cart);
