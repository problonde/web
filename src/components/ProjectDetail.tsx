import React from "react";
import styled from "styled-components";

import { Body, Header, Asset } from ".";

export function ProjectDetail({ project }: any) {
  const { projectName, mainImage, body } = project;

  return (
    <Wrapper>
      <Asset assetId={mainImage.sys.id} />
      <Header>{projectName}</Header>
      <Body content={body.content} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 190px;
`;
