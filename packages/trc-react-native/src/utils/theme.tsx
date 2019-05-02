import React, { FC, ReactElement, ReactNode, useContext } from "react";
import { Theme, lightTheme } from "@trainerroad/trc-core";

const ThemeContext = React.createContext({});

export interface ThemeProviderProps {
    children?: ReactNode;
    theme?: Partial<Theme>;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children = null,
    theme = lightTheme,
}): ReactElement => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Partial<Theme> => useContext(ThemeContext);
