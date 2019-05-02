// import chroma from "chroma-js";
// import { darkTheme } from '../darkTheme/darkTheme';
// import { Theme } from "../theme1";
// import { colorPalette } from '../common/color-palette';

// const primarySansSerifFontFamily = ["Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"];

// export const lightTheme: Theme = {
//     ...darkTheme,
//     name: 'light',
//     backgroundColor: 'white',

//     colors: {
//         foreground: colorPalette.black,

//         background1: colorPalette.grey1,
//         background2: colorPalette.grey2,
//         background3: colorPalette.grey3,
//         background4: colorPalette.grey4,

//         primary: colorPalette.red2,
//         default: colorPalette.grey3,
//         danger: colorPalette.danger,
//         success: colorPalette.green2,
//         info: colorPalette.blue3,
//         warning: colorPalette.warning,

//         grey: "#dbdbdb",
//         red: "#ff4147",
//         orange: "#ff8449",
//         yellow: "#f4d255",
//         green: "#9ac977",
//         blue: "#1890d1",
//         lightblue: "#58cbf1",
//         purple: "#ad04df",

//         placeholder: '#da1ccd',
//         strava: colorPalette.strava,
//         garmin: colorPalette.garmin,
//         trainingPeaks: colorPalette.trainingPeaks,
//         dropbox: colorPalette.dropbox,
//     },

//     text: {
//         emphases: {
//             default: .9,
//             semimuted: .7,
//             muted: .5,
//             disabled: .3,
//         },
//         categories: {
//             heading1: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 40,
//                 lineHeight: 40 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading2: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 34,
//                 lineHeight: 34 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading3: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 27,
//                 lineHeight: 27 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: .2,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading4: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 24,
//                 lineHeight: 24 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading5: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 18,
//                 lineHeight: 18 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: .2,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading6: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 14,
//                 lineHeight: 14 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             heading7: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 12,
//                 lineHeight: 12 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "capitalize",
//             },

//             "paragraph-lead": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 24,
//                 lineHeight: 24 * 1.5,
//                 fontWeight: 600,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             paragraph: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 18,
//                 lineHeight: 18 * 1.5,
//                 fontWeight: 400,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             "paragraph--semibold": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 18,
//                 lineHeight: 18 * 1.5,
//                 fontWeight: 600,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             "paragraph-s": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 14,
//                 lineHeight: 14 * 1.5,
//                 fontWeight: 400,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             "paragraph-s--semibold": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 14,
//                 lineHeight: 14 * 1.5,
//                 fontWeight: 600,
//                 letterSpacing: 0,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             "paragraph-xs": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 12,
//                 lineHeight: 12 * 1.5,
//                 fontWeight: 400,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             "paragraph-xs--semibold": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 12,
//                 lineHeight: 12 * 1.5,
//                 fontWeight: 600,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "none",
//             },

//             label: {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 12,
//                 lineHeight: 12 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0.2,
//                 textDecoration: "none",
//                 textTransform: "uppercase",
//             },

//             "label-s": {
//                 fontFamily: primarySansSerifFontFamily,
//                 fontSize: 10,
//                 lineHeight: 10 * 1.2,
//                 fontWeight: 700,
//                 letterSpacing: 0.4,
//                 textDecoration: "none",
//                 textTransform: "uppercase",
//             },
//         },
//     },

//     icon: {
//         states: {
//             active: 'rgba(0,0,0,1)',
//             default: 'rgba(0,0,0,.6)',
//             disabled: 'rgba(0,0,0,.12)',
//         },
//         sizes: {
//             xxs: 12,
//             xs: 16,
//             s: 20,
//             m: 24,
//             l: 32,
//             xl: 40,
//             xxl: 56,
//         },
//     },

//     // statusBar: {
//     //     backgroundColor: "rgba(255,255,255,.8)",
//     // },

//     button: {
//         contained: {
//             secondary: {
//                 backgroundColor: colorPalette.grey2,
//                 backgroundHoverColor: colorPalette.grey6,
//                 // backgroundDisabledColor: chroma(colorPalette.grey6).brighten().hex(),
//                 borderColor: colorPalette.grey2,
//                 borderHoverColor: colorPalette.grey6,
//                 // borderDisabledColor: chroma(colorPalette.grey6).brighten().hex(),
//                 textColor: colorPalette.white,
//                 iconColor: colorPalette.white,
//             },
//             primary: {
//                 backgroundColor: colorPalette.red,
//                 backgroundHoverColor: colorPalette.redHover,
//                 // backgroundDisabledColor: chroma(colorPalette.red).brighten().hex(),
//                 borderColor: colorPalette.red,
//                 borderHoverColor: colorPalette.redHover,
//                 // borderDisabledColor: chroma(colorPalette.red).brighten().hex(),
//                 textColor: colorPalette.white,
//                 iconColor: colorPalette.white,
//             },
//             success: {
//                 backgroundColor: colorPalette.green,
//                 backgroundHoverColor: colorPalette.greenHover,
//                 // backgroundDisabledColor: chroma(colorPalette.green).brighten().hex(),
//                 borderColor: colorPalette.green,
//                 borderHoverColor: colorPalette.greenHover,
//                 // borderDisabledColor: chroma(colorPalette.green).brighten().hex(),
//                 textColor: colorPalette.white,
//                 iconColor: colorPalette.white,
//             },
//         },
//         outlined: {
//             secondary: {
//                 backgroundColor: "rgba(0,0,0,0)",
//                 backgroundHoverColor: "rgba(0,0,0,0)",
//                 // backgroundDisabledColor: chroma(colorPalette.grey3).brighten(.8).hex(),
//                 borderColor: colorPalette.grey11,
//                 borderHoverColor: colorPalette.grey7,
//                 // borderDisabledColor: chroma(colorPalette.grey5).brighten(.8).hex(),
//                 textColor: colorPalette.grey7,
//                 iconColor: colorPalette.grey7,
//             },
//             primary: {
//                 backgroundColor: "rgba(0,0,0,0)",
//                 backgroundHoverColor: "rgba(0,0,0,0)",
//                 // backgroundDisabledColor: chroma(colorPalette.red).brighten().hex(),
//                 borderColor: colorPalette.grey11,
//                 borderHoverColor: colorPalette.red,
//                 // borderDisabledColor: chroma(colorPalette.red).brighten().hex(),
//                 textColor: colorPalette.red,
//                 iconColor: colorPalette.red,
//             },
//             success: {
//                 backgroundColor: "rgba(0,0,0,0)",
//                 backgroundHoverColor: "rgba(0,0,0,0)",
//                 // backgroundDisabledColor: chroma(colorPalette.green).alpha(.5).hex(),
//                 borderColor: colorPalette.grey11,
//                 borderHoverColor: colorPalette.greenHover,
//                 // borderDisabledColor: chroma(colorPalette.green).alpha(.5).hex(),
//                 textColor: colorPalette.green,
//                 iconColor: colorPalette.green,
//             },
//         },
//     },

//     pillButton: {
//         backgroundColor: "rgba(255,255,255,0)",
//         backgroundColorActive: colorPalette.white,
//         borderColor: colorPalette.grey11,
//         borderColorActive: colorPalette.red,
//         foregroundColor: colorPalette.grey9,
//         foregroundColorActive: colorPalette.grey7,
//     },

//     card: {
//         backgroundColor: colorPalette.white,
//         shadowColor: 'rgba(0,0,0,.16)',
//         shadowOffsetX: 0,
//         shadowOffsetY: 4,
//         shadowBlurRadius: 12,
//         shadowSpreadRadius: 0,
//         borderRadius: 10,
//     },
// };
