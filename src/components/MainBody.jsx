import React from 'react';
import { array } from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom';

//components
import Cart from './Cart';
import Content from './Content';

// styles
import useStyles from '../styles/components/MainBody';



const MainBody = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.MainBody}>
      <main className={classes.container}>
        <Switch>
          <Route path="/" exact>
            {props.products.map((product) => (
              <div>
                <Content
                  key={product.id}
                  product={product}
                />
              </div>
            ))}
          </Route>
          <Route path="/:id">
            <Cart
              products={props.products}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.current,
});

MainBody.propTypes = {
  products: array.isRequired,
};

export default compose(
  connect(mapStateToProps),
)(MainBody);
