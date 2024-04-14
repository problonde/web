import React, { Fragment } from "react";
import styled from "styled-components";

type Text = {
  nodeType: "text";
  value: string;
};

type Hyperlink = {
  nodeType: "hyperlink";
  content: [Text];
  data: {
    uri: string;
  };
};

type Content = Text | Hyperlink;

type Props = {
  content: Content[];
  className?: string;
};

function contentToTag(content: Content) {
  switch (content.nodeType) {
    case "text":
      return <Fragment key={content.value}>{content.value}</Fragment>;
    case "hyperlink":
      return (
        <Link key={content.data.uri} href={content.data.uri}>
          {content.content[0].value}
        </Link>
      );
    default:
      return null;
  }
}

export function Paragraph({ className, content }: Props) {
  return (
    <P className={className}>
      {content.map((inner: Content) => contentToTag(inner))}
    </P>
  );
}

const P = styled.p`
  font-size: 1.8rem;
  line-height: 2.25rem;
  margin: 0 auto;
  max-width: 63rem;
  padding: 0 6rem 4rem;
  white-space: pre-line;
`;

const Link = styled.a`
  color: #000000;
  text-decoration-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.2s;

  &:hover {
    text-decoration-color: rgba(0, 0, 0, 1);
  }
`;
