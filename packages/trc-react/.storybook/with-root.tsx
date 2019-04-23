import { ThemeProvider } from 'emotion-theming'
import { select } from '@storybook/addon-knobs';
import { Theme, lightTheme, darkTheme } from '@trainer-road/trc-core';
import './fonts';

export function withRoot(storyFn): React.ReactElement {
    const theme = select('theme', { light: lightTheme, dark: darkTheme }, lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <div css={{
                display: 'flex',
                position: 'absolute',
                boxSizing: 'border-box',
                top: 0,
                left: 0,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                backgroundColor: theme.backgroundColor,
            }}>
                {storyFn()}
            </div>
        </ThemeProvider>
    )
}
