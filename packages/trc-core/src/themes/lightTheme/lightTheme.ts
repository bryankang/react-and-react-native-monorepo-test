import { darkTheme } from '../darkTheme/darkTheme';
import { colorPalette } from '../common/color-palette';

const primarySansSerifFontFamily = ["Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"];

export const lightTheme = {
    ...darkTheme,
    name: 'light',
    backgroundColor: 'white',

    colors: {
        foreground: colorPalette.black,

        background1: colorPalette.grey1,
        background2: colorPalette.grey2,
        background3: colorPalette.grey3,
        background4: colorPalette.grey4,

        primary: colorPalette.red2,
        default: colorPalette.grey3,
        danger: colorPalette.danger,
        success: colorPalette.green2,
        info: colorPalette.blue3,
        warning: colorPalette.warning,

        grey: "#dbdbdb",
        red: "#ff4147",
        orange: "#ff8449",
        yellow: "#f4d255",
        green: "#9ac977",
        blue: "#1890d1",
        lightblue: "#58cbf1",
        purple: "#ad04df",

        placeholder: '#da1ccd',
        strava: colorPalette.strava,
        garmin: colorPalette.garmin,
        trainingPeaks: colorPalette.trainingPeaks,
        dropbox: colorPalette.dropbox,
    },

    text: {
        emphases: {
            default: .9,
            semimuted: .7,
            muted: .5,
            disabled: .3,
        },
        categories: {
            headline1: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 96,
                lineHeight: 96,
                fontWeight: 300,
                letterSpacing: -1.5,
                textDecoration: "none",
                textTransform: "none",
            },

            headline2: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 60,
                lineHeight: 60,
                fontWeight: 300,
                letterSpacing: -0.5,
                textDecoration: "none",
                textTransform: "none",
            },

            headline3: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 48,
                lineHeight: 50,
                fontWeight: 400,
                letterSpacing: 1,
                textDecoration: "none",
                textTransform: "none",
            },

            headline4: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 34,
                lineHeight: 40,
                fontWeight: 400,
                letterSpacing: 0.25,
                textDecoration: "none",
                textTransform: "none",
            },

            headline5: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 24,
                lineHeight: 32,
                fontWeight: 400,
                letterSpacing: 1,
                textDecoration: "none",
                textTransform: "none",
            },

            headline6: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 20,
                lineHeight: 32,
                fontWeight: 600,
                letterSpacing: 0.25,
                textDecoration: "none",
                textTransform: "none",
            },

            subtitle1: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 16,
                lineHeight: 28,
                fontWeight: 400,
                letterSpacing: 0.15,
                textDecoration: "none",
                textTransform: "none",
            },

            subtitle2: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 14,
                lineHeight: 22,
                fontWeight: 600,
                letterSpacing: 0.1,
                textDecoration: "none",
                textTransform: "none",
            },

            body1: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 18,
                lineHeight: 24,
                fontWeight: 400,
                letterSpacing: 0.5,
                textDecoration: "none",
                textTransform: "none",
            },

            body2: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 14,
                lineHeight: 20,
                fontWeight: 400,
                letterSpacing: 0.25,
                textDecoration: "none",
                textTransform: "none",
            },

            body3: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 12,
                lineHeight: 16,
                fontWeight: 400,
                letterSpacing: 0.2,
                textDecoration: "none",
                textTransform: "none",
            },

            overline: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 12,
                lineHeight: 32,
                fontWeight: 600,
                letterSpacing: 1.1,
                textDecoration: "none",
                textTransform: "uppercase",
            },

            caption: {
                fontFamily: primarySansSerifFontFamily,
                fontSize: 12,
                lineHeight: 20,
                fontWeight: 400,
                letterSpacing: 0.4,
                textDecoration: "none",
                textTransform: "none",
            },
        },
    },

    icon: {
        colors: {
            active: 'rgba(0,0,0,1)',
            default: 'rgba(0,0,0,.6)',
            disabled: 'rgba(0,0,0,.12)',
        }
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
