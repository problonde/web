import React from 'react';
import styled from 'styled-components';

import { Header, Image, ContentNode } from '../elements';

export function ProjectDetail({ project }) {
  const { projectName, mainImage, body } = project;

  return (
    <Wrapper>
      <Image assetId={mainImage.sys.id} />
      <Header>{projectName}</Header>
      {body.content.map((element, index) =>
        <ContentNode key={index} {...element} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;
