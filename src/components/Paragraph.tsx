import React from "react";
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
};

const contentToTag = (content: Content) => {
  switch (content.nodeType) {
    case "text":
      return content.value;
    case "hyperlink":
      return <Link href={content.data.uri}>{content.content[0].value}</Link>;
    default:
      return content;
  }
};

export function Paragraph({ content }: Props) {
  return <P>{content.map((inner: Content) => contentToTag(inner))}</P>;
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
