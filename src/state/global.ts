import { createGlobalState } from "react-use";

export type BackgroundType = "Full" | "Half" | "Animated";
export type Background = {
  type: BackgroundType;
  color: string;
};

export const useGlobalBackground = createGlobalState<Background>({
  type: "Animated",
  color: "#FFFFFF",
});
