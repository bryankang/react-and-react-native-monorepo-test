// TODO: Make everything kebabcase so it works better with props
export interface Theme {
    name: string;
    backgroundColor: string;

    colors: {
        foreground: string;

        background1: string;
        background2: string;
        background3: string;
        background4: string;

        primary: string;
        default: string;
        danger: string;
        success: string;
        info: string;
        warning: string;

        grey: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        lightblue: string;
        purple: string;

        placeholder: string;
        strava: string;
        garmin: string;
        trainingPeaks: string;
        dropbox: string;
    }

    text: {
        emphases: {
            default: number;
            semimuted: number;
            muted: number;
            disabled: number;
        };
        categories: {
            heading1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading3: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading4: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading5: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading6: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            heading7: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "capitalize" | "lowercase" | "capitalize";
            };

            "paragraph-lead": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            paragraph: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            "paragraph--semibold": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            "paragraph-s": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            "paragraph-s--semibold": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            "paragraph-xs": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            "paragraph-xs--semibold": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "lowercase" | "capitalize";
            };

            label: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "uppercase" | "lowercase" | "capitalize";
            };

            "label-s": {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "uppercase" | "lowercase" | "capitalize";
            };


        };
    };

    icon: {
        states: {
            active: string;
            default: string;
            disabled: string;
        },
        sizes: {
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            xxl: number;
        },
    };

    // Can't set background color on ios, so use transparent for both
    // statusBar: {
    //     backgroundColor: string;
    // };



    // // Abackgroundcolor, surface, etc

    // typography: {
    //     headline1: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     headline2: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     headline3: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     headline4: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     headline5: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     }

    //     headline6: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     subtitle1: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     subtitle2: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     body1: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     body2: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     body3: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     },

    //     button: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     caption1: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     caption2: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     overline1: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };

    //     overline2: {
    //         fontFamily: string;
    //         fontSize: number;
    //         lineHeight: number;
    //         fontWeight: number | string;
    //         letterSpacing: number;
    //         textDecoration: string;
    //         textTransform: string;
    //     };
    // };

    button: {
        contained: {
            secondary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            };
            primary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            };
            success: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            };
        };
        outlined: {
            secondary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            };
            primary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            };
            success: {
                backgroundColor: string;
                backgroundHoverColor: string;
                // backgroundDisabledColor: string;
                borderColor: string;
                borderHoverColor: string;
                // borderDisabledColor: string;
                textColor: string;
                iconColor: string;
            }
        };

        // outlined: {
        //     none: {
        //         borderColor: string;
        //         borderOverlayColor: string; // use this to deal with border hover
        //         color: string;
        //     };
        //     primary: {
        //         borderColor: string;
        //         borderOverlayColor: string; // use this to deal with border hover
        //         color: string;
        //     };
        // };
    };

    pillButton: {
        backgroundColor: string;
        backgroundColorActive: string;
        borderColor: string;
        borderColorActive: string;
        foregroundColor: string;
        foregroundColorActive: string;
    };

    card: {
        backgroundColor: string;
        shadowColor: string;
        shadowOffsetX: number,
        shadowOffsetY: number,
        shadowBlurRadius: number,
        shadowSpreadRadius: number,
        borderRadius: number,
    };
}
// this is probably a worthless abstraction...
// just use raw values at the component level...
