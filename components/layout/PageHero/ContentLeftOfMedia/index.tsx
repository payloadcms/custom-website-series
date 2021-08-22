import React from 'react';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { Type as MediaType } from '../../../../collections/Media';
import RichText from '../../../RichText';
import GridContainer from '../../GridContainer';
import useStyles from './css';
import Media from '../../../Media';

type Props = {
  content: unknown
  title: string
  media?: MediaType
}

const ContentLeftOfMediaPageHero: React.FC<Props> = ({ title, content, media }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <GridContainer>
        <Grid>
          <Cell
            cols={10}
            colsM={8}
          >
            <div className={classes.content}>
              <p className={classes.title}>
                {title}
              </p>
              <RichText
                className={classes.richText}
                content={content}
              />
            </div>
          </Cell>
        </Grid>
      </GridContainer>
      <div className={classes.media}>
        <Media {...media} />
      </div>
    </div>
  );
};

export default ContentLeftOfMediaPageHero;
