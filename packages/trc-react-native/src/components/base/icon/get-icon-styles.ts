import R from "ramda";
import { TextStyle, StyleProp } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { IconProps } from "./icon";

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

export interface IconStyles {
    root: StyleProp<TextStyle>;
}

interface Params {
    theme: Partial<Theme>;
    size: NonNullable<IconProps["size"]>;
}

export function getIconStyles(params: Params): IconStyles {
    const color = R.pathOr(lightTheme.emphases.default, ["theme", "emphases", "default"], params) as Theme["emphases"]["default"];

    const root: StyleProp<TextStyle>[] = [];

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
