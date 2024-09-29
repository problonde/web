import { useLocation } from "react-router-dom";

export function useIsHome(): boolean {
  const location = useLocation();
  // eslint-disable-next-line
  return !!location.pathname.match(/^\/(pl|en)[\/]?$/);
}
