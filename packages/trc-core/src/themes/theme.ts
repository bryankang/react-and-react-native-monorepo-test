export interface Theme {
    name: string;
    backgroundColor: string;
    color: string;

    // colors: {

    // }

    emphasis: {
        default: {
            lowest: number;
            low: number;
            medium: number;
            high: number;
            highest: number;
        };
        inverse: {
            lowest: number;
            low: number;
            medium: number;
            high: number;
            highest: number;
        };
    };

    // TODO: Need to add basic colors and
    // functional names that reference them.
    // SCRATCH THAT. It's for clients job


    // Abackgroundcolor, surface, etc

    typography: {
        headline1: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        headline2: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        headline3: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        headline4: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        headline5: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        }

        headline6: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        subtitle1: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        subtitle2: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        body1: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        body2: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        body3: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        },

        button: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        caption1: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        caption2: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        overline1: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };

        overline2: {
            fontFamily: string;
            fontSize: number;
            lineHeight: number;
            fontWeight: number | string;
            letterSpacing: number;
            textDecoration: string;
            textTransform: string;
        };
    };


    // colors: {
    //     background1: string;
    //     background2: string;
    //     background3: string;
    //     primary: string;
    //     danger: string;
    //     blue: string;
    //     green: string;
    //     red: string;
    //     brown: string;
    //     yellow: string;
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
