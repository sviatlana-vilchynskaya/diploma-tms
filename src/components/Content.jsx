import React from 'react';
import { object } from 'prop-types';
import { useHistory } from 'react-router-dom';
// components
import Button from './Button';

// style
import useStyles from '../styles/components/Content';


const Content = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/${product.id}`);
  };

  return (
    <div id="Content" className={classes.content}>
      <div className={classes.wrap}>
        <div className={classes.img}>
          <img src={product.image_url} alt="" />
        </div>
        <div className={classes.title}>
          <a onClick={handleClick} className={classes.product__text} href="#">{product.name}</a>
          <p className={classes.product__description} dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div>
          <Button product={product} />
        </div>
      </div>
    </div>

  );
};

Content.displayName = 'Content';

Content.propTypes = {
  product: object.isRequired,
};
export default Content;
