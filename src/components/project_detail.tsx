import React from 'react';
import styled from 'styled-components';

import { Header, Image, ContentNode } from '../elements';

export function ProjectDetail({ project }) {
  const { projectName, mainImage, body } = project;

  return (
    <Wrapper>
      <Row>
        <Image assetId={mainImage.sys.id} />
      </Row>
      <Row>
        <Header>{projectName}</Header>
      </Row>
      {body.content.map((element, index) =>
        <Row>
          <ContentNode key={index} {...element} />
        </Row>
      )}
    </Wrapper>
  );
};

const Row = styled.div`
  margin-bottom: 60px;
`;

const Wrapper = styled.div`
`;
