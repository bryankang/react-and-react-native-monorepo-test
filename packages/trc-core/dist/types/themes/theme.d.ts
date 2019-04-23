export interface Theme {
    name: string;
    backgroundColor: string;
    color: string;
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
        };
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
        };
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
