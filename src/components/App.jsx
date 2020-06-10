import React, { useEffect } from 'react';
import { bool, func } from 'prop-types';
import { compose } from 'redux';

// HOCs
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
// actions
import { getData } from '../actions';
// Components
import Loader from './Loader';
import Header from './Header';
import Search from './Search'
import MainBody from './MainBody';

// styles
import RootStyle from '../styles/index';
import useStyles from '../styles/components/App';

const App = (props) => {
  RootStyle();
  const classes = useStyles();

  useEffect(() => {
    props.getData();
  }, []);

  const { load } = props;

  return (
    <div className={classes.root}>
      <Loader display={load} />
      <Header />
      <Search />
      <MainBody />
    </div>
  );
};

const mapStateToProps = (state) => ({
  load: state.load,
});

const mapDispatchToProps = {
  getData,
};

App.displayName = 'App';

App.propTypes = {
  load: bool.isRequired,
  getData: func.isRequired,
};

export default compose(
  hot,
  connect(mapStateToProps, mapDispatchToProps),
)(App);
