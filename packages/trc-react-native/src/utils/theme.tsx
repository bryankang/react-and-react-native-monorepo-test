import React, { FC, ReactElement, ReactNode, useContext } from "react";
import { Theme, lightTheme } from "@trainerroad/trc-core";

const ThemeContext = React.createContext({});

export interface ThemeProviderProps {
    children?: ReactNode;
    theme?: Partial<Theme>;
}

const defaultProps = {
    children: null,
    theme: lightTheme,
};

const _ThemeProvider: FC<ThemeProviderProps> = (props: any): ReactElement => {
    return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>;
};

_ThemeProvider.defaultProps = defaultProps;

export const ThemeProvider = _ThemeProvider;

export const useTheme = (): Partial<Theme> => useContext(ThemeContext);
