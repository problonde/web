import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "../types";

export function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${Language.Polish}`);
  });

  return null;
}
