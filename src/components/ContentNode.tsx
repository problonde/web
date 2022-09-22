import React from "react";

import { Paragraph } from "./paragraph";
import { Asset } from "./asset";

enum NodeType {
  ParagraphNode = "paragraph",
  AssetNode = "embedded-asset-block",
}

type Props = {
  data: any;
  content: any;
  nodeType: NodeType;
};

export function ContentNode({ data, content, nodeType }:Props) {
  switch (nodeType) {
    case NodeType.ParagraphNode:
      return (<Paragraph content={content} />);
    case NodeType.AssetNode:
      return (<Asset assetId={data.target.sys.id} />);
    default:
      throw new Error("unhandled content type");
  }
}
