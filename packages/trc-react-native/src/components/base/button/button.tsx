import R from "ramda";
import React, { ReactElement, FC, ReactNode, useState } from "react";
import { View, ViewStyle, ViewProps, TouchableWithoutFeedback, GestureResponderEvent, StyleProp } from "react-native";
import { useSpring } from "react-spring";
import { useTheme, AnimatedView } from "../../../utils/utils";
import { Text } from "../text/text";
import { Icon, IconProps } from "../icon/icon";
import { getButtonStyles } from "./get-button-styles";

export interface ButtonProps extends ViewProps {
    children?: ReactNode;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    iconName?: IconProps["name"];
    isDisabled?: boolean;
    isFluid?: boolean;
    onPress?: (e: GestureResponderEvent) => void;
    size?: "s" | "m" | "l";
    style?: StyleProp<ViewStyle>;
    variant?: "contained" | "outlined";
}

export const Button: FC<ButtonProps> = ({
    children = "Button",
    color = "primary",
    iconName = "bicycle",
    isDisabled = false,
    isFluid = false,
    onPress = () => {},
    size = "m",
    style = {},
    variant = "contained",
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [isTouching, setIsTouching] = useState(false);

    const styles = getButtonStyles({
        theme,
        color,
        variant,
        size,
        iconName,
        isDisabled,
        isFluid,
    });

    const rootAnimationStyle = useSpring({
        from: styles.rootAnimation.from,
        to: (isTouching && !isDisabled) ? styles.rootAnimation.to : styles.rootAnimation.from,
        config: { duration: 50 },
    });

    return (
        <TouchableWithoutFeedback
            disabled={isDisabled}
            onPress={onPress}
            onPressIn={() => setIsTouching(true)}
            onPressOut={() => setIsTouching(false)}
        >
            <AnimatedView
                style={[styles.root, rootAnimationStyle, style]}
                {...rest}
            >
                {iconName && (
                    <Icon
                        name={iconName}
                        size={size === "l" ? "s" : size === "s" ? "xs" : "s"}
                        style={styles.icon}
                    />
                )}
                <Text
                    category={size === "l" ? "paragraph-lead" : size === "s" ? "paragraph-s--semibold" : "paragraph--semibold"}
                    style={styles.text}
                >
                    {children}
                </Text>
            </AnimatedView>
        </TouchableWithoutFeedback>
    );
};
