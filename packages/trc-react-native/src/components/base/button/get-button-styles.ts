import R from "ramda";
import { ViewStyle, TextStyle, StyleProp, StyleSheet } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { ButtonProps } from "./button";

const baseStyles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 88,
        height: 40,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 2,
        backgroundColor: lightTheme.button.contained.primary.backgroundColor,
    },
    icon: {
        marginRight: 8,
        lineHeight: 40,
        color: lightTheme.button.contained.primary.foregroundColor,
    },
    text: {
        lineHeight: 40,
        color: lightTheme.button.contained.primary.foregroundColor,
    },
});

export interface ButtonStyles {
    root: StyleProp<ViewStyle>;
    rootAnimationBackgroundColor: {
        from: string;
        to: string;
    };
    rootAnimationBorderColor: {
        from: string;
        to: string;
    };
    icon: StyleProp<TextStyle>;
    text: StyleProp<TextStyle>;
}

interface Params {
    theme: Partial<Theme>;
    color: NonNullable<ButtonProps["color"]>;
    variant: NonNullable<ButtonProps["variant"]>;
    size: NonNullable<ButtonProps["size"]>;
    iconName: Required<ButtonProps["iconName"]>;
    isDisabled: Required<ButtonProps["isDisabled"]>;
    isFluid: Required<ButtonProps["isFluid"]>;
}

export function getButtonStyles(params: Params): ButtonStyles {
    const root: StyleProp<ViewStyle> = [baseStyles.root];
    const rootAnimationBackgroundColor = {} as ButtonStyles["rootAnimationBackgroundColor"];
    const rootAnimationBorderColor = {} as ButtonStyles["rootAnimationBorderColor"];
    const icon: StyleProp<TextStyle> = [baseStyles.icon];
    const text: StyleProp<TextStyle> = [baseStyles.text];

    if (params.isFluid) {
        root.push({
            width: "100%",
        });
    }

    if (params.isDisabled) {
        root.push({
            opacity: .3,
        });
    }

    if (params.size === "s") {
        root.push({
            minWidth: 64,
            height: 28,
            paddingRight: 12,
            paddingLeft: 12,
        });
        icon.push({
            lineHeight: 28,
        });
        text.push({
            lineHeight: 28,
        });
    } else if (params.size === "l") {
        root.push({
            minWidth: 128,
            height: 56,
            paddingRight: 32,
            paddingLeft: 32,
        });
        icon.push({
            lineHeight: 56,
        });
        text.push({
            lineHeight: 56,
        });
    }

    if (params.variant === "contained") {
        const containedButtonTheme = R.pathOr(lightTheme.button.contained, ["button", "contained"], params.theme) as Theme["button"]["contained"];
        const buttonStyles = containedButtonTheme[params.color];

        icon.push({
            color: buttonStyles.foregroundColor,
        });

        text.push({
            color: buttonStyles.foregroundColor,
        });

        rootAnimationBackgroundColor.from = buttonStyles.backgroundColor;
        rootAnimationBackgroundColor.to = buttonStyles.backgroundHoverColor;
        rootAnimationBorderColor.from = "rgba(0,0,0,0)";
        rootAnimationBorderColor.to = "rgba(0,0,0,0)";
    } else if (params.variant === "outlined") {
        const outlinedButtonTheme = R.pathOr(lightTheme.button.outlined, ["button", "outlined"], params.theme) as Theme["button"]["outlined"];
        const buttonStyles = outlinedButtonTheme[params.color];

        root.push({
            borderWidth: 1,
            borderColor: buttonStyles.borderColor,
        });

        icon.push({
            position: "relative",
            top: -1,
            color: buttonStyles.iconForegroundColor,
        });

        text.push({
            position: "relative",
            top: -1,
            color: buttonStyles.textForegroundColor,
        });

        rootAnimationBackgroundColor.from = buttonStyles.backgroundColor;
        rootAnimationBackgroundColor.to = buttonStyles.backgroundColor;
        rootAnimationBorderColor.from = buttonStyles.borderColor;
        rootAnimationBorderColor.to = buttonStyles.borderHoverColor;
    } else if (params.variant === "pill") {
        const pillButtonTheme = R.pathOr(lightTheme.button.pill, ["button", "pill"], params.theme) as Theme["button"]["pill"];
        const buttonStyles = pillButtonTheme[params.color];

        root.push({
            borderWidth: 1,
            borderColor: buttonStyles.borderColor,
        });

        icon.push({
            position: "relative",
            top: -1,
            color: buttonStyles.iconForegroundColor,
        });

        text.push({
            position: "relative",
            top: -1,
            color: buttonStyles.textForegroundColor,
        });

        rootAnimationBackgroundColor.from = buttonStyles.backgroundColor;
        rootAnimationBackgroundColor.to = buttonStyles.backgroundHoverColor;
        rootAnimationBorderColor.from = buttonStyles.borderColor;
        rootAnimationBorderColor.to = buttonStyles.borderHoverColor;
    }

    return {
        root,
        rootAnimationBackgroundColor,
        rootAnimationBorderColor,
        icon,
        text,
    };
}
