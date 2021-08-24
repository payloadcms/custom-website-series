/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import { Type } from '.';
import useStyles from './css';
import Parallax from '../../components/Parallax';
import Media from '../../components/Media';

const MediaCollage: React.FC<Type> = ({
  media,
}) => {
  const classes = useStyles();
  const image1 = media?.[0];
  const image2 = media?.[1];
  const image3 = media?.[2];


  return (
    <Fragment>
      <div className={classes.topRow}>
        <Parallax
          yDistance={150}
          className={classes.image1}
        >
          <Media
            {...image1.media}
          />
        </Parallax>
        <Parallax
          yDistance={100}
          className={classes.image2}
        >
          <Media
            {...image2.media}
          />
        </Parallax>
      </div>
      <div className={classes.bottomRow}>
        <Parallax
          yDistance={50}
        >
          <Media
            {...image3.media}
            className={classes.image3}
          />
        </Parallax>
      </div>
    </Fragment>
  );
};

export default MediaCollage;
