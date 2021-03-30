import React from 'react';
import useStyles from './css';

const GridContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.gridContainer}>
      {children}
    </div>
  );
};

export default GridContainer;
