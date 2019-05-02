export interface Theme {
    name: string;
    backgroundColor: string;

    emphases: {
        active: string;
        default: string;
        muted: string;
        disabled: string;
        divider: string;
    };

    colors: {
        background1: string;
        background2: string;
        background3: string;
        background4: string;

        primary: string;
        secondary: string;
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

    typography: {
        heading1: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading2: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading3: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading4: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading5: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading6: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        heading7: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph-lead": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        paragraph: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph--semibold": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph-s": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph-s--semibold": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph-xs": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "paragraph-xs--semibold": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        label: {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
        "label-s": {
            fontFamily: string[];
            fontSize: number;
            lineHeight: number;
            fontWeight: number;
            letterSpacing: number;
            textDecoration: "none" | "underline";
            textTransform: "none" | "uppercase" | "lowercase" | "capitalize";
        };
    };

    button: {
        contained: {
            primary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
            secondary: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
            success: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
            info: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
            warning: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
            danger: {
                backgroundColor: string;
                backgroundHoverColor: string;
                foregroundColor: string;
            };
        };
        outlined: {
            primary: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
            secondary: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
            success: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
            info: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
            warning: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
            danger: {
                backgroundColor: string;
                iconForegroundColor: string;
                textForegroundColor: string;
                borderColor: string;
                borderHoverColor: string;
            };
        };
    };
}
