import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div>
      <RichText
        content={content}
      />
    </div>
  );
};

export default Content;
