import React, { ReactElement, FC, useState, useCallback, useEffect } from "react";
import { Animated, ViewStyle, TouchableWithoutFeedbackProps, TouchableWithoutFeedback, GestureResponderEvent, StyleProp, TextStyle } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Icon, IconProps } from "../icon/icon";
import { Text } from "../text/text";
import { getIconButtonStyles } from "./get-icon-button-styles";

export interface IconButtonProps extends TouchableWithoutFeedbackProps {
    children?: undefined | null;
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    iconName?: IconProps["name"];
    isDisabled?: boolean;
    isSelected?: boolean;
    label?: string;
    onIsSelectedChange?: (e: GestureResponderEvent, isSelected: boolean) => void;
    onPress?: (e: GestureResponderEvent) => void;
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
    isSelected = false,
    label = "",
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
    const [animationValue] = useState(new Animated.Value(0));

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
            onPress={e => {
                onIsSelectedChange(e, !isSelected);
                onPress(e);
            }}
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
