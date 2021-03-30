import { createUseStyles } from 'react-jss';
import { gridContainerWidth } from '../../../css/structure';

export default createUseStyles({
  gridContainer: {
    maxWidth: gridContainerWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
