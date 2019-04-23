/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { ElementType, FC } from "react";
import { textStyles } from "./text.styles";
import { useTheme } from '../../hooks/useTheme';

/** Use tag for accessibility/semantic HTML, and type for styles */
export interface TextProps {
    /** Tag used to wrap the text */
    tag?: ElementType;
    /** Name of the style to apply to text */
    category?: "headline1" | "headline2" | "headline3" | "headline4" | "headline5" | "headline6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "button" | "caption1" | "caption2" | "overline";
    children?: string;
    [x: string]: any;
};

const defaultProps: TextProps = {
    children: "",
    tag: "p",
    category: "body2",
};

const _Text: FC<TextProps> = (props): React.ReactElement => {
    const theme = useTheme();

    const {
        children,
        tag,
        category,
        // on,
        // emphasis,
        ...rest
    } = props;

    return jsx(
        tag!,
        {
            css: textStyles.root({ theme, props }),
            children,
            ...rest,
        }
    );
}

_Text.defaultProps = defaultProps;

export const Text = _Text;
