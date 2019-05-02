import { View, Text } from "react-native";
import { animated } from "react-spring/native";

export const AnimatedText = animated(Text) as any; // react-spring doesn't support ts well
export type AnimatedTextProps = typeof AnimatedText;

export const AnimatedView = animated(View) as any; // react-spring doesn't support ts well
export type AnimatedViewProps = typeof AnimatedView;
