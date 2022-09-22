import React from "react";
import styled from "styled-components";

import { Paragraph } from "./paragraph";
import { Asset } from "./asset";
import { useAsset } from "../hooks/contentful";

export function ContentNode({ data, content, nodeType }) {
  switch (nodeType) {
    case "paragraph":
      return (<Paragraph content={content} />);
    case "embedded-asset-block":
      return (<Asset assetId={data.target.sys.id} />);
    default:
      throw new Error("unhandled content type");
  }
}
