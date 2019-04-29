import R from 'ramda';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/serialize';
import { Theme, lightTheme } from '@trainerroad/trc-core';
import { ButtonProps } from './button';

function root(args: { theme: Partial<Theme>, props: ButtonProps }): SerializedStyles {
    const intent: string = R.pathOr("none", ["intent"], args.props);
    const variant: string = R.pathOr("contained", ["variant"], args.props);
    const styles: any = R.pathOr({}, ["button", variant, intent], args.theme);
    const size: string = R.pathOr("medium", ["size"], args.props);
    const defaultTypography: any = R.pathOr({}, ["typography", "button"], lightTheme);
    const typography: any = R.pathOr(defaultTypography, ["typography", "button"], args.theme);

    const height = R.cond([
        [R.equals("small"), R.always(28)],
        [R.equals("large"), R.always(48)],
        [R.T, R.always(32)],
    ])(size);

    const minWidth = R.cond([
        [R.equals("small"), R.always(48)],
        [R.equals("large"), R.always(96)],
        [R.T, R.always(64)],
    ])(size);

    const horizontalPadding = R.cond([
        [R.equals("small"), R.always(12)],
        [R.equals("large"), R.always(24)],
        [R.T, R.always(16)],
    ])(size);

    const fontSize = R.cond([
        [R.equals("small"), R.always(14)],
        [R.equals("large"), R.always(20)],
        [R.T, R.always(16)],
    ])(size);

    return css(/* @css */{
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: 'auto',
        minWidth: `${minWidth/16}rem`,
        // height: `${height/16}rem`,
        margin: 0,
        paddingTop: 0,
        paddingRight: `${horizontalPadding/16}rem`,
        paddingBottom: 0,
        paddingLeft: `${horizontalPadding/16}rem`,
        transition: 'all 150ms ease-in-out',
        border: variant === 'outlined' ? `1px solid ${styles.borderColor}` : 'none',
        borderRadius: 2,
        backgroundColor: variant === 'outlined' ? 'rgba(0,0,0,0)' : styles.backgroundColor,
        color: styles.color,
        fontFamily: typography.fontFamily,
        fontSize,
        fontWeight: typography.fontWeight,
        textDecoration: typography.textDecoration,
        textTransform: typography.textTransform,
        letterSpacing: typography.letterSpacing,
        WebkitFontSmoothing: 'inherit',
        MozOsxFontSmoothing: 'inherit',
        lineHeight: `${height/16}rem`,
        cursor: 'pointer',
        overflow: 'visible',
        '&::-moz-focus-inner':  {
            padding: 0,
            border: 0,
        },
        '&::before': {
            boxSizing: 'border-box',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${height/16}rem`,
            transition: 'all 150ms ease-in-out',
            borderRadius: 2,
            content: '""',
        },
        '&:focus': {
            borderColor: variant === 'outlined' ? styles.borderOverlayColor : undefined,
            outline: 0,
        },
        '&:hover': {
            borderColor: variant === 'outlined' ? styles.borderOverlayColor : undefined,
            '&::before': {
                backgroundColor: styles.backgroundOverlayColor,
            },
        },
    });
}

export const styles = {
    root,
};
