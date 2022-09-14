import React from 'react';
import styled from 'styled-components';

import { useAsset } from '../hooks/contentful';

export function Image({ assetId }) {
  const { data, loading } = useAsset(assetId);
  const { fields, metadata } = data;

  if (loading) {
    return null;
  }

  const tags = metadata.tags.map((tag) => tag.sys.id);
  const ChosenWrapper = tags.includes('wide') ? Wrapper : NarrowWrapper;
  return (
    <ChosenWrapper>
      <InnerImage src={fields.file.url} />
    </ChosenWrapper>
  );
}

const Wrapper = styled.div`
`;

const NarrowWrapper = styled(Wrapper)`
  padding: 0 100px;
`;

const InnerImage = styled.img`
  width: 100%;
`;
