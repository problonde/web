import React from "react";

import { WrappedAsset, Paragraph } from ".";

enum NodeType {
  ParagraphNode = "paragraph",
  AssetNode = "embedded-asset-block",
}

type Props = {
  data: any;
  content: any;
  nodeType: NodeType;
  className?: string;
};

export function ContentNode({ data, className, content, nodeType }: Props) {
  switch (nodeType) {
    case NodeType.ParagraphNode:
      return <Paragraph className={className} content={content} />;
    case NodeType.AssetNode:
      return (
        <WrappedAsset className={className} assetId={data.target.sys.id} />
      );
    default:
      throw new Error("unhandled content type");
  }
}
