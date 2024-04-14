import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DEFAULT_LANGUAGE } from "../types";

export function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${DEFAULT_LANGUAGE}`);
  });

  return null;
}
