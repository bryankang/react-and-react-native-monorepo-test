import R from "ramda";
import { ViewStyle, StyleProp, TextStyle } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { ToProp } from "react-spring";
import { PillButtonProps } from "./pill-button";

export interface PillButtonStyles {
    root: StyleProp<ViewStyle>;
    rootAnimation: {
        from: ToProp<ViewStyle>;
        to: ToProp<ViewStyle>;
    };
    content: StyleProp<TextStyle>;
    contentAnimation: {
        from: ToProp<ViewStyle>;
        to: ToProp<ViewStyle>;
    };
    icon: StyleProp<TextStyle>;
}

interface Params {
    theme: Partial<Theme>;
    isDisabled: Required<PillButtonProps["isDisabled"]>;
}

export function getPillButtonStyles(params: Params): PillButtonStyles {
    const defaultStyles = lightTheme.pillButton;
    const styles = R.pathOr(defaultStyles, ["theme", "pillButton"], params) as Theme["pillButton"];

    const root: StyleProp<ViewStyle> = [];
    const rootAnimation: PillButtonStyles["rootAnimation"] = { from: {}, to: {} };
    const content: StyleProp<TextStyle> = [];
    const contentAnimation: PillButtonStyles["contentAnimation"] = { from: {}, to: {} };
    const icon: StyleProp<TextStyle> = [];

    root.push({
        alignItems: "center",
        justifyContent: "center",
        minWidth: 64,
        minHeight: 48,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: styles.borderColor,
        backgroundColor: styles.backgroundColor,
        opacity: params.isDisabled ? .64 : 1,
    });

    content.push({
        opacity: params.isDisabled ? .64 : 1,
    });

    icon.push({
        marginBottom: 2,
    });

    rootAnimation.from = {
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
    };
    rootAnimation.to = {
        backgroundColor: styles.backgroundColorActive,
        borderColor: styles.borderColorActive,
    };

    contentAnimation.from = {
        color: styles.foregroundColor,
    };
    contentAnimation.to = {
        color: styles.foregroundColorActive,
    };

    return {
        root,
        rootAnimation,
        content,
        contentAnimation,
        icon,
    };
}
