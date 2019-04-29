import { ViewStyle } from "react-native";
import { Theme } from "@trainerroad/trc-core";
export interface CardStyles {
    root: Partial<ViewStyle>;
    content: Partial<ViewStyle>;
}
export declare function getCardStyles(args: {
    theme: Partial<Theme>;
}): CardStyles;
