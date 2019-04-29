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
    };
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
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            headline2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            headline3: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            headline4: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            headline5: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            headline6: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            subtitle1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            subtitle2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            body1: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            body2: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            body3: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
            overline: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "uppercase" | "uppercase" | "lowercase" | "capitalize";
            };
            caption: {
                fontFamily: string[];
                fontSize: number;
                lineHeight: number;
                fontWeight: number;
                letterSpacing: number;
                textDecoration: "none" | "underline";
                textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
            };
        };
    };
    icon: {
        colors: {
            active: string;
            default: string;
            disabled: string;
        };
    };
    button: {
        contained: {
            none: {
                backgroundColor: string;
                backgroundOverlayColor: string;
                color: string;
            };
            primary: {
                backgroundColor: string;
                backgroundOverlayColor: string;
                color: string;
            };
        };
        outlined: {
            none: {
                borderColor: string;
                borderOverlayColor: string;
                color: string;
            };
            primary: {
                borderColor: string;
                borderOverlayColor: string;
                color: string;
            };
        };
    };
    card: {
        backgroundColor: string;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowBlurRadius: number;
        shadowSpreadRadius: number;
        borderRadius: number;
    };
}
