import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';

// Components
import Content from './Content';
import FavouriteBeers from './FavouriteBeers';
import Cart from './Cart';
import Search from './Search';

// styles
import useStyles from '../styles/components/MainBody';


const MainBody = () => {
  const classes = useStyles();

  return (

    <main className={classes.container}>
      <Switch>
        <Route path="/" exact>
          <div>
            <Search />
            <Content />
          </div>
        </Route>

        <Route path="/search">
          <Search />
          <Content />
        </Route>

        <Route path="/favourites">
          <FavouriteBeers />
        </Route>

        <Route path="/beer/:id">
          <Cart />
        </Route>
      </Switch>
    </main>
  );
};
const mapStateToProps = (state) => ({
  beers: state.beers,
});


MainBody.displayName = 'MainBody';

export default compose(
  connect(mapStateToProps),
)(MainBody);
