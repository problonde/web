import { createGlobalState } from "react-use";

export type Background = {
  full: boolean;
  color: string;
};
export const useGlobalBackground = createGlobalState<Background>({ full: true, color: "#FFFFFF" });
