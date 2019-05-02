import React, { ReactElement, FC } from "react";
import { Text, TextStyle, StyleProp, TextProps } from "react-native";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { animated, AnimatedProps } from "react-spring";
import { useTheme, AnimatedText } from "../../../utils/utils";
import { getIconStyles } from "./get-icon-styles";

export interface IconProps extends AnimatedProps<TextProps> {
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
        <AnimatedText
            style={[iconStyles.root, style]}
            {...rest}
        >
            {iconCore.unicodes[name]}
        </AnimatedText>
    );
};
