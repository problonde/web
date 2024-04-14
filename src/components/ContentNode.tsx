import React from "react";

import { WrappedAsset, Paragraph } from ".";

type NodeType = "paragraph" | "embedded-asset-block";

type Props = {
  data: any;
  content: any;
  nodeType: NodeType;
  className?: string;
};

export function ContentNode({ data, className, content, nodeType }: Props) {
  switch (nodeType) {
    case "paragraph":
      return <Paragraph className={className} content={content} />;
    case "embedded-asset-block":
      return (
        <WrappedAsset className={className} assetId={data.target.sys.id} />
      );
    default:
      throw new Error("unhandled content type");
  }
}
