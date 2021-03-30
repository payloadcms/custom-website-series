import React from 'react';
import useStyles from './css';

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      Footer
    </footer>
  );
};

export default Footer;
