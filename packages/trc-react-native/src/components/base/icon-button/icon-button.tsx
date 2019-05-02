import React, { ReactElement, FC, useState, useCallback } from "react";
import { Animated, ViewStyle, TouchableWithoutFeedbackProps, TouchableWithoutFeedback, GestureResponderEvent, StyleProp, TextStyle } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Icon, IconProps } from "../icon/icon";
import { Text } from "../text/text";
import { getIconButtonStyles } from "./get-icon-button-styles";

function getIconSize(size: NonNullable<IconButtonProps["size"]>, label: string): IconProps["size"] {
    if (!label) {
        return {
            s: "xs",
            m: "s",
            l: "m",
        }[size] as IconProps["size"];
    }
    return "xs";
}

export interface IconButtonProps extends TouchableWithoutFeedbackProps {
    children?: undefined | null;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    iconName?: IconProps["name"];
    isDisabled?: boolean;
    label?: string;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    size?: "s" | "m" | "l";
    style?: StyleProp<ViewStyle>;
    variant?: "contained" | "outlined" | "pill";
}

export const IconButton: FC<IconButtonProps> = ({
    color = "primary",
    iconName = "bicycle",
    isDisabled = false,
    label = "",
    onPressIn = () => {},
    onPressOut = () => {},
    size = "m",
    style = {},
    variant = "contained",
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [animationValue] = useState(new Animated.Value(0));

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

    const styles = getIconButtonStyles({
        theme,
        color,
        variant,
        size,
        iconName,
        isDisabled,
        label,
    });

    return (
        <TouchableWithoutFeedback
            disabled={isDisabled}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...rest}
        >
            <Animated.View
                style={[styles.root, {
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
                }, style]}
            >
                <Icon
                    name={iconName}
                    size={getIconSize(size, label)}
                    style={[styles.icon, {
                        color: animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                styles.iconAnimationForegroundColor.from,
                                styles.iconAnimationForegroundColor.to,
                            ],
                        }),
                    }] as StyleProp<TextStyle>[]}
                />
                {!!label && (
                    <Text
                        numberOfLines={1}
                        category={size === "l"
                            ? "paragraph-s"
                            : size === "s"
                                ? "paragraph-xs"
                                : "paragraph-xs"}
                        style={[styles.text, {
                            color: animationValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    styles.textAnimationForegroundColor.from,
                                    styles.textAnimationForegroundColor.to,
                                ],
                            }),
                        }] as StyleProp<TextStyle>[]}
                    >{label}</Text>
                )}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
