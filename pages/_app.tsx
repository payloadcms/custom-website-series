import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import useStyles from '../css/app';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <div className={classes.app}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
