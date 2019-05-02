import React, { ReactElement, FC, Component } from "react";
import { Animated, Text, TextStyle, StyleProp, TextProps } from "react-native";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { useTheme } from "../../../utils/utils";
import { getIconStyles } from "./get-icon-styles";

export interface IconProps extends TextProps {
    name?: IconUnicodeName;
    size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
    style?: StyleProp<TextStyle>;
}

export const Icon: FC<IconProps> = ({
    name = "bicycle",
    size = "m",
    style = {},
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const iconStyles = getIconStyles({ theme, size });

    return (
        <Animated.Text
            style={[iconStyles.root, style]}
            {...rest}
        >
            {iconCore.unicodes[name]}
        </Animated.Text>
    );
};
