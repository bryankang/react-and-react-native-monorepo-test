import chroma from "chroma-js";
import { colorPalette } from "../common/color-palette";
import { Theme } from "../theme";

const primarySansSerifFontFamily = ["Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"];

export const dark: Theme = {
    name: "dark",
    backgroundColor: colorPalette.grey2,

    emphases: {
        active: "rgba(255, 255, 255, 1)",
        default: "rgba(255, 255, 255, .78)",
        muted: "rgba(255, 255, 255, .6)",
        disabled: "rgba(255, 255, 255, .32)",
        divider: "rgba(255, 255, 255 .1)",
    },

    colors: {
        background1: colorPalette.grey1,
        background2: colorPalette.grey2,
        background3: colorPalette.grey3,
        background4: colorPalette.grey4,

        primary: colorPalette.red2,
        secondary: colorPalette.grey3,
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

    icon: {
        status: {
            active: colorPalette.grey12,
            default: colorPalette.grey9,
            disabled: colorPalette.grey6,
        },
    },

    typography: {
        heading1: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 40,
            lineHeight: 40 * 1.2,
            fontWeight: 700,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading2: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 34,
            lineHeight: 34 * 1.2,
            fontWeight: 700,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading3: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 27,
            lineHeight: 27 * 1.2,
            fontWeight: 700,
            letterSpacing: .2,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading4: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 24,
            lineHeight: 24 * 1.2,
            fontWeight: 700,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading5: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 18,
            lineHeight: 18 * 1.2,
            fontWeight: 700,
            letterSpacing: .2,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading6: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 14,
            lineHeight: 14 * 1.2,
            fontWeight: 700,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        heading7: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 12,
            lineHeight: 12 * 1.2,
            fontWeight: 700,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "capitalize",
        },
        "paragraph-lead": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 24,
            lineHeight: 24 * 1.5,
            fontWeight: 600,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "none",
        },
        paragraph: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 18,
            lineHeight: 18 * 1.5,
            fontWeight: 400,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "none",
        },
        "paragraph--semibold": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 18,
            lineHeight: 18 * 1.5,
            fontWeight: 600,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "none",
        },
        "paragraph-s": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 14,
            lineHeight: 14 * 1.5,
            fontWeight: 400,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "none",
        },
        "paragraph-s--semibold": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 14,
            lineHeight: 14 * 1.5,
            fontWeight: 600,
            letterSpacing: 0,
            textDecoration: "none",
            textTransform: "none",
        },
        "paragraph-xs": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 12,
            lineHeight: 12 * 1.5,
            fontWeight: 400,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "none",
        },
        "paragraph-xs--semibold": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 12,
            lineHeight: 12 * 1.5,
            fontWeight: 600,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "none",
        },
        label: {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 12,
            lineHeight: 12 * 1.2,
            fontWeight: 700,
            letterSpacing: 0.2,
            textDecoration: "none",
            textTransform: "uppercase",
        },
        "label-s": {
            fontFamily: primarySansSerifFontFamily,
            fontSize: 10,
            lineHeight: 10 * 1.2,
            fontWeight: 700,
            letterSpacing: 0.4,
            textDecoration: "none",
            textTransform: "uppercase",
        },
    },

    button: {
        contained: {
            primary: {
                backgroundColor: colorPalette.red,
                backgroundHoverColor: colorPalette.redHover,
                foregroundColor: colorPalette.white,
            },
            secondary: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey5,
                foregroundColor: colorPalette.white,
            },
            success: {
                backgroundColor: colorPalette.green2,
                backgroundHoverColor: colorPalette.green3,
                foregroundColor: colorPalette.white,
            },
            info: {
                backgroundColor: colorPalette.blue3,
                backgroundHoverColor: colorPalette.blue4,
                foregroundColor: colorPalette.white,
            },
            warning: {
                backgroundColor: colorPalette.yellow2,
                backgroundHoverColor: colorPalette.yellow3,
                foregroundColor: colorPalette.white,
            },
            danger: {
                backgroundColor: colorPalette.red1,
                backgroundHoverColor: chroma(colorPalette.red1).brighten(.3).css(),
                foregroundColor: colorPalette.white,
            },
        },
        outlined: {
            primary: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.red,
                iconForegroundHoverColor: colorPalette.red,
                textForegroundColor: colorPalette.red,
                textForegroundHoverColor: colorPalette.red,
                borderColor: colorPalette.grey6,
                borderHoverColor: colorPalette.red,
            },
            secondary: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey6,
                borderHoverColor: colorPalette.grey8,
            },
            success: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.green2,
                iconForegroundHoverColor: colorPalette.green2,
                textForegroundColor: colorPalette.green2,
                textForegroundHoverColor: colorPalette.green2,
                borderColor: colorPalette.grey6,
                borderHoverColor: colorPalette.green2,
            },
            info: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.blue3,
                iconForegroundHoverColor: colorPalette.blue3,
                textForegroundColor: colorPalette.blue3,
                textForegroundHoverColor: colorPalette.blue3,
                borderColor: colorPalette.grey6,
                borderHoverColor: colorPalette.blue3,
            },
            warning: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.yellow3,
                iconForegroundHoverColor: colorPalette.yellow3,
                textForegroundColor: colorPalette.yellow3,
                textForegroundHoverColor: colorPalette.yellow3,
                borderColor: colorPalette.grey6,
                borderHoverColor: colorPalette.yellow3,
            },
            danger: {
                backgroundColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.red2,
                iconForegroundHoverColor: colorPalette.red2,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey6,
                borderHoverColor: chroma(colorPalette.red1).brighten(.3).css(),
            },
        },
        pill: {
            primary: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.red,
            },
            secondary: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.grey7,
            },
            success: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.green2,
            },
            info: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.blue3,
            },
            warning: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.yellow3,
            },
            danger: {
                backgroundColor: colorPalette.grey3,
                backgroundHoverColor: colorPalette.grey4,
                iconForegroundColor: colorPalette.grey12,
                iconForegroundHoverColor: colorPalette.grey12,
                textForegroundColor: colorPalette.grey12,
                textForegroundHoverColor: colorPalette.grey12,
                borderColor: colorPalette.grey5,
                borderHoverColor: colorPalette.red1,
            },
        },
    },

    textInput: {
        foregroundColor: colorPalette.grey12,
        placeholderColor: colorPalette.grey7,
        iconColor: colorPalette.grey9,
    },
}
