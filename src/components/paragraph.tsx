import React from "react";
import styled from "styled-components";

type Content = {
    value: string;
};

type Props = {
  content: [Content];
};

export function Paragraph({ content }: Props) {
  return (
    <P>
      {content.map(({ value }: Content) => value)}
    </P>
  );
}

const P = styled.p`
  font-size: 30px;
  line-height: 36px;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 100px 60px;
`;
