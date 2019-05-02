import R from "ramda";
import React, { ReactElement, FC, ReactNode, useState } from "react";
import { View, ViewStyle, ViewProps, TouchableWithoutFeedbackProps, TouchableWithoutFeedback, GestureResponderEvent, StyleProp } from "react-native";
import { useSpring } from "react-spring";
import { useTheme, AnimatedView, AnimatedViewProps } from "../../../utils/utils";
import { Text } from "../text/text";
import { Icon, IconProps } from "../icon/icon";
import { getIconButtonStyles } from "./get-icon-button-styles";

export interface IconButtonProps extends TouchableWithoutFeedbackProps {
    color?: "primary" | "secondary";
    iconName?: IconProps["name"];
    isDisabled?: boolean;
    size?: "s" | "m" | "l";
    style?: StyleProp<ViewStyle>;
    variant?: "contained" | "outlined";
}

export const IconButton: FC<IconButtonProps> = ({
    color = "primary",
    iconName = "bicycle",
    isDisabled = false,
    size = "m",
    style = {},
    variant = "contained",
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [isTouching, setIsTouching] = useState(false);

    const styles = getIconButtonStyles({
        theme,
        color,
        variant,
        size,
        iconName,
        isDisabled,
    });

    const rootAnimationStyle = useSpring({
        from: styles.rootAnimation.from,
        to: isTouching ? styles.rootAnimation.to : styles.rootAnimation.from,
        config: { duration: 50 },
    });

    return (
        <TouchableWithoutFeedback
            disabled={isDisabled}
            onPressIn={() => setIsTouching(true)}
            onPressOut={() => setIsTouching(false)}
            {...rest}
        >
            <AnimatedView
                style={[styles.root, style, rootAnimationStyle]}
            >
                <Icon
                    name={iconName}
                    size={size === "l" ? "s" : size === "s" ? "xs" : "s"}
                    style={styles.icon}
                />
            </AnimatedView>
        </TouchableWithoutFeedback>
    );
};
