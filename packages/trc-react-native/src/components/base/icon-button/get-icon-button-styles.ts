import R from "ramda";
import { ViewStyle, TextStyle, StyleProp } from "react-native";
import { ToProp } from "react-spring";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";
import { IconButtonProps } from "./icon-button";

export interface IconButtonStyles {
    root: StyleProp<ViewStyle>;
    rootAnimation: {
        from: ToProp<ViewStyle>;
        to: ToProp<ViewStyle>;
    };
    icon: StyleProp<TextStyle>;
}

interface Params {
    theme: Partial<Theme>;
    color: NonNullable<IconButtonProps["color"]>;
    iconName: Required<IconButtonProps["iconName"]>;
    isDisabled: Required<IconButtonProps["isDisabled"]>;
    size: NonNullable<IconButtonProps["size"]>;
    variant: NonNullable<IconButtonProps["variant"]>;
}

export function getIconButtonStyles(params: Params): IconButtonStyles {
    const defaultStyles = lightTheme["button"];
    const baseStyles = R.pathOr(defaultStyles, ["theme", "button"], params) as Theme["button"];

    const root: StyleProp<ViewStyle> = [];
    const rootAnimation: IconButtonStyles["rootAnimation"] = { from: {}, to: {} };
    const icon: StyleProp<TextStyle> = [];

    root.push({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: 2,
        borderWidth: 1,
    });

    if (params.isDisabled) {
        root.push({
            opacity: .68,
        });
        icon.push({
            opacity: .68,
        });
    }

    if (params.size === "s") {
        root.push({
            width: 32,
            height: 32,
        });
    } else if (params.size === "l") {
        root.push({
            width: 56,
            height: 56,
        });
    }

    if (params.variant === "contained") {
        const containedStyles = R.pathOr(defaultStyles.contained, ["contained"], baseStyles) as Theme["button"]["contained"];
        const styles = containedStyles[params.color];


        rootAnimation.from = {
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor,
        };

        rootAnimation.to = {
            backgroundColor: styles.backgroundHoverColor,
            borderColor: styles.borderHoverColor,
        };

        icon.push({
            color: styles.iconColor,
        });
    } else {
        const outlinedStyles = R.pathOr(defaultStyles.outlined, ["outlined"], baseStyles) as Theme["button"]["outlined"];
        const styles = outlinedStyles[params.color];

        rootAnimation.from = {
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor,
        };

        rootAnimation.to = {
            backgroundColor: styles.backgroundHoverColor,
            borderColor: styles.borderHoverColor,
        };

        icon.push({
            color: styles.iconColor,
        });
    }

    return {
        root,
        rootAnimation,
        icon,
    };
}
