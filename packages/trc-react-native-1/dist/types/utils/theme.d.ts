import React, { ReactNode } from 'react';
import { Theme } from '@trainer-road/trc-core';
export interface ThemeProviderProps {
    children?: ReactNode;
    theme?: Partial<Theme>;
}
export declare const ThemeProvider: React.FunctionComponent<ThemeProviderProps>;
export declare const useTheme: () => Partial<Theme>;
