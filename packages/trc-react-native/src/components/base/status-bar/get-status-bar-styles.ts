import R from "ramda";
import { StatusBarStyle } from "react-native";
import { Theme, light as lightTheme, statusBarCore } from "@trainerroad/trc-core";

export interface StatusBarStyles {
    color: StatusBarStyle;
}

interface Params {
    theme: Partial<Theme>;
    statusBarCore: typeof statusBarCore;
}

export function getStatusBarStyles(params: Params): StatusBarStyles {
    const backgroundColor: string = R.pathOr(lightTheme.backgroundColor, ["theme", "backgroundColor"], params);
    const isBackgroundDark = statusBarCore.isDark(backgroundColor);
    const color: StatusBarStyle = isBackgroundDark ? "light-content" : "dark-content";

    console.log(backgroundColor)

    return {
        color,
    };
}
