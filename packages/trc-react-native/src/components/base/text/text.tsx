import React, { ReactElement, FC, ReactNode } from "react";
import { Animated, TextStyle as NativeTextStyle, TextProps as NativeTextProps, StyleProp } from "react-native";
import { useTheme } from "../../../utils/utils";
import { getTextStyles } from "./get-text-styles";

export interface TextProps extends NativeTextProps {
    category?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "heading6"
    | "heading7"
    | "paragraph-lead"
    | "paragraph"
    | "paragraph--semibold"
    | "paragraph-s"
    | "paragraph-s--semibold"
    | "paragraph-xs"
    | "paragraph-xs--semibold"
    | "label"
    | "label-s";
    children?: ReactNode;
    style?: StyleProp<NativeTextStyle>;
}

export const Text: FC<TextProps> = ({
    category = "paragraph",
    children = "Text",
    style = {},
    ...rest
}): ReactElement => {
    const theme = useTheme();
    const textStyles = getTextStyles({ theme, category });

    return (
        <Animated.Text
            style={[textStyles.root, style]}
            {...rest}
        >
            {children}
        </Animated.Text>
    );
};
