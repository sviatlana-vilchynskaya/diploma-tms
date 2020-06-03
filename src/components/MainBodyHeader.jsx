import React from 'react';
import useStyles from '../styles/components/MainBodyHeader';
import Search from './Search';


const MainBodyHeader = () => {
  const classes = useStyles();

  return (
    <div>
      <Search />
    </div>
  );
};

export default MainBodyHeader;
