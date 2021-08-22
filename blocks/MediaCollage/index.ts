import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';

export type Media = {
  media: MediaType
}

export type Type = {
  media: Media[]
  blockType: 'media-collage'
}

const MediaCollage: Block = {
  slug: 'media-collage',
  labels: {
    singular: 'Media Collage',
    plural: 'Media Collages',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 3,
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

export default MediaCollage;
