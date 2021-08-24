/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';
import { Modal, useModal } from '@faceless-ui/modal';
import { Grid, Cell } from '@faceless-ui/css-grid';
import Icon from '../../graphics/Icon';
import Hamburger from './Hamburger';
import { Props } from './types';
import GridContainer from '../GridContainer';
import LargeBody from '../../type/LargeBody';
import LetsTalk from '../../LetsTalk';
import Link from '../../Link';
import useStyles from './css';

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { currentModal, toggle } = useModal();
  const menuActive = currentModal === menuSlug;
  const classes = useStyles({ menuActive });

  return (
    <header className={classes.header}>
      <NextLink
        href="/"
        scroll={false}
      >
        <a className={classes.logo}>
          <Icon className={classes.icon} />
        </a>
      </NextLink>

      <button
        type="button"
        className={classes.menuButton}
        onClick={() => toggle(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>

      <Modal
        slug={menuSlug}
        className={classes.menu}
      >
        <GridContainer className={classes.gridContainer}>
          <Grid className={classes.navLinks}>
            <Cell
              cols={8}
              htmlElement="nav"
            >
              {megaMenu?.nav?.map(({ link }, i) => (
                <h3
                  style={i === 0 ? { marginTop: 0 } : undefined}
                  key={link.label}
                >
                  <Link
                    {...link}
                    className={classes.primaryNavItem}
                  >
                    {link.label}
                  </Link>
                </h3>
              ))}
            </Cell>

            {(Array.isArray(socialMedia?.links) && socialMedia.links.length > 0) && (
              <Cell cols={3}>
                {socialMedia.links.map(({ url, label }) => (
                  <LargeBody key={label}>
                    <a
                      className={classes.secondaryNavItem}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </LargeBody>
                ))}
              </Cell>
            )}
          </Grid>
        </GridContainer>

        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
