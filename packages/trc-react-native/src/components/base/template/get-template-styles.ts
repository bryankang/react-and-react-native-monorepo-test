import R from "ramda";
import { StyleProp, ViewStyle, TextStyle, StyleSheet } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { TemplateProps } from "./template";

interface Params {
    theme: Partial<Theme>;
    isDisabled: NonNullable<TemplateProps["isDisabled"]>;
}

export interface TemplateStyles {
    root: StyleProp<ViewStyle>;
    rootAnimationScale: {
        from: number;
        to: number;
    };
}

// Define default styles here
const baseStyles = StyleSheet.create({
    root: {

    },
});

export function getTemplateStyles(params: Params): TemplateStyles {
    const root: StyleProp<ViewStyle> = [baseStyles.root];
    const rootAnimationScale = {} as TemplateStyles["rootAnimationScale"];

    const colors = R.pathOr(lightTheme.colors, ["colors"], params.theme) as Theme["colors"];

    root.push({
        backgroundColor: colors.primary,
    });

    if (params.isDisabled) {
        root.push({
            opacity: .3,
        });
    }

    rootAnimationScale.from = 1;
    rootAnimationScale.to = 2;

    return {
        root,
        rootAnimationScale,
    };
}
