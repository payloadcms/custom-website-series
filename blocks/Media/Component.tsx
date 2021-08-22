import React from 'react';
import GridContainer from '../../components/layout/GridContainer';
import Gutter from '../../components/layout/Gutter';
import { Type } from '.';
import useStyles from './css';
import Parallax from '../../components/Parallax';
import MediaComponent from '../../components/Media';

const Media: React.FC<Type> = (props) => {
  const { media, type } = props;
  const classes = useStyles();

  if (typeof media === 'object') {
    if (type === 'fullscreen') {
      const parallaxDistance = 100;

      return (
        <div className={classes.fullscreen}>
          <Parallax
            className={classes.fullscreenParallax}
            yDistance={parallaxDistance}
          >
            <MediaComponent
              className={classes.fullscreenImage}
              {...media}
            />
          </Parallax>
        </div>
      );
    }

    if (type === 'wide') {
      return (
        <Gutter
          left
          right
        >
          <MediaComponent
            className={classes.wide}
            {...media}
          />
        </Gutter>
      );
    }

    return (
      <GridContainer>
        <MediaComponent
          className={classes.wide}
          {...media}
        />
      </GridContainer>
    );
  }

  return null;
};

export default Media;
