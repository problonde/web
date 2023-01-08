import React from "react";
import styled from "styled-components";
import { Body } from "../components";
import { useSimplePage } from "../hooks/contentful";

export function Contact() {
  const {
    data: { fields },
    loading,
  } = useSimplePage("5Fe19933WXX2zoR8u6WCC8");

  if (!fields || loading) {
    return null;
  }
  return (
    <Wrapper>
      <Body content={fields.body.content} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 15rem;
  text-align: center;
`;
