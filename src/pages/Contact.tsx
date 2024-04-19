import React from "react";
import { Body, ContactWrapper } from "../components";
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
    <ContactWrapper>
      <Body content={fields.body.content} />
    </ContactWrapper>
  );
}
