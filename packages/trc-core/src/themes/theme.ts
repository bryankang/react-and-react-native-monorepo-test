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
            headline1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            };

            headline2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            headline3: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            headline4: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            headline5: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            headline6: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            subtitle1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            subtitle2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            body1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            body2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            body3: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },

            overline: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "uppercase" | "uppercase" | "lowercase" | "capitalize",
            },

            caption: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline",
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize",
            },


        },
    },

    icon: {
        colors: {
            active: string;
            default: string;
            disabled: string;
        }
    };
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
            none: {
                backgroundColor: string;
                backgroundOverlayColor: string;
                // backgroundDisabledColor
                color: string;
            };
            primary: {
                backgroundColor: string;
                backgroundOverlayColor: string;
                color: string;
            };
            // primary: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // secondary: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // success: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // info: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // warning: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // error: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
        };

        outlined: {
            none: {
                borderColor: string;
                borderOverlayColor: string; // use this to deal with border hover
                color: string;
            };
            primary: {
                borderColor: string;
                borderOverlayColor: string; // use this to deal with border hover
                color: string;
            };
            // primary: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // success: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // info: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // warning: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
            // error: {
            //     backgroundColor: string;
            //     color: string;
            //     hoverBackgroundColor: string;
            //     activeColor: string;
            //     outlineColor: string;
            //     borderColor: string;
            //     borderHoverColor: string;
            //     shadowColor: string;
            // };
        };
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
