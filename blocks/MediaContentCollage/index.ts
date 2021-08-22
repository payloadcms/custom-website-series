import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import link, { Type as LinkType } from '../../fields/link';
import { Type as MediaType } from '../../collections/Media';

export type Media = {
  media: MediaType
}

export type Type = {
  backgroundColor: BackgroundColorType
  content: unknown
  enableCTA: boolean
  link: LinkType
  media: Media[]
  blockType: 'media-content-collage'
}

const MediaContentCollage: Block = {
  slug: 'media-content-collage',
  labels: {
    singular: 'Media Content Collage',
    plural: 'Media Content Collages',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'enableCTA',
      label: 'Enable Call to Action',
      type: 'checkbox',
    },
    {
      ...link,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.enableCTA),
      },
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 6,
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

export default MediaContentCollage;
