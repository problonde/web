import React from 'react';
import styled from 'styled-components';

export function Header({ children }) {
  return <H2>{children}</H2>;
}

const H2 = styled.h2`
  font-size: 60px;
  line-height: 80px;
  margin-bottom: 60px;
`;
