import React, { useEffect } from 'react';
import { bool } from 'prop-types';
import { compose } from 'redux';

// HOCs
import { hot } from 'react-hot-loader/root';
import { connect, useDispatch } from 'react-redux';
// actions
import { getBeers } from '../actions';
// Components
import Loader from './Loader';
import Header from './Header';
import MainBody from './MainBody';

// styles
import RootStyle from '../styles/index';
import useStyles from '../styles/components/App';


const App = ({ load }) => {
  RootStyle();
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBeers());
  }, []);

  return (
    <div className={classes.root}>
      <Loader display={load} />
      <Header />
      <MainBody />
    </div>
  );
};

const mapStateToProps = (state) => ({
  load: state.load,
});

App.displayName = 'App';

App.propTypes = {
  load: bool.isRequired,
};

export default compose(
  hot,
  connect(mapStateToProps),
)(App);
