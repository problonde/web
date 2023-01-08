import { createGlobalState } from "react-use";

export enum BackgroundType {
  Full,
  Half,
  Animated
}
export type Background = {
  type: BackgroundType;
  color: string;
};
export const useGlobalBackground = createGlobalState<Background>({ type: BackgroundType.Animated, color: "#FFFFFF" });
