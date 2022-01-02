import React from "react";
import { useParams, Outlet } from "react-router-dom";

export const Lang = () => {
  const { lang } = useParams();

  return (
    <>
      <h1>{lang}</h1>
      <Outlet />
    </>
  );
};
