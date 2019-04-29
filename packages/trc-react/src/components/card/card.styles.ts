import R from 'ramda';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/serialize';
import { Theme, lightTheme } from '@trainerroad/trc-core';

function root(args: { theme: Partial<Theme> }): SerializedStyles {
    const defaultCardStyle: any = R.pathOr({}, ["card"], lightTheme);
    const cardStyle: any = R.pathOr(defaultCardStyle, ["theme", "card"], args);

    const boxShadow = `${cardStyle.shadowOffsetX}px ${cardStyle.shadowOffsetY}px ${cardStyle.shadowBlurRadius}px ${cardStyle.shadowSpreadRadius}px ${cardStyle.shadowColor}`;

    return css(/* @css */{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        borderRadius: cardStyle.borderRadius,
        backgroundColor: cardStyle.backgroundColor,
        boxShadow,
    });
}

export const styles = {
    root,
};
