import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';
import overlap, { Type as OverlapType } from '../../fields/overlap';
import stat, { Type as StatType } from '../../fields/stat';

export type Type = {
  media: {
    media: MediaType
  }
  stats: {
    stat: StatType[]
  }
  blockType: 'media-stat-collage'
} & OverlapType

const MediaStatCollage: Block = {
  slug: 'media-stat-collage',
  labels: {
    singular: 'Media Stat Collage',
    plural: 'Media Stat Collages',
  },
  fields: [
    overlap,
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        stat,
      ],
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 4,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default MediaStatCollage;
