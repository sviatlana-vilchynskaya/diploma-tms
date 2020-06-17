import React from 'react';
import { compose } from 'redux';
import { object } from 'prop-types';
// HOCs
import { withRouter } from 'react-router';
import { connect, useDispatch } from 'react-redux';
// HOOKs
import { Link } from 'react-router-dom';
// Actions
import { searchBeers } from '../actions';
// Styles
import useStyles from '../styles/components/Header';
// Components
import ThemeSwitcher from './ThemeSwicher';
import Logo from './Logo';



const Header = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleHomeLink = (event) => {
    event.preventDefault();
    history.push('/');
    dispatch(searchBeers(''));
  };

  return (
    <header className={classes.Header__block}>
      <div className="container row">
        <div className={classes.Header__container}>
          <div className={classes.block}>
            <Logo />
          </div>
          <div className={classes.block}>
            <ThemeSwitcher />
            <Link to="/" onClick={handleHomeLink} className={classes.element}>Home</Link>
            <Link className={classes.element} to="/favourites">Favourites</Link>
          </div>
        </div>
      </div>
    </header>
  );
};


Header.displayName = 'Header';

Header.propTypes = {
  history: object.isRequired,
};

export default compose(
  withRouter,
  connect(),
)(Header);
