import React, { useEffect } from 'react';
import { ModalProvider } from '@faceless-ui/modal';
import { GridProvider } from '@faceless-ui/css-grid';
import App from 'next/app';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import Header from '../components/layout/Header';
import useStyles from '../css/app';
import zIndex from '../css/zIndex';
import breakpoints from '../css/breakpoints';
import { base } from '../css/base';
import { Type as MegaMenuType } from '../globals/MegaMenu';
import { Type as FooterType } from '../globals/Footer';
import { Type as SocialMediaType } from '../globals/SocialMedia';

type AppProps = {
  pageProps: unknown
  Component: React.FC<{ footer: FooterType, socialMedia: SocialMediaType}>
} & {
  megaMenu: MegaMenuType
  footer: FooterType
  socialMedia: SocialMediaType
};

const MyApp = (appProps: AppProps): React.ReactElement => {
  const classes = useStyles();
  const { Component, pageProps, megaMenu, footer, socialMedia } = appProps;

  useEffect(() => {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <WindowInfoProvider breakpoints={breakpoints}>
      <ModalProvider zIndex={zIndex.modal}>
        <GridProvider
          rowGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          colGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          cols={{
            s: 8,
            m: 8,
            l: 12,
            xl: 12,
          }}
          >
          <div className={classes.app}>
            <Header megaMenu={megaMenu} socialMedia={socialMedia} />
            <Component {...pageProps} footer={footer} socialMedia={socialMedia} />
          </div>
        </GridProvider>
      </ModalProvider>
    </WindowInfoProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [megaMenu, footer, socialMedia] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mega-menu`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/social-media`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    megaMenu,
    footer,
    socialMedia,
  };
};

export default MyApp;
