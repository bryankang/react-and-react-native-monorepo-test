import R from "ramda";
import chroma from "chroma-js";
import { ViewStyle, TextStyle, StyleProp, StyleSheetProperties, ViewPropTypes, StyleSheet } from "react-native";
import { AnimatedProps, UseSpringProps, ToProp } from "react-spring";
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
    rootAnimation: {
        from: ViewStyle;
        to: ViewStyle;
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
    const rootAnimation = {} as ButtonStyles["rootAnimation"];
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

        rootAnimation.from = {
            backgroundColor: buttonStyles.backgroundColor,
        };

        rootAnimation.to = {
            backgroundColor: buttonStyles.backgroundHoverColor,
        };

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

        rootAnimation.from = {
            backgroundColor: buttonStyles.backgroundColor,
            borderColor: buttonStyles.borderColor,
        };

        rootAnimation.to = {
            borderColor: buttonStyles.borderHoverColor,
        };
    }

    // if (params.variant === "contained") {
    //     const containedStyles = R.pathOr(defaultStyles.contained, ["contained"], baseStyles) as Theme["button"]["contained"];
    //     const styles = containedStyles[params.color];

    //     // rootAnimation.from = {
    //     //     backgroundColor: !params.isDisabled ? styles.backgroundColor : styles.backgroundDisabledColor,
    //     //     borderColor: !params.isDisabled ? styles.borderColor : styles.borderDisabledColor,
    //     // };

    //     // rootAnimation.to = {
    //     //     backgroundColor: !params.isDisabled ? styles.backgroundHoverColor : styles.backgroundDisabledColor,
    //     //     borderColor: !params.isDisabled ? styles.borderHoverColor : styles.borderDisabledColor,
    //     // };

    //     rootAnimation.from = {
    //         backgroundColor: styles.backgroundColor,
    //         borderColor: styles.borderColor,
    //     };

    //     rootAnimation.to = {
    //         backgroundColor: styles.backgroundHoverColor,
    //         borderColor: styles.borderHoverColor,
    //     };

    //     text.push({
    //         color: styles.textColor,
    //     });

    //     icon.push({
    //         color: styles.iconColor,
    //     });
    // } else {
    //     const outlinedStyles = R.pathOr(defaultStyles.outlined, ["outlined"], baseStyles) as Theme["button"]["outlined"];
    //     const styles = outlinedStyles[params.color];

    //     // rootAnimation.from = {
    //     //     backgroundColor: !params.isDisabled ? styles.backgroundColor : styles.backgroundDisabledColor,
    //     //     borderColor: !params.isDisabled ? styles.borderColor : styles.borderDisabledColor,
    //     // };

    //     // rootAnimation.to = {
    //     //     backgroundColor: !params.isDisabled ? styles.backgroundHoverColor : styles.backgroundDisabledColor,
    //     //     borderColor: !params.isDisabled ? styles.borderHoverColor : styles.borderDisabledColor,
    //     // };

    //     rootAnimation.from = {
    //         backgroundColor: styles.backgroundColor,
    //         borderColor: styles.borderColor,
    //     };

    //     rootAnimation.to = {
    //         backgroundColor: styles.backgroundHoverColor,
    //         borderColor: styles.borderHoverColor,
    //     };

    //     text.push({
    //         color: styles.textColor,
    //     });

    //     icon.push({
    //         color: styles.iconColor,
    //     });
    // }

    return {
        root,
        rootAnimation,
        icon,
        text,
    };
}
