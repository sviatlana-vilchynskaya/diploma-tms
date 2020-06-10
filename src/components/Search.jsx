import React from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';

import useStyles from '../styles/components/Searsh';

import { searchProducts } from '../actions';

// eslint-disable-next-line no-shadow
const Search = ({ searchProducts, ...props }) => {
  const classes = useStyles();

  const handleInput = (event) => {
    event.preventDefault();
    searchProducts({ productsOrigin: props.productsOrigin, searchString: event.target.value });
  };

  return (
    <form>
      <div className={classes.inputWrap}>
        <input className={classes.input} onInput={handleInput} id="search" type="text" placeholder="Search for beer..." />
        <button className={classes.button}>Search</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  searchProducts,
};

const mapStateToProps = (state) => ({
  productsOrigin: state.productsOrigin,

});

Search.propTypes = {
  productsOrigin: array,
  searchProducts: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
