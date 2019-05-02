import * as R from "ramda";
import { ViewStyle } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";

export interface CardStyles {
    root: Partial<ViewStyle>;
    content: Partial<ViewStyle>;
}

export function getCardStyles(args: { theme: Partial<Theme> }): CardStyles {
    const defaultCardStyles: any = R.pathOr({}, ["card"], lightTheme);
    const cardStyles: any = R.pathOr(defaultCardStyles, ["theme", "card"], args);

    const root =
        // @css
        {
            flexGrow: 1,
            width: "100%",
            height: "100%",
            borderRadius: cardStyles.borderRadius,
            backgroundColor: cardStyles.backgroundColor,
            shadowColor: "black",
            shadowOpacity: 0.24,
            shadowOffset: {
                width: 4,
                height: cardStyles.shadowOffsetY,
            },
            shadowRadius: cardStyles.shadowBlurRadius,
            elevation: 4,
        };

    const content = {
        width: "100%",
        height: "100%",
        overflow: "hidden" as "hidden",
    };

    return {
        root,
        content,
    };
}
