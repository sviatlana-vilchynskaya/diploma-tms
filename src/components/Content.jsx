import React from 'react';
import { array } from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
// Hooks
import { connect } from 'react-redux';
// components
import Button from './Button';
import NoResultErr from './NoResultErr';
// style
import useStyles from '../styles/components/Content';


const Content = ({ beers = [] }) => {
  const classes = useStyles();


  if (!beers.length) {
    return (
      <NoResultErr />
    );
  }

  return (
    <>
      <div className={classes.Root}>
        {beers.map((beer) => (
          <div id="Content" className={classes.content} key={beer.id}>
            <div className={classes.wrap}>
              <div className={classes.img}>
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className={classes.title}>
                <Link to={`/beer/${beer.id}`}>
                  <p className={classes.product__text}>{beer.name}</p>
                </Link>
                <p
                  className={classes.product__description}
                  dangerouslySetInnerHTML={{ __html: beer.description }}
                />
              </div>
              <div>
                <Button beer={beer} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Content.displayName = 'Content';

const mapStateToProps = (state) => ({
  beers: state.beers,
});

Content.propTypes = {
  beers: array.isRequired,
};


export default compose(
  connect(
    mapStateToProps,
  ),
)(Content);
