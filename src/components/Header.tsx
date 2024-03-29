import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export function Header({ children }: Props) {
  return <H2>{children}</H2>;
}

const H2 = styled.h2`
  font-size: 60px;
  line-height: 80px;
  margin: 0 auto 60px;
  max-width: 1000px;
  padding: 0 100px;
`;
