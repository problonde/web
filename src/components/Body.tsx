import React from "react";
import { ContentNode } from "./ContentNode";

interface Params {
  content: Array<any>;
}
export function Body({ content }: Params) {
  return (
    <>
      {content.map((element: any, index: number) => (
        <ContentNode
          key={`pd-${element.nodeType}-${index.toString()}`}
          {...element}
        />
      ))}
    </>
  );
}
