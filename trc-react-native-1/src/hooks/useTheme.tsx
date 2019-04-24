import React, { useContext } from 'react';

const ThemeContext = React.createContext({});

export function ThemeProvider(props: any) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
