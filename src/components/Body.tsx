import React from "react";
import { ContentNode } from "./ContentNode";

interface Params {
  content: Array<any>;
  className?: string;
}
export function Body({ className, content }: Params) {
  return (
    <>
      {content.map((element: any, index: number) => (
        <ContentNode
          className={className}
          key={`pd-${element.nodeType}-${index.toString()}`}
          {...element}
        />
      ))}
    </>
  );
}
