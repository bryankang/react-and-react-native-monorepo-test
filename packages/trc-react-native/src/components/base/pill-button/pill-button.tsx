import R from "ramda";
import React, { ReactElement, FC, ReactNode, useState } from "react";
import { View, ViewStyle, ViewProps, StyleProp, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, GestureResponderEvent } from "react-native";
import { animated, useSpring } from "react-spring";
import { useTheme, AnimatedView } from "../../../utils/utils";
import { getPillButtonStyles } from "./get-pill-button-styles";
import { Icon, IconProps } from "../icon/icon";
import { Text } from "../text/text";

export interface PillButtonProps extends TouchableWithoutFeedbackProps {
    iconName?: IconProps["name"];
    isActive?: boolean;
    isDisabled?: boolean;
    label?: string;
    onIsActiveChange?: (e: GestureResponderEvent, isActive: boolean) => void;
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
}

export const PillButton: FC<PillButtonProps> = ({
    iconName = "bicycle",
    isActive = false,
    isDisabled = false,
    label = "...",
    onIsActiveChange = () => {},
    onPress = () => {},
    style = {},
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [isTouching, setIsTouching] = useState(false);

    const styles = getPillButtonStyles({
        theme,
        isDisabled,
    });

    const rootAnimationStyle = useSpring({
        from: styles.rootAnimation.from,
        to: (isActive || isTouching) ? styles.rootAnimation.to : styles.rootAnimation.from,
        config: { duration: 50 },
    });

    const contentAnimationStyle = useSpring({
        from: styles.contentAnimation.from,
        to: (isActive || isTouching) ? styles.contentAnimation.to : styles.contentAnimation.from,
        config: { duration: 50 },
    });

    return (
        <TouchableWithoutFeedback
            onPress={(e: GestureResponderEvent) => {
                onIsActiveChange(e, !isActive);
                onPress(e);
            }}
            onPressIn={() => setIsTouching(true)}
            onPressOut={() => setIsTouching(false)}
            {...rest}
        >
            <AnimatedView
                style={[styles.root, rootAnimationStyle, style]}
            >
                <Icon
                    name={iconName}
                    size="xs"
                    style={[styles.icon, styles.content, contentAnimationStyle]}
                />
                <Text
                    category="paragraph-xs"
                    style={[styles.content, contentAnimationStyle]}
                >
                    {label}
                </Text>
            </AnimatedView>
        </TouchableWithoutFeedback>
    );
};
