import { StatusBarStyle } from "react-native";
import { Theme, statusBarCore } from "@trainerroad/trc-core";
export interface StatusBarStyles {
    color: StatusBarStyle;
}
export declare function getStatusBarStyles(args: {
    theme: Partial<Theme>;
    statusBarCore: typeof statusBarCore;
}): StatusBarStyles;
