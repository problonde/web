import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './paragraph';
import { Image } from './image';
import { useAsset } from '../hooks/contentful';

export function ContentNode({data, content, nodeType }) {
  // console.log(data);
  // console.log(content);
  switch (nodeType) {
  case 'paragraph':
    return (<Paragraph content={content} />);
  case 'embedded-asset-block':
    return (<Image assetId={data.target.sys.id} />);
  default:
    throw new Error("unhandled content type")
  };
};
