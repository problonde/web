import React from 'react';
import styled from 'styled-components';

import { useAsset } from '../hooks/contentful';

export function Image({ assetId }) {
  const { data, loading } = useAsset(assetId);
  const { fields } = data;

  if (loading) {
    return null;
  }

  return (
    <InnerImage src={fields.file.url} />
  );
}

const InnerImage = styled.img`
  width: 100%;
`;
