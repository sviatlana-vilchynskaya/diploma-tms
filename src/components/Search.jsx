import React, { useState } from 'react';
import { object } from 'prop-types';
// Hooks
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
// styles
import useStyles from '../styles/components/Searsh';
// actions
import { searchBeers } from '../actions';


const Search = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleInput = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (value === '') {
      history.push('/');
      dispatch(searchBeers(value));
    } else if (value !== '') {
      history.push('/search');
      dispatch(searchBeers(value));
    }
  };


  return (
    <form onSubmit={handleSearch}>
      <div className={classes.inputWrap}>
        <input className={classes.input} onChange={handleInput} id="search" type="text" placeholder="Search for beer..." value={value} />
        <button type="submit" className={classes.button}>Search</button>
      </div>
    </form>
  );
};

Search.displayName = 'Search';

Search.propTypes = {
  history: object.isRequired,
};

export default withRouter(Search);
