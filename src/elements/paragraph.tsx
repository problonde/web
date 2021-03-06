import React from 'react';
import styled from 'styled-components';

export function Paragraph({ content }) {
  return (
    <P>
      {content.map(({ value }) => value)}
    </P>
  );
};

const P = styled.p`
  font-size: 30px;
  line-height: 36px;
`;
