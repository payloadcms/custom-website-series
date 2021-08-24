import { Block } from 'payload/types';
import { Type as MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'media'
  blockName?: string
  media: MediaType
  caption?: any
  type: 'normal' | 'wide' | 'fullscreen'
}

export const Media: Block = {
  slug: 'media',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ],
      },
    },
  ],
};
