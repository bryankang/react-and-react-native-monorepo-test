
import R from "ramda";
import { TextStyle } from "react-native";
import { Theme, lightTheme } from "@trainerroad/trc-core";
import { Text, TextProps } from "./text";

export interface TextStyles {
    root: Partial<TextStyle>;
}

export function getTextStyles(args: { theme: Partial<Theme>; props: TextProps }): TextStyles {
    const propCategory: string = R.pathOr(Text.defaultProps.category, ["props", "category"], args);
    const themeCategories: any = R.pathOr(lightTheme.text.categories, ["theme", "text", "categories"], args);
    const textStyles = themeCategories[propCategory];
    const themeEmphases: any = R.pathOr(lightTheme.text.emphases, ["theme", "emphases"], args);
    const propEmphasis: string = R.pathOr(Text.defaultProps.emphasis, ["props", "emphasis"], args);
    const emphasis = themeEmphases[propEmphasis];
    const color: string = R.pathOr(lightTheme.colors.foreground, ["theme", "colors", "foreground"], args);

    const root = {
        fontFamily: textStyles.fontFamily[0],
        fontSize: textStyles.fontSize,
        fontWeight: `${textStyles.fontWeight}` as TextStyle["fontWeight"],
        lineHeight: textStyles.lineHeight,
        letterSpacing: textStyles.letterSpacing,
        textTransform: textStyles.textTransform,
        opacity: emphasis,
        color,
    };

    return {
        root,
    };
}
