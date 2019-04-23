import R from 'ramda';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/serialize';
import { Theme, lightTheme } from '@trainer-road/trc-core';
import { ExampleCardProps } from './example-card';

export const getExampleCardStyles = (args: { theme: Partial<Theme>, props: ExampleCardProps }) => {
    const body1Styles: any = R.pathOr(
        lightTheme.typography.body1,
        ["theme", "typography", "body1"],
        args
    );
    const body2Styles: any = R.pathOr(
        lightTheme.typography.body2,
        ["theme", "typography", "body2"],
        args
    );
    const overline1Styles: any = R.pathOr(
        lightTheme.typography.overline1,
        ["theme", "typography", "overline1"],
        args
    );
    const emphasisStyles: any = R.pathOr(
        lightTheme.emphasis.default,
        ["theme", "emphasis", "default"],
        args
    );
    const color: string = R.pathOr(
        lightTheme.color,
        ["theme", "color"],
        args
    );

    const onConfirm = R.pathOr(undefined, ["props", "onConfirm"], args) as any;

    const root = css({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxSizing: 'border-box',
        width: 320,
        maxWidth: 320,
        height: 96,
        maxHeight: 96,
    });

    const row = css({
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        paddingLeft: 28,
        paddingRight: 28,
    });

    const col = css({

    });

    const number = css({
        fontFamily: body1Styles.fontFamily,
        fontSize: `${body1Styles.fontSize/16}rem`,
        fontWeight: body1Styles.fontWeight,
        color,
        opacity: emphasisStyles.highest,
        marginBottom: 4,
    })

    const seconds = css({
        fontFamily: body2Styles.fontFamily,
        fontSize: `${body2Styles.fontSize/16}rem`,
        fontWeight: body2Styles.fontWeight,
    })

    const overline = css({
        fontFamily: overline1Styles.fontFamily,
        fontSize: `${overline1Styles.fontSize/16}rem`,
        fontWeight: overline1Styles.fontWeight,
        letterSpacing: overline1Styles.letterSpacing,
        textDecoration: overline1Styles.textDecoration,
        textTransform: overline1Styles.textTransform,
        color,
        opacity: emphasisStyles.medium,
    })

    const confirm: SerializedStyles[] = [];

    if (!onConfirm) {
        confirm.push(css({
            visibility: 'hidden',
        }));
    }

    return {
        root,
        row,
        col,
        number,
        seconds,
        overline,
        confirm,
    };
}
