import React, { useState } from 'react';
import { compose } from 'redux';

import {
  number,
  array,
  shape,
} from 'prop-types';

// HOCs
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// HOOKs
import { useHistory } from 'react-router-dom';
// Styles
import useStyles from '../styles/components/Header';
// Components
import Basket from './Basket';
import Modal from './Modal';
import BasketCart from './BasketCart';
import ThemeSwitcher from './ThemeSwicher';


const Header = ({ basket, products }) => {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push('/');
  };

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const { count, productsID } = basket;
  const basketProduct = products.filter((item) => productsID.includes(item.id));

  return (
    <header className={classes.Header__block}>
      <div className="container row">
        <div className={classes.Header__container}>
          <div className={classes.block}>
            <a href="#" onClick={handleClick} className={classes.header__logo}>Beans Love Beers</a>
          </div>

          <div className={classes.block}>
            <ThemeSwitcher />
            <div href="#" onClick={handleClick} className={classes.element}>Home</div>
            <Basket onClick={openModal} count={count} />
            <Modal display={modalActive} onClick={closeModal}>
              {basketProduct.length
                ? basketProduct.map((item) => (
                  <BasketCart
                    key={item.id}
                    product={item}
                  />
                ))
                : (<div className={classes.basket_text}>You have not selected your favorite product.&#128524;</div>)}
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};


Header.displayName = 'Header';

Header.propTypes = {
  basket: shape({
    count: number.isRequired,
  }).isRequired,
  products: array.isRequired,
};


const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products.current,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Header);
