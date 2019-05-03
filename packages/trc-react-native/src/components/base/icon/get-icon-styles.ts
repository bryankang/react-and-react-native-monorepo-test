import R from "ramda";
import { TextStyle, StyleProp } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { IconProps } from "./icon";


interface Params {
    theme: Partial<Theme>;
    size: NonNullable<IconProps["size"]>;
    status: NonNullable<IconProps["status"]>;
}

export interface IconStyles {
    root: StyleProp<TextStyle>;
}

export function getIconStyles(params: Params): IconStyles {
    const root: StyleProp<TextStyle>[] = [];

    const styles = R.pathOr(lightTheme.icon, ["theme", "icon"], params) as Theme["icon"];
    const color = styles[params.status];
    const length = convertSizeToLength(params.size);

    root.push({
        width: length,
        lineHeight: length,
        fontFamily: "tr-icons",
        textAlign: "center" as TextStyle["textAlign"],
        fontSize: length - 2,
        color,
    });

    return {
        root,
    };
}

function convertSizeToLength(size: NonNullable<IconProps["size"]>): number {
    return {
        xxs: 12,
        xs: 16,
        s: 20,
        m: 24,
        l: 32,
        xl: 40,
        xxl: 56,
    }[size];
}
