import React, { useEffect } from "react";
import styled from "styled-components";
import { useSimplePage } from "../hooks/contentful";

import { BackgroundType, useGlobalBackground } from "../state/global";
import { Asset } from "./Asset";
import { Body } from "./Body";

export function StudioPage() {
  const [, setBackground] = useGlobalBackground();
  const {
    data: { fields },
    loading,
  } = useSimplePage("4R8U3AHmYFGLsZiYpFPqKZ");

  useEffect(() => {
    setBackground({ type: BackgroundType.Full, color: "#FFFFFF" });
  }, []);

  if (!fields || loading) {
    return null;
  }
  const { image, body } = fields;

  return (
    <Wrapper>
      <SAsset assetId={image.sys.id} />
      <SBody content={body.content} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 3.75rem;
  padding-top: 12rem;
  position: relative;
`;

const SAsset = styled(Asset)`
  position: absolute;
  left: 0;
  top: 12rem;
  width: 50vw;
`;

const SBody = styled(Body)`
  position: relative;
  z-index: 1;
  min-height: 50vw;
  max-width: 80%;
  padding-left: 20%;
  padding-right: 0;
`;
