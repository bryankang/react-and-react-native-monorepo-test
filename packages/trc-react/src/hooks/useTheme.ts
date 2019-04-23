import { useContext } from 'react';
import { ThemeContext } from '@emotion/core';

export const useTheme = (): object => useContext(ThemeContext);
