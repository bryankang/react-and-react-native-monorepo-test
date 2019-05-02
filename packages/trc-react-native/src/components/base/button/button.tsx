import React, { ReactElement, FC, ReactNode, useState, useCallback } from "react";
import { ViewStyle, ViewProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, GestureResponderEvent, StyleProp, Animated } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Text } from "../text/text";
import { Icon, IconProps } from "../icon/icon";
import { getButtonStyles } from "./get-button-styles";

export interface ButtonProps extends TouchableWithoutFeedbackProps {
    children?: ReactNode;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    hasIcon?: boolean;
    iconName?: IconProps["name"];
    isDisabled?: boolean;
    /**
     * Stretch to parent's width
     **/
    isFluid?: boolean;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    size?: "s" | "m" | "l";
    style?: StyleProp<ViewStyle>;
    variant?: "contained" | "outlined" | "pill";
}

export const Button: FC<ButtonProps> = ({
    children = "Button",
    color = "primary",
    hasIcon = false,
    iconName = "bicycle",
    isDisabled = false,
    isFluid = false,
    onPressIn = () => {},
    onPressOut = () => {},
    size = "m",
    style = {},
    variant = "contained",
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [animationValue] = useState(() => new Animated.Value(0));

    const handlePressIn = useCallback((e: GestureResponderEvent) => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 50,
        }).start();
        onPressIn(e);
    }, [animationValue, onPressIn]);

    const handlePressOut = useCallback((e: GestureResponderEvent) => {
        Animated.timing(animationValue, {
            toValue: 0,
            duration: 50,
        }).start();
        onPressOut(e);
    }, [animationValue, onPressOut]);

    const styles = getButtonStyles({
        theme,
        color,
        variant,
        size,
        iconName,
        isDisabled,
        isFluid,
    });

    return (
        <TouchableWithoutFeedback
            disabled={isDisabled}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...rest}
        >
            <Animated.View
                style={[
                    styles.root,
                    {
                        backgroundColor: animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                styles.rootAnimationBackgroundColor.from,
                                styles.rootAnimationBackgroundColor.to,
                            ],
                        }),
                        borderColor: animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                styles.rootAnimationBorderColor.from,
                                styles.rootAnimationBorderColor.to,
                            ],
                        }),
                    },
                    style,
                ]}
            >
                {hasIcon && (
                    <Icon
                        name={iconName}
                        size={size === "l"
                            ? "s"
                            : size === "s"
                                ? "xs"
                                : "s"}
                        style={styles.icon}
                    />
                )}
                <Text
                    numberOfLines={1}
                    ellipsizeMode="clip"
                    category={size === "l"
                        ? "paragraph-lead"
                        : size === "s"
                            ? "paragraph-s--semibold"
                            : "paragraph--semibold"}
                    style={styles.text}
                >
                    {children}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
