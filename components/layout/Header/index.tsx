import React from 'react';
import { Props } from './types';
import useStyles from './css';

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        Logo
      </div>
      <div>
        Menu
      </div>
    </header>
  );
};

export default Header;
