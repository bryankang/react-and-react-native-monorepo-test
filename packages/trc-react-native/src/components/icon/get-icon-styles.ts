import R from "ramda";
import { TextStyle } from "react-native";
import { Theme, lightTheme } from "@trainerroad/trc-core";
import { IconProps } from "./icon";

export interface IconStyles {
    root: Partial<TextStyle>;
}

export function getIconStyles(args: { theme: Partial<Theme>; props: IconProps }): IconStyles {
    const iconColors: any = R.pathOr(lightTheme.icon, ["theme", "icon", "colors"], args);
    const status: string = R.pathOr("default", ["props", "status"], args);
    const color = iconColors[status];

    const root = {
        textAlign: "center" as TextStyle["textAlign"],
        fontFamily: "tr-icons",
        fontSize: 20,
        lineHeight: 24,
        color,
    };

    return {
        root,
    };
}
