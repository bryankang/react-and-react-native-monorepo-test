import React, { ReactElement, FC, ReactNode } from "react";
import { Text as NativeText, TextStyle, TextProps as NativeTextProps } from "react-native";
import { useTheme } from "../../utils/theme";
import { getTextStyles } from "./get-text-styles";

export interface TextProps extends NativeTextProps {
    category?: "headline1" | "headline2" | "headline3" | "headline4" | "headline5" | "headline6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "body3" | "overline" | "caption";
    children?: ReactNode;
    // color?: "primary" | "default" | "danger" | "success" | "info" | "warning" | "red" | "blue" | "green" | "yellow" | "brown" | "strava" | "garmin" | "trainingPeaks" | "dropbox" | "placeholder";
    emphasis?: "default" | "semimuted" | "muted" | "disabled";
    style?: TextStyle;
}

const defaultProps: TextProps = {
    category: "body1" as TextProps["category"],
    // color: "primary",
    emphasis: "default",
    style: {},
};

const _Text: FC<TextProps> = (props): ReactElement => {
    const theme = useTheme();

    const { category, children, emphasis, style, ...rest } = props;

    const textStyles = getTextStyles({ theme, props });

    return (
        <NativeText style={[textStyles.root, style]} {...rest}>{children}</NativeText>
    );
};

_Text.defaultProps = defaultProps;

export const Text = _Text;
