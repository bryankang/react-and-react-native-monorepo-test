import R from 'ramda';
import { StyleSheet } from 'react-native';
import { Theme, lightTheme } from '@trainer-road/trc-core';

// function root(args: { theme: Partial<Theme> }) {
//     const defaultCardStyle: any = R.pathOr({}, ["card"], lightTheme);
//     const cardStyle: any = R.pathOr(defaultCardStyle, ["theme", "card"], args);

//     const boxShadow = `${cardStyle.shadowOffsetX}px ${cardStyle.shadowOffsetY}px ${cardStyle.shadowBlurRadius}px ${cardStyle.shadowSpreadRadius}px ${cardStyle.shadowColor}`;


//     return StyleSheet.create({
//         // display: 'flex',
//         // flexDirection: 'column',
//         // flexGrow: 1,
//         // boxSizing: 'border-box',
//         // width: '100%',
//         // height: '100%',
//         // borderRadius: cardStyle.borderRadius,
//         // backgroundColor: cardStyle.backgroundColor,
//         // boxShadow,
//     });
// }

export function getCardStyles( args: { theme: Partial<Theme> }) {
    const defaultCardStyles: any = R.pathOr({}, ["card"], lightTheme);
    const cardStyles: any = R.pathOr(defaultCardStyles, ["theme", "card"], args);

    const root = {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        borderRadius: cardStyles.borderRadius,
        backgroundColor: cardStyles.backgroundColor,
        shadowColor: 'black',
        shadowOpacity: .24,
        shadowOffset: {
            width: 4,
            height: cardStyles.shadowOffsetY,
        },
        shadowRadius: cardStyles.shadowBlurRadius,
        elevation: 4,
    };

    const content = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    };

    return StyleSheet.create({
        root,
        content,
    });
}
