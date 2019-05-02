
import R from "ramda";
import { TextStyle, StyleProp } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { TextProps } from "./text";

export interface TextStyles {
    root: StyleProp<TextStyle>;
}

interface Params {
    theme: Partial<Theme>;
    category: NonNullable<TextProps["category"]>;
}

export function getTextStyles(params: Params): TextStyles {
    const typographyCategories = R.pathOr(lightTheme.typography, ["typography"], params.theme) as Theme["typography"];
    const styles = typographyCategories[params.category];
    const color = R.pathOr(lightTheme.emphases.default, ["theme", "emphases", "default"], params) as Theme["emphases"]["default"];

    const root = {
        fontFamily: styles.fontFamily[0],
        fontSize: styles.fontSize,
        fontWeight: `${styles.fontWeight}` as TextStyle["fontWeight"],
        lineHeight: styles.lineHeight,
        letterSpacing: styles.letterSpacing,
        textDecorationLine: styles.textDecoration,
        textTransform: styles.textTransform,
        color,
    };

    return {
        root,
    };
}
