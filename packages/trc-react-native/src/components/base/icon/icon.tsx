import React, { ReactElement, FC, Component } from "react";
import { Animated, Text, TextStyle, StyleProp, TextProps } from "react-native";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { useTheme } from "../../../utils/utils";
import { getIconStyles } from "./get-icon-styles";

export interface IconProps extends TextProps {
    name?: IconUnicodeName;
    size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
    status?: "active" | "default" | "disabled";
    style?: StyleProp<TextStyle>;
}

export const Icon: FC<IconProps> = ({
    name = "bicycle",
    size = "m",
    status = "default",
    style = {},
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const iconStyles = getIconStyles({ theme, size, status });

    return (
        <Animated.Text
            style={[iconStyles.root, style]}
            {...rest}
        >
            {iconCore.unicodes[name]}
        </Animated.Text>
    );
};
