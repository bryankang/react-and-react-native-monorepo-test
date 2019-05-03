import R from "ramda";
import React, { ReactElement, FC, useState, useCallback, ReactNode } from "react";
import { Animated, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewStyle, StyleProp, GestureResponderEvent } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Button } from "../button/button"
import { getTemplateStyles } from "./get-template-styles";

export interface TemplateProps extends TouchableWithoutFeedbackProps {
    children?: null;
    isDisabled?: boolean;
    label?: string;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
}

export const Template: FC<TemplateProps> = ({
    isDisabled = false,
    label = "Click me!",
    onPressIn = () => {},
    onPressOut = () => {},
    style = {},
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const [animationValue] = useState(() => new Animated.Value(0));

    const setAnimationValue = useCallback(toValue => {
        Animated.spring(animationValue, {
            toValue,
            speed: 36,
            useNativeDriver: true,
        }).start();
    }, []);

    const handlePressIn = useCallback(e => {
        setAnimationValue(1);
        // When overriding a prop in the root component, always forward it
        onPressIn(e);
    }, []);

    const handlePressOut = useCallback(e => {
        Animated.spring(animationValue, {
            toValue: 0,
            speed: 36,
            useNativeDriver: true,
        }).start();

        // When overriding a prop in the root component, always forward it
        onPressOut(e);
    }, []);

    const styles = getTemplateStyles({ theme, isDisabled });

    return (
        <TouchableWithoutFeedback
            disabled={isDisabled}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            {...rest}
        >
            <Animated.View
                style={[{
                    transform: [
                        {
                            scale: animationValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    styles.rootAnimationScale.from,
                                    styles.rootAnimationScale.to,
                                ],
                            }),
                        }
                    ]
                }, style/* append style here since root doesn't support style */]}
            >
                <Button
                    isDisabled={isDisabled}
                    label={label}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
