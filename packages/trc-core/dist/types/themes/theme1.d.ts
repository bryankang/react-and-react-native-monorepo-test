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
        };
        sizes: {
            xxs: number;
            xs: number;
            s: number;
            m: number;
            l: number;
            xl: number;
            xxl: number;
        };
    };
    button: {
        contained: {
            secondary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
            primary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
            success: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
        };
        outlined: {
            secondary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
            primary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
            success: {
                backgroundColor: string;
                backgroundHoverColor: string;
                borderColor: string;
                borderHoverColor: string;
                textColor: string;
                iconColor: string;
            };
        };
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
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowBlurRadius: number;
        shadowSpreadRadius: number;
        borderRadius: number;
    };
}
