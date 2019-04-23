import { darkTheme } from '../darkTheme/darkTheme';
import { colorPalette } from '../common/color-palette';

export const lightTheme = {
    ...darkTheme,
    name: 'light',
    backgroundColor: 'white',
    color: 'black',

    emphasis: {
        inverse: {
            lowest: 0.12,
            low: .24,
            medium: .5,
            high: .7,
            highest: 1,
        },
        default: {
            lowest: 0.12,
            low: .3,
            medium: .46,
            high: .76,
            highest: .87,
        },
    },

    button: {
        contained: {
            none: {
                backgroundColor: colorPalette.grey3,
                backgroundOverlayColor: "rgba(255,255,255,.18)",
                color: colorPalette.white,
            },
            primary: {
                backgroundColor: colorPalette.red2,
                backgroundOverlayColor: "rgba(255,255,255,.16)",
                color: colorPalette.white,
            },
        },
        outlined: {
            none: {
                borderColor: colorPalette.grey11,
                borderOverlayColor: colorPalette.grey6,
                color: colorPalette.grey6,
            },
            primary: {
                borderColor: colorPalette.grey11,
                borderOverlayColor: colorPalette.red2,
                color: colorPalette.red2,
            },
        },
    },

    card: {
        backgroundColor: colorPalette.white,
        shadowColor: 'rgba(0,0,0,.16)',
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowBlurRadius: 12,
        shadowSpreadRadius: 0,
        borderRadius: 10,
    },
};
