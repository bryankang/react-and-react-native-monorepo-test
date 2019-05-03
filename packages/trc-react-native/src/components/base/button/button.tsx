import React, { ReactElement, FC, ReactNode, useState, useCallback, useEffect } from "react";
import { ViewStyle, ViewProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, GestureResponderEvent, StyleProp, Animated } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Text } from "../text/text";
import { Icon, IconProps } from "../icon/icon";
import { getButtonStyles } from "./get-button-styles";

export interface ButtonProps extends TouchableWithoutFeedbackProps {
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    hasIcon?: boolean;
    iconName?: IconProps["name"];
    isSelected?: boolean;
    isDisabled?: boolean;
    /**
     * Stretch to parent's width
     **/
    isFluid?: boolean;
    label?: string;
    onIsSelectedChange?: (e: GestureResponderEvent, isSelected: boolean) => void;
    onPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    size?: "s" | "m" | "l";
    style?: StyleProp<ViewStyle>;
    variant?: "contained" | "outlined" | "pill";
}

export const Button: FC<ButtonProps> = ({
    color = "primary",
    hasIcon = false,
    iconName = "bicycle",
    isSelected = false,
    isDisabled = false,
    isFluid = false,
    label = "Button",
    onIsSelectedChange = () => {},
    onPress = () => {},
    onPressIn = () => {},
    onPressOut = () => {},
    size = "m",
    style = {},
    variant = "contained",
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [animationValue] = useState(() => new Animated.Value(0));

    const setAnimationValue = useCallback((toValue: number) => {
        Animated.timing(animationValue, {
            toValue,
            duration: 50,
        }).start();
    }, []);

    useEffect(() => {
        setAnimationValue(isSelected ? 1 : 0);
    }, [isSelected]);

    const handlePressIn = useCallback((e: GestureResponderEvent) => {
        setAnimationValue(1);
        onPressIn(e);
    }, []);

    const handlePressOut = useCallback((e: GestureResponderEvent) => {
        setAnimationValue(isSelected ? 1 : 0);
        onPressOut(e);
    }, []);

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
            onPress={e => {
                onIsSelectedChange(e, !isSelected);
                onPress(e);
            }}
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
                    {label}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
