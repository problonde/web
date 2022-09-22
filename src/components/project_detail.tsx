import React from "react";
import styled from "styled-components";

import { Header, Asset, ContentNode } from ".";

export function ProjectDetail({ project }: any) {
  const { projectName, mainImage, body } = project;

  return (
    <Wrapper>
      <Asset assetId={mainImage.sys.id} />
      <Header>{projectName}</Header>
      {body.content.map((element, index) => <ContentNode key={index} {...element} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 190px;
`;
