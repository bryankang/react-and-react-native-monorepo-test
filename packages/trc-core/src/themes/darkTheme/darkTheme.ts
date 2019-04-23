// import { colors, common } from '../../styles/styles';
import { Theme } from '../theme';
import { typography } from './typography';
import { colors } from './colors';
import { colorPalette } from '../common/color-palette';
import { global } from './global';

export const darkTheme: Theme = {
    name: 'dark',
    backgroundColor: colorPalette.grey2,
    color: "white",

    typography,

    emphasis: {
        default: {
            lowest: 0.12,
            low: .24,
            medium: .5,
            high: .7,
            highest: 1,
        },
        inverse: {
            lowest: 0.12,
            low: .3,
            medium: .54,
            high: .76,
            highest: .87,
        },
    },

    // colors: {
    //     background1: colorPalette.grey1,
    //     background2: colorPalette.grey2,
    //     background3: colorPalette.grey3,
    //     primary: '',
    //     danger: '',
    //     blue: '',
    //     green: '',
    //     red: '',
    //     brown: '',
    //     yellow: '',
    // },

    button: {
        contained: {
            none: {
                backgroundColor: colorPalette.grey5,
                backgroundOverlayColor: "rgba(255,255,255,.08)",
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
                borderColor: colorPalette.grey6,
                borderOverlayColor: colorPalette.grey8,
                color: colorPalette.white,
            },
            primary: {
                borderColor: colorPalette.grey6,
                borderOverlayColor: colorPalette.red2,
                color: colorPalette.red2,
            },
        },
    },

    // button: {
    //     contained: {
    //         default: {
    //             backgroundColor: colorPalette.grey5,
    //             color: colorPalette.white,
    //             hoverColor: colorPalette.white,
    //             hoverOpacity: 0.16,
    //             activeColor: colorPalette.grey3,
    //             outlineColor: "rgba(0,0,0,0)",
    //             borderColor: colorPalette.grey5,
    //             shadowColor: "rgba(0,0,0,0)",

    //             backgroundColor: string;
    //             color: string;
    //             hoverOverlayColor: string;
    //             activeBackgroundColor: string;
    //             outlineColor: string;
    //             borderColor: string;
    //             borderActiveColor: string;
    //             borderHoverColor: string;
    //             shadowColor: string;
    //         },
    //         // primary: {
    //         //     backgroundColor: colorPalette.red2,
    //         //     color: colorPalette.white,
    //         //     hoverColor: colorPalette.white,
    //         //     hoverOpacity: 0.16,
    //         //     activeColor: colorPalette.red2,
    //         //     outlineColor: "rgba(0,0,0,0)",
    //         //     borderColor: "rgba(0,0,0,0)",
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //         // success: {
    //         //     backgroundColor: colorPalette.green2,
    //         //     color: colorPalette.white,
    //         //     hoverColor: colorPalette.white,
    //         //     hoverOpacity: 0.16,
    //         //     activeColor: colorPalette.green2,
    //         //     outlineColor: "rgba(0,0,0,0)",
    //         //     borderColor: "rgba(0,0,0,0)",
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //         // info: {
    //         //     backgroundColor: colorPalette.blue3,
    //         //     color: colorPalette.white,
    //         //     hoverColor: colorPalette.white,
    //         //     hoverOpacity: 0.16,
    //         //     activeColor: colorPalette.blue3,
    //         //     outlineColor: "rgba(0,0,0,0)",
    //         //     borderColor: "rgba(0,0,0,0)",
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //         // warning: {
    //         //     backgroundColor: colorPalette.yellow2,
    //         //     color: colorPalette.white,
    //         //     hoverColor: colorPalette.white,
    //         //     hoverOpacity: 0.16,
    //         //     activeColor: colorPalette.yellow2,
    //         //     outlineColor: "rgba(0,0,0,0)",
    //         //     borderColor: "rgba(0,0,0,0)",
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //         // error: {
    //         //     backgroundColor: colorPalette.red1,
    //         //     color: colorPalette.white,
    //         //     hoverColor: colorPalette.white,
    //         //     hoverOpacity: 0.16,
    //         //     activeColor: colorPalette.red1,
    //         //     outlineColor: "rgba(0,0,0,0)",
    //         //     borderColor: "rgba(0,0,0,0)",
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //     },

    //     outlined: {
    //         default: {
    //             backgroundColor: colorPalette.grey3,
    //             color: colorPalette.grey12,
    //             hoverColor: "string",
    //             hoverOpacity: 0.16,
    //             activeColor: "string",
    //             outlineColor: "string",
    //             borderColor: colorPalette.grey5,
    //             shadowColor: "string",
    //         },
    //         // primary: {
    //         //     backgroundColor: colorPalette.red2,
    //         //     color: colorPalette.red2,
    //         //     hoverColor: "rgba(0,0,0,0)",
    //         //     hoverOpacity: 0,
    //         //     activeColor: "rgba(0,0,0,0)",
    //         //     outlineColor: colorPalette.red2,
    //         //     borderColor: colorPalette.grey8,
    //         //     shadowColor: "rgba(0,0,0,0)",
    //         // },
    //         // success: {
    //         //     backgroundColor: "string",
    //         //     color: colorPalette.grey12,
    //         //     hoverColor: "string",
    //         //     hoverOpacity: 0,
    //         //     activeColor: "string",
    //         //     outlineColor: "string",
    //         //     borderColor: colorPalette.grey8,
    //         //     shadowColor: "string",
    //         // },
    //         // info: {
    //         //     backgroundColor: "string",
    //         //     color: colorPalette.grey12,
    //         //     hoverColor: "string",
    //         //     hoverOpacity: 0,
    //         //     activeColor: "string",
    //         //     outlineColor: "string",
    //         //     borderColor: colorPalette.grey8,
    //         //     shadowColor: "string",
    //         // },
    //         // warning: {
    //         //     backgroundColor: "string",
    //         //     color: colorPalette.grey12,
    //         //     hoverColor: "string",
    //         //     hoverOpacity: 0,
    //         //     activeColor: "string",
    //         //     outlineColor: "string",
    //         //     borderColor: colorPalette.grey8,
    //         //     shadowColor: "string",
    //         // },
    //         // error: {
    //         //     backgroundColor: "string",
    //         //     color: colorPalette.grey12,
    //         //     hoverColor: "string",
    //         //     hoverOpacity: 0,
    //         //     activeColor: "string",
    //         //     outlineColor: "string",
    //         //     borderColor: colorPalette.grey8,
    //         //     shadowColor: "string",
    //         // },
    //     },
    // },

    card: {
        backgroundColor: colorPalette.grey3,
        shadowColor: 'rgba(0,0,0,.16)',
        shadowOffsetX: 0,
        shadowOffsetY: 6,
        shadowBlurRadius: 12,
        shadowSpreadRadius: 2,
        borderRadius: 8,
    },
};
