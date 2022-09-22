import React from "react";
import styled from "styled-components";

import { useAsset } from "../hooks/contentful";

export function Asset({ assetId }: { assetId: string }) {
  const { data, loading } = useAsset(assetId);
  const { fields, metadata } = data;

  if (loading) {
    return null;
  }

  const type = fields.file.contentType.split("/")[0];
  const tags = metadata.tags.map((tag: any) => tag.sys.id);

  const ChosenWrapper = tags.includes("wide") ? Wrapper : NarrowWrapper;

  return (
    <ChosenWrapper>
      { type === "image" ? (
        <Image src={fields.file.url} />
      ) : (
        <Video controls>
          <source src={fields.file.url} />
        </Video>
      )}
    </ChosenWrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 60px;
`;

const NarrowWrapper = styled(Wrapper)`
  padding-left: 100px;
  padding-right: 100px;
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
`;
