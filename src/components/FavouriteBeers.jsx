import React from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { array, object } from 'prop-types';

// Hooks
import { connect } from 'react-redux';
// Components
import Cart from './Cart';
import NoResultErr from './NoResultErr';

const FavouriteBeers = ({ favourite, beers }) => {


  const { beersID } = favourite;

  const favouritesBeers = beers.filter((beer) => beersID.includes(beer.id));


  return (
    <Route path="/favourites">
      {favouritesBeers.length
        ? favouritesBeers.map((beer) => (
          <Cart
            key={beer.id}
            beer={beer}
          />
        ))
        : (<NoResultErr />)}
    </Route>

  );
};

FavouriteBeers.displayName = 'FavouriteBeers';

const mapStateToProps = (state) => ({
  beers: state.beers,
  favourite: state.favourite,
});

FavouriteBeers.propTypes = {
  beers: array.isRequired,
  favourite: object.isRequired,
};

export default compose(
  connect(
    mapStateToProps,
  ),
)(FavouriteBeers);
