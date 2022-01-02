import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_LANGUAGE } from "./constants";

export const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${DEFAULT_LANGUAGE}`);
  });

  return null;
};
