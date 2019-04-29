import R from "ramda";
import { ViewStyle, TextStyle } from "react-native";
import { Theme, lightTheme } from "@trainer-road/trc-core";
import { IconProps } from "./icon";

export interface IconStyles {
    root: Partial<ViewStyle>;
    content: Partial<TextStyle>;
}

export function getIconStyles(args: { theme: Partial<Theme>; props: IconProps }): IconStyles {
    const iconStyles: any = R.pathOr(lightTheme.icon, ["theme", "icon"], args);
    const status: string = R.pathOr("default", ["props", "status"], args);
    const color = iconStyles[status];

    const root =
        // @css
        {
            alignItems: "center" as ViewStyle["alignItems"],
            justifyContent: "center" as ViewStyle["justifyContent"],
            width: 24,
            height: 24,
        };

    const content = {
        textAlign: "center" as TextStyle["textAlign"],
        fontFamily: "tr-icons",
        lineHeight: 24,
        color,
    };

    return {
        root,
        content,
    };
}
