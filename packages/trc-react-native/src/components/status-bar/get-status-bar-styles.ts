import * as R from "ramda";
import { StatusBarStyle } from "react-native";
import { Theme, lightTheme, statusBarCore } from "@trainerroad/trc-core";

export interface StatusBarStyles {
    color: StatusBarStyle;
}

export function getStatusBarStyles(args: {
    theme: Partial<Theme>;
    statusBarCore: typeof statusBarCore;
}): StatusBarStyles {
    const backgroundColor: string = R.pathOr(lightTheme.backgroundColor, ["theme", "backgroundColor"], args);

    const isBackgroundDark = statusBarCore.isDark(backgroundColor);

    const color: StatusBarStyle = isBackgroundDark ? "light-content" : "dark-content";

    return {
        color,
    };
}
