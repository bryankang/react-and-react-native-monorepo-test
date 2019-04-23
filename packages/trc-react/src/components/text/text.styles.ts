import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/serialize';
import R from 'ramda';
import { Theme } from "@trainer-road/trc-core";
import { TextProps } from './text';

const root = (args: { theme: Partial<Theme>, props: TextProps }): SerializedStyles => {
    const type = args.props.category;
    const styles: any = R.pathOr({}, ["text", type!], args.theme);
    // const on: any = pathOr({}, ["text", "on", args.props.on!], args.theme);
    // const color: string | undefined = pathOr(undefined, ["color"], on);
    // const emphasis: number | undefined = pathOr(undefined, ["emphasis", args.props.emphasis!], on);

    return css(/* @css */{
        // color,
        // opacity: emphasis,
        fontFamily: styles.fontFamily,
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
        letterSpacing: styles.letterSpacing,
        textDecoration: styles.textDecoration,
        textTransform: styles.textTransform,
    });
};

export const textStyles = {
    root,
};
