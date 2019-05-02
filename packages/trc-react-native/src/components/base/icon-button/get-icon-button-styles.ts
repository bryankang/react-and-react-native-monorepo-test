import R from "ramda";
import { ViewStyle, TextStyle, StyleProp, StyleSheet } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { IconButtonProps } from "./icon-button";

const baseStyles = StyleSheet.create({
    root: {
        alignItems: "center",
        justifyContent: "center",
        minWidth: 44,
        height: 44,
        borderRadius: 2,
    },
    icon: {
        color: lightTheme.button.contained.primary.foregroundColor,
    },
    text: {
        color: lightTheme.button.contained.primary.foregroundColor,
    },
})

export interface IconButtonStyles {
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
    iconAnimationForegroundColor: {
        from: string;
        to: string;
    };
    text: StyleProp<TextStyle>;
    textAnimationForegroundColor: {
        from: string;
        to: string;
    };
}

interface Params {
    theme: Partial<Theme>;
    color: NonNullable<IconButtonProps["color"]>;
    iconName: Required<IconButtonProps["iconName"]>;
    isDisabled: Required<IconButtonProps["isDisabled"]>;
    label: Required<IconButtonProps["label"]>;
    size: NonNullable<IconButtonProps["size"]>;
    variant: NonNullable<IconButtonProps["variant"]>;
}

export function getIconButtonStyles(params: Params): IconButtonStyles {
    const root: StyleProp<ViewStyle> = [baseStyles.root];
    const rootAnimationBackgroundColor = {} as IconButtonStyles["rootAnimationBackgroundColor"];
    const rootAnimationBorderColor = {} as IconButtonStyles["rootAnimationBorderColor"];
    const icon: StyleProp<TextStyle> = [baseStyles.icon];
    const iconAnimationForegroundColor = {} as IconButtonStyles["iconAnimationForegroundColor"];
    const text: StyleProp<TextStyle> = [baseStyles.text];
    const textAnimationForegroundColor = {} as IconButtonStyles["textAnimationForegroundColor"];

    if (params.isDisabled) {
        root.push({
            opacity: .3,
        });
    }

    if (params.size === "s") {
        root.push({
            minWidth: 32,
            height: 32,
        });
    } else if (params.size === "l") {
        root.push({
            minWidth: 56,
            height: 56,
        });
    }

    if (params.label) {
        const rootPaddingVertical = {
            s: 4,
            m: 8,
            l: 12,
        }[params.size];

        const rootPaddingHorizontal = {
            s: 12,
            m: 16,
            l: 20,
        }[params.size];

        root.push({
            minWidth: {
                s: 56,
                m: 60,
                l: 64,
            }[params.size],
            height: {
                s: 44,
                m: 48,
                l: 52,
            }[params.size],
            paddingTop: rootPaddingVertical,
            paddingRight: rootPaddingHorizontal,
            paddingBottom: rootPaddingVertical,
            paddingLeft: rootPaddingHorizontal,
        });
        icon.push({
            top: 1,
        }),
        text.push({
            top: 1,
        });
    }

    if (params.variant === "contained") {
        const containedStyles = R.pathOr(lightTheme.button.contained, ["button", "contained"], params.theme) as Theme["button"]["contained"];
        const styles = containedStyles[params.color];

        root.push({
            backgroundColor: styles.backgroundColor,
        });

        icon.push({
            color: styles.foregroundColor,
        });

        rootAnimationBackgroundColor.from = styles.backgroundColor;
        rootAnimationBackgroundColor.to = styles.backgroundHoverColor;
        rootAnimationBorderColor.from = "rgba(0,0,0,0)";
        rootAnimationBorderColor.to = "rgba(0,0,0,0)";
        iconAnimationForegroundColor.from = styles.foregroundColor;
        iconAnimationForegroundColor.to = styles.foregroundColor;
        textAnimationForegroundColor.from = styles.foregroundColor;
        textAnimationForegroundColor.to = styles.foregroundColor;
    } else if (params.variant === "outlined") {
        const outlinedStyles = R.pathOr(lightTheme.button.outlined, ["button", "outlined"], params.theme) as Theme["button"]["outlined"];
        const styles = outlinedStyles[params.color];

        root.push({
            borderWidth: 1,
            borderColor: styles.borderColor,
            backgroundColor: styles.backgroundColor,
        });

        icon.push({
            color: styles.iconForegroundColor,
        });

        rootAnimationBackgroundColor.from = styles.backgroundColor;
        rootAnimationBackgroundColor.to = styles.backgroundColor;
        rootAnimationBorderColor.from = styles.borderColor;
        rootAnimationBorderColor.to = styles.borderHoverColor;
        iconAnimationForegroundColor.from = styles.iconForegroundColor;
        iconAnimationForegroundColor.to = styles.iconForegroundHoverColor;
        textAnimationForegroundColor.from = styles.textForegroundColor;
        textAnimationForegroundColor.to = styles.textForegroundHoverColor;
    } else if (params.variant === "pill") {
        const pillStyles = R.pathOr(lightTheme.button.pill, ["button", "pill"], params.theme) as Theme["button"]["pill"];
        const styles = pillStyles[params.color];

        root.push({
            borderWidth: 1,
            borderColor: styles.borderColor,
            backgroundColor: styles.backgroundColor,
        });

        icon.push({
            color: styles.iconForegroundColor,
        });

        rootAnimationBackgroundColor.from = styles.backgroundColor;
        rootAnimationBackgroundColor.to = styles.backgroundHoverColor;
        rootAnimationBorderColor.from = styles.borderColor;
        rootAnimationBorderColor.to = styles.borderHoverColor;
        iconAnimationForegroundColor.from = styles.iconForegroundColor;
        iconAnimationForegroundColor.to = styles.iconForegroundHoverColor;
        textAnimationForegroundColor.from = styles.textForegroundColor;
        textAnimationForegroundColor.to = styles.textForegroundHoverColor;
    }

    return {
        root,
        rootAnimationBackgroundColor,
        rootAnimationBorderColor,
        icon,
        iconAnimationForegroundColor,
        text,
        textAnimationForegroundColor,
    };
}
