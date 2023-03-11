import React from "react";
import styled from "styled-components";

import { useAsset } from "../hooks/contentful";

type Props = {
  assetId: string;
  className?: string;
};
export function Asset({ assetId, className }: Props) {
  const { data, loading } = useAsset(assetId);
  const { fields } = data;

  if (loading) {
    return null;
  }

  const type = fields.file.contentType.split("/")[0];

  return type === "image" ? (
    <Image className={className} src={fields.file.url} />
  ) : (
    <Video className={className} controls>
      <source src={fields.file.url} />
    </Video>
  );
}

const Image = styled.img`
  display: block;
`;

const Video = styled.video`
  width: 100%;
`;
