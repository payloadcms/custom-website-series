import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';

export type Media = {
  media: MediaType
  content?: string
}

export type Type = {
  backgroundColor: BackgroundColorType
  content?: unknown
  media: Media[]
  blockType: 'media-grid'
}

const MediaGrid: Block = {
  slug: 'media-grid',
  labels: {
    singular: 'Media Grid',
    plural: 'Media Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default MediaGrid;
